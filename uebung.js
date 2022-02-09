let wochentage = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Sammstag','Sonntag']



function ausgabe() {
    for (let i = 0; i < wochentage.length; i++) {
        console.log(wochentage[i]);
    }
}

function renameFriday() {
    wochentage[4] = "Nochnichtfreitag"
    console.log("Aufgabe 4:");
    ausgabe();
}

function renameFridaySmart() {
    for (let i = 0; i < wochentage.length; i++) {
        if(wochentage[i] === "Freitag")
        {
            wochentage[i] = "Nochnichtfreitag"
        }
    }
    ausgabe();
}



