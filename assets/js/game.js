/*************************************************************************************************/
/****************************************JavaScript page Game*************************************/
/***********************************************§§************************************************/

window.onload= () =>{
    //scrool onclick
    let arrow1=document.querySelector('.up');
    let arrow2=document.querySelector('.down');
    arrow1.addEventListener('click',() =>{
        window.scrollTo(top, 'smooth')
    });
    arrow2.addEventListener('click',() =>{
        window.scrollBy(0,1050);
    });
}
const gameData = [
  {
    "question": "Quel est l’autre nom de l’Homme-Mystère ?",
    "response": [
      {
        "text": "Le Saphinx",
        "isGood": true
      },
      {
        "text": "Le Saphir",
        "isGood": true
      },
      {
        "text": "Le Joker",
        "isGood": true
      }
    ]
  },
  {
    "question": "Quelle est l’ancienne profession de Harley Quinn ?",
    "response": [
      {
        "text": "Infimière",
        "isGood": false
      },
      {
        "text": "Psychiatre",
        "isGood": true
      },
      {
        "text": "Dentiste",
        "isGood": false
      }
    ]
  },
  {
    "question": "Quel est l’objet fétiche de Double Face ?",
    "response": [
      {
        "text": "Une pièce",
        "isGood": true
      },
      {
        "text": "Un livre",
        "isGood": false
      },
      {
        "text": "Un couteau",
        "isGood": false
      }
    ]
  },
  {
    "question": "Quelle ville Batman défend-il ?",
    "response": [
      {
        "text": "Gotham City",
        "isGood": true
      },
      {
        "text": "Starling City",
        "isGood": false
      },
      {
        "text": "Tananarive",
        "isGood": false
      }
    ]
  },
  {
    "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
    "response": [
      {
        "text": "Georges Clooney",
        "isGood": false
      },
      {
        "text": "Val Kilmer",
        "isGood": false
      },
      {
        "text": "Mickael Keaton",
        "isGood": false
      }
    ]
  },
  {
    "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
    "response": [
      {
        "text": "Matina et Adam",
        "isGood": false
      },
      {
        "text": "Elaine et Georges",
        "isGood": true
      },
      {
        "text": "Martha et James",
        "isGood": false
      }
    ]
  },
  {
    "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
    "response": [
      {
        "text": "Le Pingouin",
        "isGood": false
      },
      {
        "text": "L'Homme mystère",
        "isGood": true
      },
      {
        "text": "Le Geek",
        "isGood": false
      }
    ]
  },
  {
    "question": " Qui interprète le Joker en 2008 ?",
    "response": [
      {
        "text": "Heath Legder",
        "isGood": false
      },
      {
        "text": "Haeth Ledger",
        "isGood": false
      },
      {
        "text": "Heath Ledger",
        "isGood": true
      }
    ]
  },
  {
    "question": "En quelle année Robin fait il sa première apparition ?",
    "response": [
      {
        "text": "1940",
        "isGood": true
      },
      {
        "text": "1936",
        "isGood": false
      },
      {
        "text": "1941",
        "isGood": false
      }
    ]
  },
  {
    "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    "response": [
      {
        "text": "Oracle Huntress",
        "isGood": true
      },
      {
        "text": "Black Canary",
        "isGood": false
      },
      {
        "text": "L'Epouvantail",
        "isGood": false
      }
    ]
  },
  {
    "question": "Batman c’est aussi le nom d’une ville en...",
    "response": [
      {
        "text": "Islande",
        "isGood": false
      },
      {
        "text": "Turquie",
        "isGood": true
      },
      {
        "text": "Allemagne",
        "isGood": false
      }
    ]
  },
  {
    "question": "Qui a realisé Batman en 1966 ?",
    "response": [
      {
        "text": "Stanley Kubrick",
        "isGood": false
      },
      {
        "text": "Andy Warhol",
        "isGood": false
      },
      {
        "text": "Leslie Martinson",
        "isGood": true
      }
    ]
  }
];
const images = [
  {
    "id": 1,
    "image": "Batgame_3.png",
    "illustrations": [],
    "question": "Quel est l’autre nom de l’Homme-Mystère ?"
  },
  {
    "id": 2,
    "image": "Batgame_4.png",
    "illustrations": [],
    "question": "Quelle est l’ancienne profession de Harley Quinn ?"
  },
  {
    "id": 3,
    "image": "Batgame_5.png",
    "illustrations": [],
    "question": "Quel est l’objet fétiche de Double Face ?"
  },
  {
    "id": 4,
    "image": "Batgame_6.png",
    "illustrations": [],
    "question": "Qui a realisé Batman en 1966 ?"
  },
  {
    "id": 5,
    "image": "Batgame_7.png",
    "illustrations": [],
    "question": "Batman c’est aussi le nom d’une ville en..."
  },
  {
    "id": 6,
    "image": "Batgame_8.png",
    "illustrations": [{"img": "Batgame_9.png", "left": "4em", "top": "75%", "width": "20%"}, {"img": "Batgame_9-1.png", "left": "80%", "top": "70%", "width": "15%"}],
    "question": "Quel vilain apparaît pour la première fois dans le Batman 232 ?"
  },
  {
    "id": 7,
    "image": "Batgame_10.png",
    "illustrations": [],
    "question": "Quelle ville Batman défend-il ?"
  },
  {
    "id": 8,
    "image": "Batgame_11.png",
    "illustrations": [],
    "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?"
  },
  {
    "id": 9,
    "image": "Batgame_12.png",
    "illustrations": [{"img": "Batgame_13-1.png", "left": "10%", "top": "67%", "width": "17%"}, {"img": "Batgame_13.png", "left": "70%", "top": "65%", "width": "17%"}],
    "question": "Dans son premier Batman (1989) Jack Nicholson jouait :"
  },
  {
    "id": 10,
    "image": "Batgame_14.png",
    "illustrations": [{"img": "Batgame_15.png", "left": "60%", "top": 0, "width": "20%"}, {"img": "Batgame_16.png", "left": "67%", "top": "73%", "width": "15%"}],
    "question": "Qui est Jonathan Crane ? "
  },
  {
    "id": 11,
    "image": "Batgame_17.png",
    "illustrations": [],
    "question": "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?"
  },
  {
    "id": 12,
    "image": "Batgame_18.png",
    "illustrations": [],
    "question": "Quel est le prénom des parents du jeune Bruce Wayne ?"
  },
  {
    "id": 13,
    "image": "Batgame_19.png",
    "illustrations": [],
    "question": " Qui interprète le Joker en 2008 ?"
  },
  {
    "id": 14,
    "image": "Batgame_20.png",
    "illustrations": [],
    "question": "En quelle année Robin fait il sa première apparition ?"
  },
  {
    "id": 15,
    "image": "Batgame_21.png",
    "illustrations": [],
    "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?"
  }
  ];

