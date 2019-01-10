let requestURL = './json/data.json'; //url vers le fichier JSON qui contient les données du site
let request = new XMLHttpRequest(); //on crée un objet qui va interagir avec le serveur
request.open('GET', requestURL); //initialise la requête vers l'url du fichier JSON
request.responseType = 'json'; //on précise que l'on veut un objet JSON
request.send(); //envoie la requête et attend une réponse