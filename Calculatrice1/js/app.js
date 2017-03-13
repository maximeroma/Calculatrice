

	var bar ="0";
	var foo=[];

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
		switch ($(this).val()) {
			
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
	})
