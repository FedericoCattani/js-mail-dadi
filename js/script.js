//Mail:
//DATA
let mailUser = prompt('Inserisci la tua mail');

const accessUser = [
  'ciccioPasticcio@gamil.com',
  'mi.prudeIlnaso@yahoo.com',
  'hoFuso.laMoto@icloud.com',
  'ilParacaduteNon@siapre.end',
]

const confirm = document.getElementById('accesso-confermato');
const denied = document.getElementById('accesso-negato');



//LOGIC
for (let i = 0; i < accessUser.length; i++){
  
  if (mailUser === accessUser[i]){
    
    confirm.innerHTML = 'Accesso consentito';
    

  }else{
    denied.innerHTML = 'Accesso negato';
  }
  console.log()
}



//RESULT







//Dadi Game:
//DATA





//LOGIC

//RESULT