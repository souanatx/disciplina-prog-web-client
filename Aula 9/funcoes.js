function bemVindo(){
	var nome = prompt("Bem-vindo ao site!\nInsira o seu nome: ");
	document.getElementById("divBemvindo").innerHTML = "Bem-vindo, " + nome;
}

function obterData(){
	var dia = new Date("9-20-2017");
	var dias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
	var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
	document.getElementById("divData").innerHTML = "Hoje é " + dias[dia.getDay()] + ", dia " + dia.getDate() + " de " + meses[dia.getMonth()] + " de " + dia.getFullYear() + ".";
}

function obterHora(){
	var hora = new Date();
	var horas = hora.getHours().toString().padStart(2, "0");
	var minutos = hora.getMinutes().toString().padStart(2, "0");
	var segundos = hora.getSeconds().toString().padStart(2, "0");
	var relogio = horas + ":" + minutos + ":" + segundos;
	// var relogio = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds(); desta forma a hora aparecia mas com 1 digito era estranho
	document.getElementById("divHora").innerHTML = relogio;
	setInterval(obterHora,1000);
}