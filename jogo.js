const JogadorX= "X";
const JogadorO = "O";
var vez = JogadorX; 
var FimDeJogo = false;

mostraVez();

function mostraVez(){
	 
	if (FimDeJogo){
		return;
	}
	if(vez == JogadorX){
		var player = document.querySelectorAll("div#menu img")[0];
		player.setAttribute("src","close.png");
	} else{
		var player = document.querySelectorAll("div#menu img")[0];
		player.setAttribute("src","dot.png");
	}
}



function IniciaPosicao(){
	var posicoes = document.getElementsByClassName("posicao");
	var cont = 0;
	while(cont < posicoes.length){
		posicoes[cont].addEventListener("click",
		function evento(){
			if (FimDeJogo){
				return;
			}
			if(this.getElementsByTagName("img").length == 0){
				if(vez == JogadorX){
					this.innerHTML = "<img src='close.png'>";
					this.setAttribute("jogada",JogadorX);
					vez = JogadorO;
				}else{
					this.innerHTML = "<img src='dot.png'>";
					this.setAttribute("jogada",JogadorO);	
					vez = JogadorX;
				}
			} 
			mostraVez();
			mostraVencedor();
		});
		cont++;
	}
}

IniciaPosicao();

async function mostraVencedor(){
	var jogados = new Array();
	for(var i=0; i<9; i++){
		var id = "pos"+(i+1);
		//console.log("sss"+id);
		jogados[i] = document.getElementById(id).getAttribute("jogada");
		//console.log(jogados[i]);
	}
	
	if((jogados[0] == jogados[3] && jogados[3] == jogados[6] && jogados[0] != "")||
		(jogados[0] == jogados[1] && jogados[1] == jogados[2] && jogados[2] != "")||
		(jogados[0] == jogados[4] && jogados[4] == jogados[8] && jogados[8] != "")){
		FimDeJogo = true;
		await sleep(50);
		alert("jogador "+jogados[0]+" ganhou");
		
	}
	
	else if((jogados[8] == jogados[7] && jogados[7] == jogados[6] && jogados[6] != "")||
	   (jogados[6] == jogados[4] && jogados[4] == jogados[2] && jogados[2] != "")){
		
		FimDeJogo = true;
		await sleep(50);
		alert("jogador "+jogados[6]+" ganhou");
	}
	else if((jogados[8] == jogados[5] && jogados[5] == jogados[2] && jogados[2] != "")||
			(jogados[5] == jogados[4] && jogados[4] == jogados[3] && jogados[5] != "")){
		
		FimDeJogo = true;
		await sleep(50);
		alert("jogador "+jogados[5]+" ganhou");
	}
	else if(jogados[1] == jogados[4] && jogados[4] == jogados[7] && jogados[7] != ""){
		
		FimDeJogo = true;
		await sleep(50);
		alert("jogador "+jogados[4]+" ganhou");
	} else {
		var empate = true;
		for(var e=0;e<jogados.length;e++){
			if(jogados[e]== ""){
				empate = false;
			}
		}
		if (empate == true){
			FimDeJogo = true;
			await sleep(50);
			alert("Empate");
		}
	}
	
	
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}

