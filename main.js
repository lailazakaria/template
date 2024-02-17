var dropdown = document.getElementsByClassName("app-icon");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {

        var dropdowncontent = this.nextElementSibling;
        if (dropdowncontent.style.display === "flex") {
            dropdowncontent.style.display = "none";
        } else {
            dropdowncontent.style.display = "flex";
        }
    });
}