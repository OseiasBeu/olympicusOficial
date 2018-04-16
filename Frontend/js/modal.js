// let modal = document.getElementById('myModal');
// let btn = document.getElementById("myBtn");
// let btn1 = document.getElementById("myBtn1");
// let span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//     modal.style.display = "block";
// }


// span.onclick = function() {
//     modal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function clique(img) {
    let modal = document.getElementById('janelaModal');
    let modalImg = document.getElementById("imgModal");
    let captionTexto = document.getElementById("txtImg");
    let btFechar = document.getElementsByClassName("fechar")[0];

    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    captionTexto.innerHTML = img.alt;

    btFechar.onclick = function() {
        modal.style.display = "none";
    }
}