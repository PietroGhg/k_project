var carm = {
    hp: 100,
    atk: 10,
    mazza: false
};

var buttons = [];
function load(scenes, number){
    //tolgo bottoni scena precedente
    while(buttons.length != 0){
	buttons[0].parentNode.removeChild(buttons[0]);
	buttons.splice(0,1);
    }
    //scrivo il testo
    var testo = document.getElementById("testo");
    testo.innerHTML = scenes[number].text+"<br>";

    //per ogni azione, creo il bottone corrispondente e associo l'event listener
    scenes[number].actions.forEach(
	function(item){
	    var btn = document.createElement("BUTTON");
	    btn.innerHTML = item.label;
      btn.classList.add("ps5-btn");
	    btn.addEventListener("click", function(){ item.action(carm); });
	    document.getElementById("testo").appendChild(btn);
	    //$("actualBox").append(btn);
	    buttons.push(btn); //push in buttons per poterli togliere dopo
	}
    );
}

var scenes = {
    1:{
	text: "hai un topastro davanti a te",
	actions: [{label: "picchialo",
		   action: function(carm){
		       if(!carm.mazza) alert("non hai la mazza");
		       else alert("bonk bonk");
		   }},
		  {label: "esci dalla stanza",
		   action: function(carm){load(scenes, 2);}}]
    },
    2:{
	text: "hai una mazza davanti a te",
	actions: [{label: "raccogli",
		   action: function(carm){
		       carm.mazza = true;
		       load(scenes,3);}}]
    },
    3:{
	text: "hai raccolto la mazza",
	actions: [{label: "torna in camera",
		   action: function(carm){load(scenes,1);}}]
    },
    4:{
	text: "scena iniziale",
	actions: [{label: "premi per iniziare",
		   action: function(carm){ load(scenes, 1); }}]
    }
};

load(scenes, 4);
