var dropCookie = true; // false disables the Cookie, allowing you to style the banner
var cookieDurata = 28; // numero di giorni prima che cookie expires 
var cookieNome = 'MecCookie'; // 
var cookieValue = 'on';
var expires;
var bane;
var zero = 'zero';
var uno = 'uno';
var due = 'due';
var zerouno = 'zerouno';
var zerodue = 'zerodue';
var unozero = 'unozero';
var unodue = 'unodue';
var dueuno = 'dueuno';
var duezero = 'duezero';
var count_bot = 1;

function closeChat() {
    // seleziono tutti gli id = ch1
    $('[id = ch1]').remove();
    $('#close_button').hide();
    $('#tasto-ver').show();
    $('#botwin').hide();
    $('#botwin').css('height', '300px');
}


function question(query) {
    $('#close_button').show();

    count_bot += 1;
    // var testo = '<div class="chip"><img src="foto/man.png" width="25px" height="25px">' + '  ' + query + '</div>';
    var testo = '<img src="foto/man.png" width="25px" height="25px">' + '  ' + query;
    window.insert.value = '';
    const client = new ApiAi.ApiAiClient({
        accessToken: 'ffdc25b99f494d43a1ce3ff8ac380418'
    });
    const promise = client.textRequest(query);

    promise
        .then(handleResponse)
        .catch(handleError);

    var new1 = '<div class="row" id="ch1" style="margin-bottom:7px"> <div class="col-lg-12" id="bot.entry[count_bot]"></div></div>';
    var new2 = '<div class="row" id="ch1" style="margin-bottom:7px"><div id="output.entry[count_bot]"> <span id="input1"></span></div></div>';
    var newBloc = new1 + new2;
    $('#bot1').append(newBloc);
    var hbot = $('#botwin').css('height');
    var h1bot = parseInt(hbot.slice(0, -2));
    var h2bot = h1bot + 100;
    var h3bot = h2bot.toString() + 'px';
    if (h2bot >= 500) {
        //   $('#bot').slimScroll();
        $('#my_botto').css('height', '300px');
        /*  $('#botwin').scrollTop(
              50
          );
        $(document).ready(function() {
            $('#mybotto').animate({
                scrollTop: $('#my_botto').get(0).scrollHeight
            }, 2000);
        });
*/
    } else {
        $('#botwin').css('height', h3bot);
    }






    function handleResponse(serverResponse) {
        var Bot = '<img src = "foto/bot.png" width = "25px" height = "25px">';
        var sp1 = Bot + '  ' + serverResponse.result.fulfillment.speech;

        $('#output\\.entry\\[count_bot\\]').html(sp1).show().addClass('output1').attr('id', 'output.entry[count]');
        $('#bot\\.entry\\[count_bot\\]').html(testo).show().addClass('bot1').attr('id', 'bot.entry[count]');
        $(document).ready(function() {
            $('#botwin').animate({
                scrollTop: $('#botwin').height()
            }, 2000);
        });
    }

    function handleError(serverError) {}
}

/*

function question(id, query) {
    var accessToken = 'eb2d382e34294ecc9c23200d7b79b0f0';
    var baseUrl = "https://api.api.ai/v1/";
    var testo = query;
    //var testo = $speechInput.val();

    $.ajax({
        type: "GET",
        url: baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
                // "Authorization": accessToken
        },
        // data: JSON.stringify({ query: testo, lang: "it" }),
        data: JSON.stringify({ query: testo, v: 20170712, lang: "it", sessionId: "4a278ca7-798c-484b-861c-87c92469fc32" }),
        success: function(data) {
            var speech = data.speech;

            //var id1 = id.toString();
            var sp1 = speech;
            var risp = 'o' + id;
            console.log(risp);
            if (risp == 'oinput1') {
                $('#output1').html(sp1).show();
                $('#input2').show();
            }
            if (risp == 'oinput2') {
                $('#output2').html(sp1).show();
                $('#input3').show();
            }
            if (risp == 'oinput3') {
                $('#output3').html(sp1).show();
            };
        },
        error: function() {
            console.log('messageInternalError');
        }
    });
}

*/

