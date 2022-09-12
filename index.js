let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
"5", "6", "7", "8", "9",];
let specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];
let choosedCharacters ;
let pass1p = document.getElementById('password1');
let pass2p = document.getElementById('password2');
let lengthOfPass = null;
let specialsValue = document.getElementById('special-characters');
let labelPassLength = document.getElementById('labelSpanForPassLength');

function checkPassLength (){
  lengthOfPass = document.getElementById("length-of-password").value;
  labelPassLength.textContent = ' : ' + lengthOfPass;
}
function checkCharacters(){
  if (specialsValue.checked){
    choosedCharacters = characters.concat(specials);

  }else{
    choosedCharacters = characters;

  }
}


function randomPass(){
  checkPassLength ();
  checkCharacters();
  let password1= "";
  let password2= "";
    for (let i = 0; i < lengthOfPass; i++){
      password1 += choosedCharacters[Math.floor(Math.random()*choosedCharacters.length)];
      password2 += choosedCharacters[Math.floor(Math.random()*choosedCharacters.length)];
    }
    pass1p.textContent = password1;
    pass2p.textContent = password2;
}
