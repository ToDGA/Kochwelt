

function getAmount() {
    let result = document.getElementById('inputfield').value;
    if (result < 1)
        alert('Bitte mindestens 1 Portion angeben!');
    else {
        if (result > 50)
            alert('Bitte weniger als 50 angeben!');
        else {

            let tortellini = 125;
            let salz = 1;
            let butter = 10;
            let olivenöl = 1;
            let kochschinken = 50;
            let sahne = 125;
            let eigelb = 1;
            let muskatnuss = 0.5;
            let hartkäse = 30;

            document.getElementById('ingredient1').innerHTML = `${result * tortellini}`;
            document.getElementById('ingredient2').innerHTML = `${result * salz}`;
            document.getElementById('ingredient3').innerHTML = `${result * butter}`;
            document.getElementById('ingredient4').innerHTML = `${result * olivenöl}`;
            document.getElementById('ingredient5').innerHTML = `${result * kochschinken}`;
            document.getElementById('ingredient6').innerHTML = `${result * sahne}`;
            document.getElementById('ingredient7').innerHTML = `${result * eigelb}`;
            document.getElementById('ingredient8').innerHTML = `${result * hartkäse}`;
        }
    }
}

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