function chiudi_cnn1() {
    $('#chiudi_cnn1').hide();
    $('#cnn1').hide();
}

function handleFiles(file) {
    $('#logevent1').remove();
    $('#cnn1').show();
    NProgress.start();
    var URL = window.URL || window.URL;
    var url = URL.createObjectURL(file[0]);
    var img = new Image();
    img.file = file[0];
    img.src = url;
    img.onload = function() {
        $('#load').show();
        start(url);
        NProgress.set(0.6);
    };

}



function callBot(par) {
    $('#tasto-ver').hide();
    $('#botwin').removeClass('classBot');
    $('#botwin').fadeIn(2000);
    if (par) {

        $('#botwin').addClass('classBot');

    }

}

function topFunction() {
    $('html,body').animate({
        scrollTop: 0
    }, 1200, function() {});
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    $('#privacy').css('display', 'none');
}


function espandiCnneng() {
    var btnChiudi = '<a href="#ml" class="blog-btn-chiudi1" id="cnneng2" onclick="chiudiCnneng()">Close </a>';
    $('#cnn-eng-espandi').after(btnChiudi);
    $('#cnneng2').css('display', 'block');
    $('#cnn-eng-espandi').remove();
    $('p').css('margin-bottom', '0px');
    $('#cnn-eng').css('display', 'block');
    if ($(window).width() <= 600) {
        $('.ml').css('height', '3300px');
    } else {
        $('.ml').css('height', '2200px');
    }
}

function chiudiCnneng() {
    var btnChiudi = '<a href="#ml" class="blog-btn-chiudi1" id="cnn-eng-espandi" onclick="espandiCnneng()">Read more</a>';
    $('#cnneng2').after(btnChiudi);
    $('#cnn-eng-espandi').css('display', 'block');
    $('#cnneng2').remove();
    $('p').css('margin-bottom', '0px');
    $('#cnn-eng').css('display', 'none');
    if ($(window).width() <= 600) {
        $('.ml').css('height', '500px');
    } else {
        $('.ml').css('height', '420px');
    }
}

function espandiCnnita() {
    var btnChiudi = '<a href="#ml" class="blog-btn-chiudi1" id="cnnita2" onclick="chiudiCnnita()">Close</a>';
    $('#cnn-ita-espandi').after(btnChiudi);
    $('#cnnita2').css('display', 'block');
    $('#cnn-ita-espandi').remove();
    $('p').css('margin-bottom', '0px');
    $('#cnn-ita').css('display', 'block');
    if ($(window).width() <= 600) {
        $('.ml').css('height', '3450px');
    } else {
        $('.ml').css('height', '2200px');
    }
}

function chiudiCnnita() {
    var btnChiudi = '<a href="#ml" class="blog-btn-chiudi1" id="cnn-ita-espandi" onclick="espandiCnnita()">Read more</a>';
    $('#cnnita2').after(btnChiudi);
    $('#cnn-ita-espandi').css('display', 'block');
    $('#cnnita2').remove();
    $('p').css('margin-bottom', '0px');
    $('#cnn-ita').css('display', 'none');
    if ($(window).width() <= 600) {
        $('.ml').css('height', '500px');
    } else {
        $('.ml').css('height', '420px');
    }
}

var stato = null;

