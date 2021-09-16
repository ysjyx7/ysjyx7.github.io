function musicChange() {
    // let element = document.querySelector(".jtZj");
    // let rotate = document.querySelector(".jtZj-rotate");

    // if(rotate == null) {
    //     element.classList.add("jtZj-rotate");
    // }else {
    //     element.classList.remove("jtZj-rotate");
    // }

    var box = document.getElementById("musicZJ");
    var element = document.querySelector(".musicwyy1");
    
    if(box.style.display == "none") {
        box.style.display = "inline-block";
        element.style.zIndex = 100;
    }else {
        box.style.display = "none";
        element.style.zIndex = -100;
    }
}
