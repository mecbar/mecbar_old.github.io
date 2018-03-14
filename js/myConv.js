function cnn2(url1) {
    var layer_def = [];
    layer_def.push({ type: 'input', out_sx: 32, out_sy: 32, out_depth: 3 }); // declare size of input
    // output Vol is of size 32x32x3 here
    layer_def.push({ type: 'conv', sx: 5, filters: 16, stride: 1, pad: 2, activation: 'relu' });
    // the layer will perform convolution with 16 kernels, each of size 5x5.
    // the input will be padded with 2 pixels on all sides to make the output Vol of the same size
    // output Vol will thus be 32x32x16 at this point
    layer_def.push({ type: 'pool', sx: 2, stride: 2 });
    // output Vol is of size 16x16x16 here
    layer_def.push({ type: 'conv', sx: 5, filters: 20, stride: 1, pad: 2, activation: 'relu' });
    // output Vol is of size 16x16x20 here
    layer_def.push({ type: 'pool', sx: 2, stride: 2 });
    // output Vol is of size 8x8x20 here
    layer_def.push({ type: 'conv', sx: 5, filters: 20, stride: 1, pad: 2, activation: 'relu' });
    // output Vol is of size 8x8x20 here
    layer_def.push({ type: 'pool', sx: 2, stride: 2 });
    // output Vol is of size 4x4x20 here
    layer_def.push({ type: 'softmax', num_classes: 10 });
    // output Vol is of size 1x1x10 here

    net = new convnetjs.Net();
    net.makeLayers(layer_def);

    // helpful utility for converting images into Vols is included
    var x = convnetjs.img_to_vol(url1);
    var my_vol = net.forward(x);
    console.log(my_vol);

}


var batch_iterator = 100;
var modello_draw = 100;
var lossLoss = -1;
var ori_canvas, nn_canvas, ori_ctx, nn_ctx, image_inserita;
var sz = 200; // size of our drawing area
var counter = 0;
var timer;

function cnnFiles(file) {

    img = fileFile(file);
    console.log(img);
    document.getElementById('cnnn').appendChild(img);
    cnn2(img);
}


var data, labels;
var layer_definition, net, trainer;

var t, layer_definition = [];
layer_definition.push({ type: 'input', out_sx: 1, out_sy: 1, out_depth: 2 }); // 2 inputs: x, y 
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'fc', num_neurons: 30, activation: 'relu' });
layer_definition.push({ type: 'regression', num_neurons: 3 }); // 3 outputs: r,g,b

net = new convnetjs.Net();
net.makeLayers(layer_definition);

trainer = new convnetjs.SGDTrainer(net, { learning_rate: 0.01, momentum: 0.9, batch_size: 5, l2_decay: 0.0 });


function stop() {
    window.clearInterval(timer - 1);
    window.clearInterval(timer);
    counter = 0;
    $('#cnnsh').hide();
    image_inserita = null;
    $('#canv2').hide();
    $('#canv2_2').hide();
    $('#rapporto').hide();
    $('#immmagine2').show();
    $('#stop').hide();
    $(function() {
        $('#immmagine2').show();
        $('#stop').hide();
    });
}



function update(image_inserita) {
    if (image_inserita == 0) return;
    // forward prop the data
    var W = 200;
    var H = 200;
    var p = image_inserita.data;
    var v = new convnetjs.Vol(1, 1, 2);
    var loss = 0;
    var lossi = 0;
    var N = batch_iterator;
    for (var iters = 0; iters < trainer.batch_size; iters++) {
        for (var i = 0; i < N; i++) {
            // disgno coordinate
            var x = convnetjs.randi(0, W);
            var y = convnetjs.randi(0, H);
            var ix = ((W * y) + x) * 4;
            var r = [p[ix] / 255.0, p[ix + 1] / 255.0, p[ix + 2] / 255.0]; // r g b
            v.w[0] = (x - W / 2) / W;
            v.w[1] = (y - H / 2) / H;
            var stats = trainer.train(v, r);
            loss += stats.loss;
            lossi += 1;
        }
    }
    loss /= lossi;

    if (counter === 0) lossLoss = loss;
    else lossLoss = 0.99 * lossLoss + 0.01 * loss;

    var t = '';
    t += 'loss: ' + lossLoss;
    t += '<br>';
    t += 'iteration: ' + counter;
    $("#rapporto").html(t);
}

function ricrea() {
    if (counter % modello_draw !== 0) return;

    // iterate over all pixels in the target array, evaluate them
    // and draw
    var W = 200;
    var H = 200;

    var nn_canvas = document.getElementById('canv2_2');

    var nn_ctx = nn_canvas.getContext("2d");
    var g = nn_ctx.getImageData(0, 0, W, H);
    var v = new convnetjs.Vol(1, 1, 2);
    for (var x = 0; x < W; x++) {
        v.w[0] = (x - W / 2) / W;
        for (var y = 0; y < H; y++) {
            v.w[1] = (y - H / 2) / H;

            var ix = ((W * y) + x) * 4;
            var r = net.forward(v);
            g.data[ix + 0] = Math.floor(255 * r.w[0]);
            g.data[ix + 1] = Math.floor(255 * r.w[1]);
            g.data[ix + 2] = Math.floor(255 * r.w[2]);
            g.data[ix + 3] = 255; // alpha...
        }
    }
    nn_ctx.putImageData(g, 0, 0);
}

function cnn2Files(file) {
    var URL = window.URL || window.URL;
    var url = URL.createObjectURL(file[0]);
    var img = new Image();
    img.file = file[0];
    img.src = url;
    img.onload = function() {
        img.setAttribute('id', 'canv2');
        img.setAttribute('width', '200');
        img.setAttribute('height', '200');
        img.setAttribute('crossOrigin', 'anonymous');
        //document.getElementById('cnnn2').appendChild(img);
        var canva = document.getElementById('canv2');
        var context = canva.getContext("2d");
        //disegno immagine su browser
        context.drawImage(img,
            0, 0,
            200, 200);
        var image_inserita = context.getImageData(0, 0, sz, sz);
        window.URL.revokeObjectURL(this.url);
        $('#immmagine2').hide();
        $('#stop').show();
        $('#canv2').show();
        $('#canv2_2').show();
        $('#rapporto').show();
        $('#cnnsh').show();
        // imposto inizio ciclo cnn
        timer = window.setInterval(function() {
            inizio(image_inserita);
        }, 1);
    };
}


function inizio(img) {

    update(img);
    ricrea();
    counter += 1;
}