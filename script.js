function myFunction() {
    let x = document.getElementById("navigation");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}