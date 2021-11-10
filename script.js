var images = ["WhatsApp Image 2021-11-08 at 9.57.44 PM", "WhatsApp Image 2021-11-08 at 10.06.07 PM", "WhatsApp Image 2021-11-08 at 10.06.51 PM"];
var names = ["Mom", "Dad", "Me"];
var i = 0;

function update() {

    var array_length = images.length - 1;
    var updated_image = images[i];
    var updated_text = names[i];

    document.getElementById("family_book_image").src = updated_image;
    document.getElementById("name").innerHTML = updated_text;

    i++;


    if (i > array_length) {
        i = 0;

    }
}
