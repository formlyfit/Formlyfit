function initGPS() {
  if (!navigator.geolocation) {
    alert("GPS nicht verfügbar");
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Standort:", position.coords.latitude, position.coords.longitude);
    // Routenberechnung hier einfügen
  });
}
