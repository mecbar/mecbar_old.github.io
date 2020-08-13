function download(nomefile, testo) {
   var element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,'+ encodeURIComponent(testo));
   element.setAttribute('download', nomefile);
   element.style.display = 'none';
   document.body.appendChild(element);
   element.click();
   document.body.removeChild(element);
}


function salvaAppunti() {
    var newdata = document.getElementById('insA').value;
    var nomefile = document.getElementById('nomefile').value;
    document.getElementById('insA').value = '';
    document.getElementById('nomefile').value = '';
    if (nomefile != '') {
        download(nomefile, newdata);
    } else {
        download("AppuntidaMecbar", newdata);
    }
    
}


