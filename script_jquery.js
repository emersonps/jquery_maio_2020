/*var frutas = ['Maçã','Uva', 'Laranja','Tangirina'];

//alert(frutas[3]);

for(i in frutas){ //i = indice / frutas = cada item do array
	alert(frutas[i]);
}*/

//verifica se o documento foi carregado
//$(document).ready(function(){  ou:
$(function(){

	$('#esconder').click(function(){
		//$('#t1').hide();
		$('#t1').fadeOut(3000);
		//$('#t1').delay(1000); //1segundo
		$('#t1').fadeIn(3000);
	});
	
	$('#vermelho').click(function(){
		$('#t2').css("color","red");
		$('button').removeClass('red');
	});
	
	$('#azul').click(function(){
		$('#t2').css("color","blue");
		$('#mensagem').text("Cor Alterada com sucesso!")
		/*$('#mensagem').css("color","blue");
		$('#mensagem').css('border', '1px solid blue');
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut('fast');*/
		
		//Encadeamento em bloco
		/*.css("color","blue")
		.css('border', '1px solid blue')
		.delay(3000)
		.fadeOut('fast');*/
		
		//Declaração múltipla de CSS
	
		.css({color:'blue', border:'1px solid blue', /*backgroundColor:'yellow'*/}) //Propriedades com nomes separados por '-' substitui o padrão pro CamelCase
		.delay(3000)
		.fadeOut('fast')
		//Inserindo Class em um elemento
		.addClass('green');	
	});
	

	$('#l1').click(function(){
		$('#i1').show();
		$('#i2').hide();
		$('#i3').hide();
	});
	
	$('#l2').click(function(){
		$('#i2').show();
		$('#i1').hide();
		$('#i3').hide();
	});
	
	$('#l3').click(function(){
		$('#i3').show();
		$('#i1').hide();
		$('#i2').hide();
	});
	
	
});