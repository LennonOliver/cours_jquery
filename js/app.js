// // Javascript natif
// const elements = document.querySelectorAll("#javascript-list li")

// elements.forEach(element => {
//     element.textContent = "Javascript";
// });

// //JQUERY
// $("#jquery-list li")
// .text("Jquery");

// //Javascript natif
// const test2 = document.querySelector("#javascript-list li:nth-child(2)");
// test2.style.cursor = "pointer";
// test2.addEventListener('click', () => {
//     alert('JAVASCRIPT');
// });

// //jquery
// $("#jquery-list li:nth-child(2)")
//     .css("cursor", "pointer")
//     .on('click', () => {
//         alert('JQUERY');
//     })

//Javascript natif
let display = true;
const btnJs = document.querySelector("#btnJs");
const carre = document.querySelector("#carre");
btnJs.addEventListener('click', () => {
    if (display) {
        carre.style.opacity = 0;
    } else {
        carre.style.opacity = 1;
    }
    display = !display;
})

//Jquery
$("#btnJquery")
    .on('click', () => {
        if (display) {
            $("#carre")
                .animate({ opacity: '0' }, "slow")
        }
        else {
            $("#carre")
                .animate({ opacity: '1' }, "slow")
        }
        display = !display;
    })

$(function () {
    const availableTags = [
        "Bob",
        "Roger",
        "Samuel"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});

$(function () {
    function hexFromRGB(r, g, b) {
        var hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }
    function refreshSwatch() {
        var red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue);
        $("#swatch").css("background-color", "#" + hex);
    }

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 255);
    $("#green").slider("value", 140);
    $("#blue").slider("value", 60);
});


$(function () {
    $("#progressbar").progressbar({
        value: 50
    });
});