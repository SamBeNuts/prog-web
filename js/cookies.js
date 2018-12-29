function getCookie(cookie_name) { //on passe en paramètre le nom du cookie qu'on veut récupérer
    let decodedCookie = decodeURIComponent(document.cookie).split(';'); //on récupère les cookies (une string) et on la transforme en tableau en séparant les différents éléments via le caractère ';'
    for(let i = 0; i <decodedCookie.length; i++) { //pour chaque cookie
        if (decodedCookie[i].indexOf(cookie_name) !== -1) { //si le cookie recherhé est trouvé
            if (decodedCookie[i].indexOf('[') !== -1) //si le cookie est un tableau
                return decodedCookie[i].substring(cookie_name.length + 2,decodedCookie[i].length - 1).split(','); //on renvoie les différentess valeurs (un tableau de string)
            else //si le cookie est une simple variable
                return decodedCookie[i].substring(cookie_name.length + 1); //on renvoie seulement sa valeur (une string)
        }
    }
    return ""; //si le cookie n'est pas trouvé
}

function setCookie(cookie_name, cookie_value, cookie_expdays) { //le nom du cookie à rajouter, la valeur du cookie et sa durée d'existance en jour
    let d = new Date(); //on crée une date
    d.setTime(d.getTime() + (cookie_expdays*24*60*60*1000)); //on ajoute à la date d'aujourd'hui la durée d'existance du cookie
    document.cookie = cookie_name + "=" + cookie_value + "; expires=" + d.toUTCString() + ";path=/"; //on crée le cookie
}