function espandiBlog(stato) {
    if (stato == 'zero') {

        if ($(window).width() <= 992) {
            //make heaps of CSS changes 
            $('#change-blog').removeClass('blog-principale').addClass('blog-mobile0');
            var btnChiudi = '<a href="#box-blog1" class="blog-btn-chiudi" id="blog-tasto-chiudi" onclick="chiudiBlog(zero)">Close</a>';
            $('#blog-btn-espandi').after(btnChiudi);
            $('#blog-btn-espandi').css('display', 'block');
            $('#blog-tasto-espandi').remove();
            $('#blog-second').removeClass('blog-second');
            $('#vr-spazio').removeClass('blog-titolo2');
        } else {

            var btnChiudi = '<a href="#box-blog1" class="blog-btn-chiudi" id="blog-tasto-chiudi" onclick="chiudiBlog(zero)">Close</a>';
            $('#blog-btn-espandi').after(btnChiudi);
            $('#blog-btn-espandi').css('display', 'block');
            $('#blog-tasto-espandi').remove();
            $('p').css('margin-bottom', '0px');
            $('#space1').removeClass('row img-space').addClass('row img-space-max');
            $('#blog-mini1').removeClass('row blog-second').addClass('row blog-mini1');
            $('#blog-mini2').removeClass('row blog-second').addClass('row blog-mini2');
            $('#change-blog').removeClass('col l4').addClass('col l8');
            $('#img1').removeClass('blog-img-secondario').addClass('blog-img-max');
            $('#blog-second').removeClass('row blog-second').addClass('row blog-principal');
            $('#box-blog1').addClass('box-blog1');
            $('.box-blog1').css('max-height', '3700px');
            $('#blog-espandi-mini11').remove();
            $('#blog-espandi-mini1').remove();
            var btnEspandi1 = '<a href="#box-blog1" class="blog-btn-espandi-mini1" id="blog-espandi-mini11" onclick="espandiBlog(zerouno)"> Read more </a>';
            $('#blog-btn-espandi-mini1').after(btnEspandi1);
            $('#blog-tasto-espandi-mini1').remove();
            $('#blog-espandi-mini22').remove();
            $('#blog-espandi-mini2').remove();
            var btnEspandi2 = '<a href="#box-blog1" class="blog-btn-espandi-mini2" id="blog-espandi-mini22" onclick="espandiBlog(zerodue)"> Read more </a>';
            $('#blog-btn-espandi-mini2').after(btnEspandi2);
            $('#blog-tasto-espandi-mini2').remove();

        }
    }
    if (stato == 'uno') {

        if ($(window).width() <= 992) {
            $('#change-blog1').addClass('blog-mobile1');
            var btnChiudi = '<a href="#change-blog1" class="blog-btn-chiudi-mini1" id="blog-tasto-chiudi" onclick="chiudiBlog(uno)">Close</a>';
            $('#blog-btn-espandi-mini1').after(btnChiudi);
            $('#blog-btn-espandi-mini1').css('display', 'block');
            $('.blog-btn-espandi-mini1').remove();
            $('#blog-mini1').removeClass('blog-second');


        } else {
            var btnChiudi = '<a href="#box-blog1" class="blog-btn-chiudi-mini1" id="blog-tasto-chiudi" onclick="chiudiBlog(uno)">Close</a>';
            $('#blog-btn-espandi-mini1').after(btnChiudi);
            $('#blog-btn-espandi-mini1').css('display', 'block');
            $('.blog-btn-espandi-mini1').remove();
            $('p').css('margin-bottom', '0px');
            $('#space2').removeClass('row img-space').addClass('row img-space-max');
            $('#blog-second').removeClass('row blog-second').addClass('row blog-mini11');
            $('#blog-mini2').removeClass('row blog-second').addClass('row blog-mini222');
            $('#change-blog1').removeClass('col l4').addClass('col l8');
            $('#img2').removeClass('blog-img-secondario').addClass('blog-img-max');
            $('#blog-mini1').removeClass('row blog-second').addClass('row blog-principal1');
            $('#box-blog1').addClass('box-blog1');
            $('.box-blog1').css('max-height', '4950px !important');
            $('#blog-espandi').remove();
            var btnEspandi1 = '<a href="#box-blog1" class="blog-btn-espandi"  id="blog-espandi" onclick="espandiBlog(unozero)"> Read more </a>';
            $('#blog-btn-espandi').after(btnEspandi1);
            $('#blog-tasto-espandi').remove();
            $('#blog-espandi-mini2').remove();
            $('#blog-espandi-mini22').remove();
            var btnEspandi2 = '<a href="#box-blog1" class="blog-btn-espandi-mini2"  id="blog-espandi-mini2" onclick="espandiBlog(unodue)"> Read more </a>';
            $('#blog-btn-espandi-mini2').after(btnEspandi2);
            $('#blog-tasto-espandi-mini2').remove();
        }
    }

    if (stato === 'due') {
        if ($(window).width() <= 992) {

            $('#change-blog2').addClass('blog-mobile2');
            var btnChiudi = '<a href="#change-blog2" class="blog-btn-chiudi-mini2" id="blog-tasto-chiudi-mini2" onclick="chiudiBlog(due)">Close</a>';
            $('#blog-btn-espandi-mini2').after(btnChiudi);
            $('#blog-btn-espandi-mini2').css('display', 'block');
            $('.blog-btn-espandi-mini2').remove();
            $('#blog-mini2').removeClass('blog-second');

        } else {
            var btnChiudi = '<a href="#box-blog1" class="blog-btn-chiudi-mini2" id="blog-tasto-chiudi-mini2" onclick="chiudiBlog(due)">Close</a>';
            $('#blog-btn-espandi-mini2').after(btnChiudi);
            $('#blog-btn-espandi-mini2').css('display', 'block');
            $('.blog-btn-espandi-mini2').remove();
            $('p').css('margin-bottom', '0px');
            $('#space3').removeClass('row img-space').addClass('row img-space-max');
            $('#blog-second').removeClass('row blog-second').addClass('row blog-mini111');
            $('#blog-mini1').removeClass('row blog-second').addClass('row blog-mini22');
            $('#change-blog2').removeClass('col l4').addClass('col l8');
            $('#img3').removeClass('blog-img-secondario').addClass('blog-img-max');
            $('#blog-mini2').removeClass('row blog-second').addClass('row blog-principal2');
            $('#box-blog1').addClass('box-blog1');
            $('.box-blog1').css('max-height', '3700px');
            $('#blog-espandi').remove();
            var btnEspandi1 = '<a href="#box-blog1" class="blog-btn-espandi" id="blog-espandi" onclick="espandiBlog(duezero)"> Read more</a>';
            $('#blog-btn-espandi').after(btnEspandi1);
            $('#blog-tasto-espandi').remove();
            $('#blog-espandi-mini1').remove();
            $('#blog-espandi-mini11').remove();
            /* $('a').removeAttr('href'); */
            var btnEspandi2 = '<a href="#box-blog1" class="blog-btn-espandi-mini1" id="blog-espandi-mini1" onclick="espandiBlog(dueuno)"> Read more </a>';
            $('#blog-btn-espandi-mini1').after(btnEspandi2);
            $('#blog-tasto-espandi-mini1').remove();
        }

    }
    if (stato == 'zerodue') {
        chiudiBlog(zero);
        espandiBlog(due);

    }
    if (stato == 'zerouno') {
        chiudiBlog(zero);
        espandiBlog(uno);
    }
    if (stato == 'unozero') {
        chiudiBlog(uno);
        espandiBlog(zero);
    }
    if (stato == 'unodue') {
        chiudiBlog(uno);
        espandiBlog(due);
    }
    if (stato == 'dueuno') {
        chiudiBlog(due);
        espandiBlog(uno);
    }
    if (stato == 'duezero') {
        chiudiBlog(due);
        espandiBlog(zero);
    }
}


