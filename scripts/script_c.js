function main(){
	if(a==1){
		tiempo = localStorage.getItem('ti');
	}
	else{
		tiempo=10;
	}
	atras=3;
	ready=false;
	cont=0;
	cuenta=setInterval(cuentaatras,1000);
	document.getElementById('reset').disabled=true;
	document.getElementById('volver').disabled=true;
	document.getElementById('click').disabled=false;
	document.getElementById('atras').hidden=false;
	document.getElementById('atras').innerHTML=atras;
	document.getElementById('contador').innerHTML=cont;
	document.getElementById('timer').innerHTML=tiempo;
	window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false);
	
}

function change(time){
	localStorage.setItem('ti', time);
	a=1;
}

function cuentaatras(){
	if(atras>0){
		atras-=1;
		document.getElementById('atras').innerHTML=atras;
		if(atras==0){	
			ready=true;
			document.getElementById('atras').hidden=true;
			clearInterval(cuenta);
			timers = setInterval(timer, 1000);
		}
	}
	
}

function boton(){
	if (ready==true){
			if (tiempo>=0) {
			cont+=1;
			document.getElementById('contador').innerHTML=cont;
			}
		}
	}


function timer(){
	if (ready==true){
		if (tiempo > 0){
			tiempo-=1;
			document.getElementById('timer').innerHTML=tiempo;
		}
		else if(tiempo==0){
			ready=false;
			nuevolista();
			document.getElementById('volver').disabled=false;
			document.getElementById('reset').disabled=false;
			document.getElementById('click').disabled=true;
			
		}
	}
	else{
		clearInterval(timers);
	}
}



function nuevolista(){
	var nodo = document.createElement("LI");
	var cantidad=document.createTextNode(cont);
	nodo.appendChild(cantidad);
	document.getElementById('lista').appendChild(nodo);
}
