< !DOCTYPE html >
    <
    html >

    <
    head >
    <
    meta charset = utf - 8 >
    <
    title > My first three.js app < /title> <
    style >
    body {
        margin: 0;
    }

canvas {
    width: 100 % ;
    height: 100 %
} <
/style> <
/head>

<
body >


    <
    script src = "js/myThree.js" > < /script>



<
script >



    var geometry = new THREE.SphereGeometry(0.5, 32, 32)
var material = new THREE.MeshPhongMaterial()
var earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)