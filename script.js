// Codes autorisés
const validCodes = {
  "marcia101": "Mme Marcia - Appt 101",
  "fabienne203": "Mme Fabienne - Appt 203",
  "marine304": "Mme Marine - Appt 304"
};

// Vérifier le code
function checkCode() {
  const code = document.getElementById("code").value;
  if (validCodes[code]) {
    document.getElementById("private").style.display = "block";
    alert("Bienvenue " + validCodes[code]);
  } else {
    alert("Code invalide ❌");
  }
}
