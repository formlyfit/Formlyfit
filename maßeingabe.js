function updateAvatarLive() {
  const brust = parseInt(document.getElementById("brust").value) || 0;
  const taille = parseInt(document.getElementById("taille").value) || 0;
  const huefte = parseInt(document.getElementById("huefte").value) || 0;

  // Maße speichern (optional, kann bei jedem Input gemacht werden)
  localStorage.setItem("formlyfit_maße", JSON.stringify({
    brust,
    taille,
    huefte
  }));

  const avatar = document.getElementById("avatarImage");
  if (!avatar) return;

  // Beispielhafte Umrechnung (du kannst später mehr Logik reinbauen)
  if (brust < 90 && taille < 75) {
    avatar.src = "avatar-female.png";
  } else {
    avatar.src = "avatar-male.png";
  }
}
