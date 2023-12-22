function obliczCzasOdDaty(data) {
    const teraz = new Date();
    const podanaData = new Date(data);

    const roznicaCzasu = teraz - podanaData;

    let pYears = document.querySelector('.year');
    let pMonth = document.querySelector('.month');
    let pDay = document.querySelector('.day');
    let pHours = document.querySelector('.hours');
    let pMinutes = document.querySelector('.minutes');

    const lata = roznicaCzasu / (1000 * 60 * 60 * 24 * 365);
    const miesiace = roznicaCzasu / (1000 * 60 * 60 * 24 * 30.44);
    const dni = roznicaCzasu / (1000 * 60 * 60 * 24);
    const godziny = roznicaCzasu / (1000 * 60 * 60);
    const minuty = roznicaCzasu / (1000 * 60);

    pYears.innerHTML = lata.toFixed(4);
    pMonth.innerHTML = miesiace.toFixed(4);
    pDay.innerHTML = dni.toFixed(4);
    pHours.innerHTML = godziny.toFixed(4);
    pMinutes.innerHTML = minuty.toFixed(4);
}

function aktualizujCzas() {
    const dataDoLiczenia = '2023-02-25';
    obliczCzasOdDaty(dataDoLiczenia);
}

setInterval(aktualizujCzas, 1000);
aktualizujCzas(); 