/**
 * || CREATE UTILS VARIABLES
 */
let progress = 0;
let start = document.getElementById('start');
let game = document.getElementById('game');
let progression = document.getElementById('progression');
progression.textContent=1;
let totalProgression=document.getElementById('total-progression');
let question = document.getElementById('question');
let imageContent = document.getElementById('image');
let choices = document.getElementById('choices');
let illustrations = document.getElementById('illustrations');
let formRes = document.getElementById('form-res');
let popupE = document.querySelector(".popup-error");
let currentResponse = null;
// POP UP
let popupTitle = document.getElementById('popup-title');
let popupMessage = document.getElementById('popup-message');
let restartQuiz = document.getElementById('restart-quiz');
// BTN
let btnStart = document.getElementById('btn-start');
let btnNext = document.getElementById('btn-next');


/*start game*/
btnStart.addEventListener('click', ()=> {
  //section start disabled
		start.style.display = 'none';
  //section game enabled
		game.style.display = 'block';
    changeContent(gameData);
});

/*Function change content*/
function changeContent(gameData){
  //response
  currentResponse=gameData.response;
  //progression .../...
  totalProgression.textContent=gameData.length;

  //question
  question.textContent=gameData[progress].question;
  
  //initialization for the image and choice
  imageContent.innerHTML="";
  choices.innerHTML="";

  //correct living image 
  image=document.createElement('img');
  imageContent.appendChild(image);
  for(let k=0;k<images.length;k++){
    if(question.textContent===images[k].question){
      image.setAttribute('src','./assets/Illustrations/'+images[k].image);
    }
  }
  
  //choice list
  for(let i=0;i<gameData[progress].response.length;i++){
    let li=document.createElement('li');
    li.setAttribute('class', 'fade-in-right cursor-pointer')
    choices.appendChild(li);
    let input=document.createElement('input');
    input.setAttribute('type','checkbox');
    input.setAttribute('id','checkbox');
    input.setAttribute('name',gameData[progress].response.text);
    li.appendChild(input);

    //check a n'importe quel endroit du li element
    li.addEventListener('click', ()=>{
      input.checked = !input.checked;
    });
    let span=document.createElement('span');
    li.appendChild(span);
    span.textContent=gameData[progress].response[i].text;
  };
};

//verification answers before Next question
btnNext.addEventListener('click', verifyAnswers);

//function verify answers
function verifyAnswers(){
  let userResponse=false;

  next();
/*
  for(let i=0;i<gameData[progress].response.length;i++){
  userResponse=$('#checkbox').is(':checked');
  if(userResponse===gameData[progress].response[i].isGood){
    console.log('right');
    
  }
  else continue;
  }*/
  /*
  let notChoose=true;
  let userResponse=false;
  for(i=0;i<gameData[progress].response.length;i++){
    if($('input'+i).is(":checked")){
      notChoose=false;
      userResponse=gameData[progress].response[i].isGood;
      console.log(userResponse);
      
    }
  }
  */
  
  /*
  let checkbox=formRes.querySelectorAll('input[type="checkbox"]:checked');
  if(checkbox){
    currentResponse='true';
  }
  for(let i=0;i<3;i++){
    if(currentResponse===gameData[progress].response[i].isGood){
      console.log('right')
    }
    else console.log('wrong')
  }*/
  
}

//function for next question
function next(){
  if(progression.textContent<gameData.length){
    progression.textContent++;
    progress++;
    changeContent(gameData);
  }
  else popup();
};

//popup function
function popup(){
  console.log('arrete');
}



/*
$(document).ready(function(){
    //request demand for the json file from the server with Ajax
    
    $.ajax({
        url: 'https://batman-api.sayna.space/questions',
        datatype: 'json',
        success: function(questions){
            console.log(questions)
        },
        error: function(){
            console.log('impossible de se connecter')
        }
    })*/
 /*   fetch('./quiz-batman.json')
  .then(response => response.json())
  .then(data => {
    // Utilisez les données JSON ici
    console.log(data);
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données JSON :', error);
  });
    console.log('offline')
 
});
*/


