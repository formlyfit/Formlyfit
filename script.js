function switchScreen() {
  document.getElementById('homeScreen').classList.remove('active');
  document.getElementById('bmiScreen').classList.add('active');
}

function berechneBMI() {
  const groesse = parseFloat(document.getElementById("groesse").value) / 100;
  const gewicht = parseFloat(document.getElementById("gewicht").value);
  const bmi = gewicht / (groesse * groesse);
  let tipp = "";

  if (bmi < 18.5) {
    tipp = "Du bist untergewichtig – achte auf gesunde Zunahme 🍌";
  } else if (bmi < 25) {
    tipp = "Normalgewicht – super gemacht 👏";
  } else if (bmi < 30) {
    tipp = "Leichtes Übergewicht – du bist auf dem richtigen Weg 💪";
  } else {
    tipp = "Starkes Übergewicht – starte mit kleinen Schritten 🚀";
  }

  const ausgabe = document.getElementById("bmiAusgabe");
  ausgabe.style.display = "block";
  ausgabe.innerHTML = `Dein BMI: ${bmi.toFixed(1)}<br>${tipp}`;
}
