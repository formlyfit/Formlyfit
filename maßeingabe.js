function updateAvatar() {
  const brust = document.getElementById("brust").value;
  const taille = document.getElementById("taille").value;
  const huefte = document.getElementById("huefte").value;

  console.log("Maße:", brust, taille, huefte);

  // Beispielhafte Reaktion – später ersetzen durch echte Avatar-Anpassung
  const avatar = document.getElementById("avatarImage");
  if (brust < 90 && taille < 75) {
    avatar.src = "avatar-female.png";
  } else {
    avatar.src = "avatar-male.png";
  }

  // Du kannst später richtige 3D-Anpassung reinbauen
}
