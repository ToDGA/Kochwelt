async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function calculate() {
    let number = +document.getElementById('amount').value;
    if (number < 1)
        alert('Bitte mindestens 1 Portion angeben!');
    else {
        if (number > 50)
            alert('Bitte weniger als 50 angeben!');
        else {
            // Zutaten für 1 Portion:
            let zwiebel = 75;
            let paprika = 100;
            let tomaten = 200;
            let schafskäse = 100;
            let eier = 1;
            let koriander = 25;
            let kreuzkümmel = 1 / 4;
            let paprikapulver = 1 / 4;
            let cayennepfeffer = 1 / 8;
            let chilipulver = 1 / 8;

            // Wert aus dem Input Feld wird mit Zutatenmenge für 1 Portion multipliziert und in Tabelle wiedergegeben 
            document.getElementById('1st').innerHTML = `${number * zwiebel}`;
            document.getElementById('3rd').innerHTML = `${number * paprika}`;
            document.getElementById('4th').innerHTML = `${number * tomaten}`;
            document.getElementById('5th').innerHTML = `${number * schafskäse}`;
            document.getElementById('6th').innerHTML = `${number * eier}`;
            document.getElementById('7th').innerHTML = `${number * koriander}`;
            document.getElementById('9th').innerHTML = `${number * kreuzkümmel}`;
            document.getElementById('10th').innerHTML = `${number * paprikapulver}`;
            document.getElementById('11th').innerHTML = `${number * cayennepfeffer}`;
            document.getElementById('12th').innerHTML = `${number * chilipulver}`;
        }
    }
}