function chiudiBlog(stato) {

    if (stato == 'zero') {

        if ($(window).width() <= 992) {
            var btnEspandi = '<button class="blog-btn-espandi" type="button" id="blog-tasto-espandi" onclick="espandiBlog(zero)"> Read more </button>';
            $('.blog-btn-chiudi').before(btnEspandi);
            $('.blog-btn-chiudi').remove();
            $('#blog-btn-espandi').css('display', 'none');

            $('#change-blog').removeClass('blog-mobile0');
            $('#blog-second').addClass('blog-second');
        } else {
            var btnEspandi1 = '<button class="blog-btn-espandi" type="button" id="blog-tasto-espandi" onclick="espandiBlog(zero)"> Read more </button>';
            $('#blog-btn-espandi').before(btnEspandi1);
            $('.blog-btn-chiudi').remove();
            $('#blog-btn-espandi').css('display', 'none');

            $('#blog-second').removeClass('row blog-secondo').addClass('row blog-second');
            $('#box-blog1').removeClass('box-blog1');
            $('#blog-second').removeClass('row blog-principal').addClass('row blog-second');
            $('#img1').removeClass('blog-img-max').addClass('blog-img-secondario');
            $('#change-blog').removeClass('col l8').addClass('col l4');
            $('#blog-mini2').removeClass('row blog-mini2').addClass('row blog-second');
            $('#blog-mini1').removeClass('row blog-mini1').addClass('row blog-second');
            $('#space1').removeClass('row img-space-max').addClass('row img-space');
        }
    }

    if (stato == 'uno') {
        if ($(window).width() <= 992) {

            var btnEspandi = '<button class="blog-btn-espandi-mini1" type="button" id="blog-tasto-espandi-mini1" onclick="espandiBlog(uno)"> Read more</button>';
            $('.blog-btn-chiudi-mini1').before(btnEspandi);
            $('.blog-btn-chiudi-mini1').remove();
            $('#blog-btn-espandi-mini1').css('display', 'none');
            $('#change-blog1').removeClass('blog-mobile1');
            $('#blog-mini1').addClass('blog-second');
        } else {


            var btnEspandi1 = '<button class="blog-btn-espandi-mini1" type="button" id="blog-tasto-espandi-mini1" onclick="espandiBlog(uno)"> Read more</button>';
            $('.blog-btn-chiudi-mini1').before(btnEspandi1);
            $('.blog-btn-chiudi-mini1').remove();
            $('#blog-btn-espandi-mini1').css('display', 'none');
            $('#blog-second').removeClass('row blog-secondo').addClass('row blog-second');
            $('#box-blog1').removeClass('box-blog1');
            $('#blog-second').removeClass('row blog-mini11').addClass('row blog-second');
            $('#img2').removeClass('blog-img-max').addClass('blog-img-secondario');
            $('#change-blog1').removeClass('col l8').addClass('col l4');
            $('#blog-mini2').removeClass('row blog-mini222').addClass('row blog-second');
            $('#blog-mini1').removeClass('row blog-principal1').addClass('row blog-second');
            $('#space2').removeClass('row img-space-max').addClass('row img-space');

        }
    }

    if (stato == "due") {
        if ($(window).width() <= 992) {
            //make heaps of CSS changes
            var btnEspandi = '<button class="blog-btn-espandi-mini2" type="button" id="blog-tasto-espandi-mini2" onclick="espandiBlog(due)"> Read more</button>';
            $('.blog-btn-chiudi-mini2').before(btnEspandi);
            $('.blog-btn-chiudi-mini2').remove();
            $('#blog-btn-espandi-mini2').css('display', 'none');
            $('#change-blog2').removeClass('blog-mobile2');
            $('#blog-mini2').addClass('blog-second');
            $('.blog-second').css('height', '900px');
            $(window.location).attr('href', '#change-blog2');
        } else {


            var btnEspandi = '<button class="blog-btn-espandi-mini2" type="button" id="blog-tasto-espandi-mini2" onclick="espandiBlog(due)"> Read more</button>';
            $('.blog-btn-chiudi-mini2').before(btnEspandi);
            $('.blog-btn-chiudi-mini2').remove();
            $('#blog-btn-espandi-mini2').css('display', 'none');
            $('#space3').removeClass('row img-space-max').addClass('row img-space');
            $('#blog-second').removeClass('row blog-mini111').addClass('row blog-second');
            $('#blog-mini1').removeClass('row blog-mini22').addClass('row blog-second');
            $('#change-blog2').removeClass('col l8').addClass('col l4');
            $('#img3').removeClass('blog-img-max').addClass('blog-img-secondario');
            $('#blog-mini2').removeClass('row blog-principal2').addClass('row blog-second');
            $('#box-blog1').removeClass('box-blog1');


        }
    }
}




