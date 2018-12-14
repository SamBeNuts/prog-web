function getCookie(cookie_name) {
    let decodedCookie = decodeURIComponent(document.cookie).split(';');
    for(let i = 0; i <decodedCookie.length; i++) {
        if (decodedCookie[i].indexOf(cookie_name) !== -1) {
            if (decodedCookie[i].indexOf('[') !== -1)
                return decodedCookie[i].substring(cookie_name.length + 2,decodedCookie[i].length - 1).split(',');
            else
                return decodedCookie[i].substring(cookie_name.length + 1);
        }
    }
    return "";
}

function setCookie(cookie_name, cookie_value, cookie_expdays) {
    let d = new Date();
    d.setTime(d.getTime() + (cookie_expdays*24*60*60*1000));
    document.cookie = cookie_name + "=" + cookie_value + "; expires=" + d.toUTCString() + ";path=/";
}