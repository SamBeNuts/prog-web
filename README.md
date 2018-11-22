# Aides Javascript
### Utiliser les données du fichier `data.json`
Mettre le code suisant dans votre script :
```
request.onload = function () {
    let data = request.response;
};
```
> En faisant cela la variable data est un objet qui contient toutes les données du fichier data.json.

Un exemple pour stocker toutes les écoles et ensuite afficher le pays de l'une d'entre elle :
```
let schools;
request.onload = function () {
    let data = request.response;
    schools = data.schools;
    window.alert(schools["Universität Hamburg"].country);
};
```

### Créer une liste de toutes les écoles
> Utile pour la page `offre.html` et `offre_utah.html`

Extrait de la page HTML :
```
<ul class="list_schools">
    //On va insérer nos éléments ici
</ul>
```
Extrait du script Javascript :
```
let list_schools = document.querySelector('.list_schools'); //querySelector renvoie l'élément du DOM qui a la classe list_schools
for(let school in schools){ //schools est l'objet qui contient les données de data.schools
    list_schools.innerHTML += "<li>" + school + " (" + schools[school].country + ")" + "</li>";
    //innerHTML donne le contenu de l'élément, ici on lui rajoute un li avec comme texte le nom de l'école et le pays entre parenthèses
}
```
> Liens utiles :
<br>[La fonction querySelector](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
<br>[Utilisation des objets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets)

### Obtenir une donnée qui se trouve dans l'url
> Utile pour la page `offre_utah.html`
* window.location.href = "https://<span></span>etud.insa-toulouse.fr/offre/Universty%20of%20Utah"
* window.location.protocol = "https:"
* window.location.host = "etud.insa-toulouse.fr"
* window.location.pathname = "/offre/University%20of%20Utah"

Par exemple si on veut récupérer le nom de l'école :
```
url = window.location.href; //ou url = window.location.pathname
school = url.substring(url.lastIndexOf("/")+1);
//lastIndexOf renvoie l'index du dernier "/" trouvé dans l'url
//subString crée une sous-chaîne à partir de l'index donné en paramètre
```