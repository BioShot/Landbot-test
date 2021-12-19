function setCookie(name, value) {
    document.cookie = name + "=" + value + "" + ";path=/";
}
function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length)
        }
    }
    return "";
}
new URLSearchParams(window.location.search).forEach((username, email) => {
    var verifybutton = document.getElementById("verify");
    verifybutton.onclick = function() {
        setCookie("name", username);
        setCookie("email", email);
    }
    
})