function copy() {
    navigator.clipboard.writeText("s.annayu@utexas.edu").then(function () {
        /* clipboard successfully set */
        showSnackBar()
    }, function () { });
}

function showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}


// Get the image and insert it inside the modal - use its "alt" text as a caption


function explode(imageClass) {
    console.log(imageClass)
    var modal = document.getElementById("myModal");
    var img = document.getElementsByClassName(imageClass)[0];
    var modalImg = document.getElementById("exploded-image");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeExplode() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
