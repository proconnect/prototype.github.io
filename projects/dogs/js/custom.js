

function bodyParts(evt, body) {
    // Declare all variables
var tablinks = document.getElementsByClassName("tablinks");
var tabcontent = document.getElementsByClassName("tabcontent");

    // Hide tabcontent 
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // click "tablinks" and remove the class "active"   
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(body).style.display = "block";
    evt.currentTarget.className += "active";
}