function espandiBlog1() {
    $('#vm-testa').removeClass('col l3').addClass('col l12');
    $('#vm-coda').removeClass('col l9').addClass('col l12');
    $('#vbox').attr('src', 'foto/virtualbox.png');
    $('#vbox').css('height', '150px');
    $('#vbox').css('width', '80%');

    $('.spazioimg').addClass('blog-titolo2');
    $('.blog-titolo2').removeClass('spazioimg');
    var btnChiudi = '<a href="#bloggo" class="blog-btn-chiudi1" id="blog-tasto-chiudi1" onclick="chiudiBlog1()">Close</a>';
    $('#blog-btn-espandi1').after(btnChiudi);
    $('#blog-btn-espandi1').css('display', 'block');
    $('#blog-tasto-espandi1').remove();
    $('p').css('margin-bottom', '0px');
    $('#vm-principale').removeClass('blog-principale').addClass('blog-principale1');
}

function chiudiBlog1() {
    $('#vm-testa').removeClass('col l12').addClass('col l3');
    $('#vm-coda').removeClass('col l12').addClass('col l9');
    $('.blog-titolo2').addClass('spazioimg');
    $('.spazioimg').removeClass('.blog-titolo2');
    $('#vbox').attr('src', 'foto/virtualbox.jpg');
    $('.spazioimg').css('height', '350px');
    $('.spazioimg').css('width', '100%');
    var btnEspandi = '<a href="#bloggo" class="blog-btn-espandi1" id="blog-tasto-espandi1" onclick="espandiBlog1()"> Read more</a>';
    $('#blog-tasto-chiudi1').before(btnEspandi);
    $('#blog-tasto-chiudi1').remove();
    $('#blog-btn-espandi1').css('display', 'none');
    $('#vm-principale').removeClass('blog-principale1').addClass('blog-principale');
}

