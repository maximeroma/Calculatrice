$('document').ready(function(){

	var bar ="0";
	var foo=[];
	var result="0";

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

		if (typeof foo[foo.lenght] != "Number" ) {
			switch ($('.key2').val()) {
				
				case "+":
					foo.push("+");
					break;

				case "-":
					foo.push("-");
					break;

				case "/":
					foo.push("/");
					break;

				case "*":
					foo.push("*");
					break;

				default :
					break;

			}
		};


	});

	$('#result').click(function(){
		for(var i = 0 ; i <= foo.length ; i++) {
			if (typeof parseInt(foo[i]) != "NaN"){
				return i++;
			}
			switch (foo[i]) {

				case "+":
					return result = parseInt(foo[i-1]) + parseInt(foo[i+1]);
					foo.splice(i+2, 1, result);
					break;

				case "-":
					return result = parseInt(foo[i-1]) + parseInt(foo[i+1]);
					foo.splice(i+2, 1, result);
					break;

				case "/":
					return result = parseInt(foo[i-1]) + parseInt(foo[i+1]);
					foo.splice(i+2, 1, result);
					break;

				case "*":
					return result = parseInt(foo[i-1]) + parseInt(foo[i+1]);
					foo.splice(i+2, 1, result);
					break; 
			}
		}
	console.log(foo);

	});
});


