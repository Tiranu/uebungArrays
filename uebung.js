let wochentage = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Sammstag','Sonntag']
let monate = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
let tage = [31,28,31,30,31,30,31,31,30,31,30,31]


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

function monateUndTage() {
    for (let i = 0; i < monate.length; i++) {
        console.log("Der Monat " + monate[i] + " hat genau " + tage[i] + " Tage!")
    }
}