function espandiBlog2() {
    $('#vr-testa').removeClass('col l3').addClass('col l12');
    $('#vr-coda').removeClass('col l9').addClass('col l12');
    $('#vr-spazio').attr('src', 'foto/vr-terra.png');
    $('#vr-spazio').css('height', '150px');
    $('#vr-spazio').css('width', '80%');
    $('#vr-spazio').addClass('blog-titolo2');
    $('.blog-titolo2').removeClass('spazioimg');
    var btnChiudi = '<a href="#frame-inizio" class="blog-btn-chiudi1" id="blog-tasto-chiudi2" onclick="chiudiBlog2()">Close</a>';
    $('#blog-btn-espandi2').after(btnChiudi);
    $('#blog-btn-espandi2').css('display', 'block');
    $('#blog-frame-espandi').remove();
    $('p').css('margin-bottom', '0px');
    $('#vr-frame1').removeClass('blog-principale').addClass('blog-principale2');
    // istanceofHTMLIFrameElement.reload(true);
    var myglobo = '<iframe id="globo1" src="three/myglobo.html" allowfullscreen="no" allowvr="yes" scrolling="no" width="100%" height="600px"></iframe>';
    $('#globo').after(myglobo);
    var mylinea = '<iframe id="linea" src="three/linea.html" allowfullscreen="no" allowvr="yes" scrolling="no" width="100%" height="400px"></iframe>';
    $('#terra1').after(mylinea);

}

