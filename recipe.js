
function addjustIngredients() {
    let portions = +document.getElementById('portions-ingredients').value;
    if (portions < 1)
        alert('Bitte mindestens 1 Portion angeben!');
    else {
        if (portions > 10)
            alert('Bitte weniger als 50 angeben!');
        else {
            let apfelmus = 200;
            let rindfleisch = 150;
            let zwiebel = 0.5;
            let knoblauch = 1;
            let hörnli = 100;
            let gruyer = 25;
            let tomatenPure = 1;

            document.getElementById('portions1').innerHTML = `${portions * apfelmus}`;
            document.getElementById('portions2').innerHTML = `${portions * rindfleisch}`;
            document.getElementById('portions3').innerHTML = `${portions * zwiebel}`;
            document.getElementById('portions4').innerHTML = `${portions * knoblauch}`;
            document.getElementById('portions5').innerHTML = `${portions * hörnli}`;
            document.getElementById('portions6').innerHTML = `${portions * gruyer}`;
            document.getElementById('portions7').innerHTML = `${portions * tomatenPure}`;
        }
    }
    
}



