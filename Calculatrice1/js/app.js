$('document').ready(function(){

	var bar ="0";
	var foo=["0"];
	var result="";

	//entrer la variable

	$(".key").click(function(){
		bar = bar + $(this).html();
		console.log(bar);
		$('input').val(bar);
	});

	//entrer un opérateur

	$('.key2').click(function(){
		foo.push(bar);
		bar = "0";
		console.log(foo);
		console.log(typeof parseInt(foo[foo.length]));
		if (typeof parseInt(foo[foo.length]) === "number" ) {
			

			
			// mettre un opérateur dans le tableau que si le derniere élément est un nombreString
			console.log($('.key2'.this).html());
			foo.push($(this).html());
			console.log($(this).html());
		}

		


	});

	$('#result').click(function(){
		foo.push(bar);

		for(var i = 0 ; i <= foo.length; i++) {
			if (typeof parseInt(foo[i+1]) != "undefined"){
				
				switch (foo[i]) {

					/*a chaque tour de la boucle je mais la condition "opérateur"
					je fais l'opération avec la valeur précédente et la suivante */

					case "+":

						result = parseInt(foo[i-1]) + parseInt(foo[i+1]);
						foo.splice(i+1, 1, result);
						console.log(result);
						console.log(foo);
						i++;
						break;

					case "-":
						result = parseInt(foo[i-1]) - parseInt(foo[i+1]);
						foo.splice(i+1, 1, result);
						i++;
						break;

					case "/":
						result = parseInt(foo[i-1]) / parseInt(foo[i+1]);
						foo.splice(i+1, 1, result);
						i++;
						break;

					case "*":
						result = parseInt(foo[i-1]) * parseInt(foo[i+1]);
						foo.splice(i+1, 1, result);
						i++;
						break; 

					default:
						i++;
						break;
				}
			} else {
				console.log(result);
			}
			

			
		}
	

	});
});