function chiudiBlog2() {
    $('#vr-testa').removeClass('col l12').addClass('col l3');
    $('#vr-coda').removeClass('col l12').addClass('col l9');
    $('.blog-titolo2').addClass('spazioimg');
    $('#vr-spazio').removeClass('.blog-titolo2');
    $('#vr-spazio').attr('src', 'foto/vr-terra.png');
    $('#vr-spazio').css('height', '350px');
    $('#vr-spazio').css('width', '100%');
    var btnEspandi = '<a href="#frame-inizio" class="blog-btn-espandi1" id="blog-frame-espandi" onclick="espandiBlog2()"> Read more</a>';
    $('#blog-tasto-chiudi2').before(btnEspandi);
    $('#blog-tasto-chiudi2').remove();
    $('#blog-btn-espandi2').css('display', 'none');
    $('#vr-frame1').removeClass('blog-principale2').addClass('blog-principale');
    var myglobo = '';
    var mylinea = '';
    $('#linea').remove();
    $('#globo1').remove();

}

function savepdf() {
    browser.browserAction.onClicked.addListener(() => {
        browser.tabs.saveAsPDF({})
            .then((status) => {
                console.log(status);
            });
    });

}

function planet2() {
    var myglobo2 = '<iframe id="globo1" src="three/unico.html" allowfullscreen="no" allowvr="yes" scrolling="no" width="100%" height="600px"></iframe>';
    $('#globo1').after(myglobo2);
    $('#globo1').remove();

}

function planet3() {
    var myglobo3 = '<iframe id="globo1" src="three/pianeti.html" allowfullscreen="no" allowvr="yes" scrolling="no" width="100%" height="600px"></iframe>';
    $('#globo1').after(myglobo3);
    $('#globo1').remove();
}



// consenso esplicito Cookie



function creaDiv() {
    var testo = "Questo sito fa uso di cookie per migliorare l'esperienza di navigazione degli utenti e per raccogliere informazioni sull'utilizzo del sito stesso. <br> Utilizziamo sia cookie tecnici sia cookie di parti terze per inviare messaggi promozionali sulla base dei comportamenti degli utenti." +
        " Proseguendo nella navigazione si accetta l'uso dei cookie, in caso contrario è possibile abbandonare il sito." + '<a class="Close-cookie-banner"  href="javascript:void(0);" onclick="removeMe()"> <span>  OK  </span></a> </p>';
    const coo_eng = 'This site use cookies for the best experience of navigation of the users and for collect information use of site. We use technical cookies and third parts cookies for send promotional messagge.' + 'Carrying on the navigation you accept use of cookie.' +
        'In contrary case is possibile to leave the site.' + '<a class="Close-cookie-banner"  href="javascript:void(0);" onclick="removeMe()"> <span>  OK  </span></a> </p>';
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id', 'cookie-law');
    div.innerHTML = coo_eng;



    bodytag.insertBefore(div, bodytag.firstChild); // Adds the Cookie 

    //document.getElementsByTagName('body')[0].className += 'cookiebanner'; //Adds a class 

    creaCookie(window.cookieNome, window.cookieValue, window.cookieDurata); // crea the cookie
}


function creaCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
        // expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(0, 12);
        }
    }
    return "";
}




function removeMe() {
    var element = document.getElementById('cookie-law');
    element.parentNode.removeChild(element);
    // creaCookie(name, "", -1);
}



window.onload = function() {
    name = window.cookieNome + '=' + window.cookieValue;

    if (getCookie(window.cookieNome) !== name) {

        creaDiv();
    }
};



