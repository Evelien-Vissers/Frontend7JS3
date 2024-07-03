// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
function getEmailDomain(email) {
    //Splits het emailadres obv '@' en retourneert het tweede deel van string dat na de @ komt.
    const parts = email.split('@');
    return parts[1];
}
//Verwachte uitkomsten
    console.log(getEmailDomain("n.eeken@novi-education.nl")); //geeft novi-education.nl
    console.log(getEmailDomain("t.mellink@novi.nl")); //geeft novi.nl
    console.log(getEmailDomain("a.wiersma@outlook.com")); //geeft outlook.com

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


//Onderstaande functie gebruikt de 'indexOf' en 'substring' methoden om de domeinnaam te extraheren
function typeOfEmail(email) {
    //Zoek positie van de '@' in het emailadres
    const atIndex = email.indexOf("@");
    //Gebruik de substring methode om het deel na de '@' op te halen
    const domain = email.substring(atIndex + 1);

    //Controleer het domein en retourneer het juiste type
    if (domain === "novi.nl") {
        return "Medewerker";
    } else if (domain === "novi-education.nl") {
        return "Student";
    } else {
        return "Extern";
    }
}
//Verwachte uitkomsten
console.log(typeOfEmail("n.eeken@novi-education.nl")); //geeft "Student"
console.log(typeOfEmail("t.mellink@novi.nl")); //geeft "Medewerker"
console.log(typeOfEmail("novi.nlaapjesk@outlook.com")); //geeft "Exter"
console.log(typeOfEmail("a.wiersma@outlook.com")); //geeft "Extern"


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    //Controleer of er een '@' in voorkomt. Wanneer waarde -1 is, betekent dit dat er geen '@' in het emailadres staat
    if (email.indexOf('@') === -1) {
        return false;
    }
    //Controleer of er een ',' in voorkomt. Wanneer de waarde NIET -1 is, betekent dit dat er een ',' in het emailadres staat.
    if (email.indexOf(',') !== -1) {
        return false;
    }
    //Controleer of het laatste karakter een '.' is. Wanneer de waarde gelijk is aan 'email.length -1', betekent dit dat het laatste teken een '.' is - wat het emailadres ongeldig maakt.
    if (email.lastIndexOf('.') === email.length - 1) {
        return false;
    }
    return true;
}
//Verwachte uitkomsten
console.log(checkEmailValidity("n.eeken@novi.nl")); //geeft true
console.log(checkEmailValidity("tessmellink@novi.nl")); //geeft true
console.log(checkEmailValidity("n.eekenanovi.nl")); //geeft false
console.log(checkEmailValidity("n.eeken@novinl.")); //geeft false
console.log(checkEmailValidity("tessmellink@novi,nl")); //geeft false