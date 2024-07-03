// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?

// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 6

//Onderstaande array genaamd 'grades' bevat de cijfers:
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

//Onderstaande functie 'countCumLaudeStudents' neemt de array van cijfers als parameters
function countCumLaudeStudents(grades) {
    // Variabele om het aantal cum laude studenten bij te houden, waarbij waarde 0 wordt geinitialiseerd om het aantal cum laude studenten bij te houden:
    let cumLaudeCount = 0;

    // Itereren door de array van cijfers dmv for-loop. De lus loopt van 0 tot grades.length -1
    for (let i = 0; i < grades.length; i++) {
        // Checken of het cijfer 8 of hoger is dmv if-statement:
        if (grades[i] >= 8) {
            // Verhoog de teller als het cijfer 8 of hoger is
            cumLaudeCount++;
        }
    }

    // Retourneer het totaal aantal cum laude studenten
    return cumLaudeCount;
}

// Verwachte uitkomst: 6
console.log(countCumLaudeStudents(grades));



/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(grades) { //Deze functie accepteer 1 parameter 'grades', wat een array van cijfers is
    //Variabele om het aantal cum laude studenten bij te houden:
    let cumLaudeCount = 0; // Deze variabele wordt geinitialiseerd op 0 om het aantal cum laude studenten bij te houden

    //Itereren door array van cijfers: een for-loop wordt gebruikt om door elke waarde van 'grades' te lopen.
    for (let i = 0; i < grades.length; i++) {
        //Checken of het cijfer 8 of hoger is
        if (grades[i] >= 8) {
            //Verhoog de teller als het cijfer 8 of hoger is:
            cumLaudeCount++;
        }
    }
    // Retourneer het totaal aantal cum laude studenten
    return cumLaudeCount++;
}
//Verwachte uitkomsten
console.log(cumLaude([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6])); //geeft 6
console.log(cumLaude([6, 4, 5])); //geeft 0
console.log(cumLaude([8, 9, 4, 6, 10])); //geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

function calculateAverage(grades) {
    //Variabele om de som van alle cijfers bij te houden ("Hoe wordt een gemiddelde berekend?")
    let sum = 0;

    //Itereren door de array van cijfers
    for (let i = 0; i < grades.length; i++) {
        // Tel het huidige cijfer op bij de som
        sum += grades[i];
    }
    //Bereken en retourneer het gemiddelde door de som te delen door het aantal cijfers:
    return sum / grades.length;
}
//Verwachte uitkomst:
console.log(calculateAverage(grades));


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

function averageGrade(grades) { //Accepteert 1 parameter 'grades' wat een array van cijfers is
    //Variabele om de som van alle cijfers bij te houden
    let sum = 0; //'Sum' wordt ginitialiseerd op 0 om de som van alle cijfers bij te houden.

    //Itereren door de array van cijfers dmv for-loop:
    for (let i = 0; i < grades.length; i++) {
        //Tel het huidige cijfer op bij de som
        sum += grades[i];
    }
    //Bereken en retourneer het gemiddelde door de som te delen door het aantal cijfers:
    return sum / grades.length;

    //Uitwerking 2b:
    // Bereken het gemiddelde door de som te delen door het aantal cijfers
    // const average = sum / grades.length;
    // Rond het gemiddelde af op 2 decimalen
    // return Math.round(average * 100) / 100; - 'Math.round' wordt hier gebruikt om het gemiddelde af te ronden op 2 decimalen.

}
//Verwachte uitkomsten
console.log(averageGrade([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6])); //geeft 6.642857142857143
console.log(averageGrade([6, 4, 5])); //geeft 5
console.log(averageGrade([8, 9, 4, 6, 10])); //geeft 7.4

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//Zie hierboven uitwerking in regels 124-128.


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