$(document).ready(function() {
    var bott;
    if (window.width <= '992px') {
        bott = document.getElementById('bot11').animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(0)' }
            ], {
                fill: 'forwards',
                easing: 'cubic-bezier(0.42, 0, 0.48, 2)',
                // easing: 'ease-in-out',
                // easing: 'steps(9, end)',
                direction: 'alternate',
                duration: 9000,
                iterations: Infinity
            });


    } else {
        bott = document.getElementById('bot11').animate(
            [
                { transform: 'translateX(0)' },
                { transform: 'translateX(+250%)' }
            ], {
                fill: 'forwards',
                easing: 'cubic-bezier(0.42, 0, 0.58, 8)',
                // easing: 'ease-in-out',
                // easing: 'steps(9, end)',
                direction: 'alternate',
                duration: 9000,
                iterations: Infinity
            });



    }
    bott.play();


    $('#chiudi_cnn1').hide();
    $('#cnn-eng').css('display', 'none');
    $('#cnn-ita').css('display', 'none');
    $('#vr-eng').show();
    $('#vr-ita').hide();
    $('#cnnsh').hide();
    $('#cnn1').hide();
    $('#tasto-ver').show();
    $('#botwin').hide();

    $('#close_button').hide();

    $('#testochate').show();
    $('#testochati').hide();

    $('#itachat').hover(function() {
        $('#testochati').show();
        $('#testochate').hide();
    });
    $('#ingchat').hover(function() {
        $('#testochate').show();
        $('#testochati').hide();
    });

    $('#bot11').hover(function() {
        callBot(bot);
    });
    $('#bot10').hover(function() {
        callBot(bot);
    });

    if ($(window).width() <= 992) {

        $("#tasto-ver")
            .animate({
                width: "75%"
            }, 1000)
            .animate({
                fontSize: "20px"
            }, 1000)
            .animate({
                borderLeftWidth: "15px"
            }, 1000)
            .animate({
                width: "20px"
            }, 1000)
            .animate({
                height: '80px'
            }, 1000)
            .animate({
                fontSize: "12px"
            }, 1000)
            .animate({
                borderWidth: "0px"

            }, 1000);
    } else {
        $("#tasto-ver")
            .animate({
                width: "25%"
            }, 1000)
            .animate({
                fontSize: "20px"
            }, 1000)
            .animate({
                borderLeftWidth: "15px"
            }, 1000)
            .animate({
                width: "3%"
            }, 1000)
            .animate({
                height: '20%'
            }, 1000)
            .animate({
                fontSize: "18px"
            }, 1000)
            .animate({

            }, 1000)
            .animate({
                borderWidth: "0px"

            }, 1000);

    }



    $.ajaxSetup({ cache: true });
    $('#stop').hide();
    $('#load').hide();
    $('#resu').hide();
    $('#testo2').hide();
    $('#ita').hover(function() {
        chiudiCnneng();
        $('#testo1').hide();
        $('#testo2').show();
    });
    $('#ing').hover(function() {
        chiudiCnnita();
        $('#testo2').hide();
        $('#testo1').show();
    });


    $('#img1').hover(function() {

        $(this).css('background-image', 'url(foto/PM2.png)');

    }, function() {
        $(this).css('background-image', 'url(foto/index.png)');
    });

    $('#wave').hover(function() {
        var styles = {
            height: '50px'
        };

        $(this).css(styles);
        $('#index-banner').css('opacity', '0.4');

    }, function() {
        var styles = {
            height: '30px'
        };
        $(this).css(styles);
        $('#index-banner').css('opacity', '1');
    });


    // se utente scorre la pagina web compare il tasto per tornare in alto
    function scrollFunction() {
        var $myDiv = null;
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById("tasto-su").style.display = "block";


        } else {
            document.getElementById("tasto-su").style.display = "none";
            if (getCookie(window.cookieNome) !== name) {
                var cook = document.getElementById("cookie-law")
                if (cook) {
                    $('#cookie-law').css('display', "none");
                }
            }
        }
    }
    // When the user clicks on the button, scroll to the top of the document


    window.onscroll = function() {
        scrollFunction();
    };

    // animazione per spostare video tra div

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            },
            500);

    });
});