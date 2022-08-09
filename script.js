const html = document.getElementById("html");
const css = document.getElementById("css");
const javascript = document.getElementById("javascript");

const divs = [html, css, javascript];

for (i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", function(){
        this.style = "box-shadow: 2px 2px 2px 2px grey";
    });
}

for (i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseout", function(){
        this.style = "";
    });
}
