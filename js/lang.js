window.lang=function(lang){
    document.getElementsByTagName('html')[0].setAttribute('lang',lang);
    document.cookie = "lang="+lang;
    document.getElementById("chk-"+lang).checked=true;
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
if(getCookie("lang")){
    lang(getCookie("lang"))
}
