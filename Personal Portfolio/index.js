window.onscroll = function () {
    var header = document.getElementById("myHeader");
    if (window.pageYOffset > 0) {
        header.classList.add("bg-red-500");
    } else {
        header.classList.remove("bg-red-500");
    }
}