function copy() {
    navigator.clipboard.writeText("shirley.yua@gmail.com").then(function () {
        /* clipboard successfully set */
        showSnackBar()
    }, function () { });
}

function showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 2000);
}
