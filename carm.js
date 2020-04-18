var carm = {
    hp: 100,
    atk: 10,
    mazza: false
};

function load(scenes, number){
    document.body.innerHTML = ""; //pulisce scena precedente
    document.write(scenes[number].text); //dialogo
    //per ogni azione, creo il bottone corrispondente e associo l'event listener
    scenes[number].actions.forEach( 
	function(item){
	    var btn = document.createElement("BUTTON");
	    btn.innerHTML = item.label;
	    btn.addEventListener("click", function(){ item.action(carm); });
	    document.body.appendChild(btn); 
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

