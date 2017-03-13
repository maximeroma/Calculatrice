$('document').ready(function(){
    var bar="0";
    var foo="0";
    var result="0";

    // entrer la variable 1

    $('.key1').click(function() {
        bar = bar + $(this).html();
        console.log(bar);
        console.log(typeof bar);
        $('input').val(bar);
    });

    // entrer la variable 2

    $('.key2').click(function() {
        foo = foo + $(this).html();
        console.log(foo);
        console.log(typeof foo);
        $('input').val(foo);
    });

    // faire une addition

   	$('#plus').click(function() {
        result = parseInt(bar) + parseInt(foo);
        console.log(result);
        console.log(typeof result);
    });
        
    // faire une soustraction

    $('#less').click(function() {
    	result = parseInt(bar) - parseInt(foo);
    	console.log(result);
    	console.log(typeof result);
    });   

    // faire une division 

    $('#divid').click(function() {
    	result = parseInt(bar) / parseInt(foo);
    	console.log(result);
    	console.log(typeof result);
    });

    // faire une multiplication

    $('#multiply').click(function() {
    	result = parseInt(bar) * parseInt(foo);
    	console.log(result);
    	console.log(typeof result);
    });

    // afficher le résultat

    $('#result').click(function() {
    	$('input').val(result);
    });

    // réinitialiser la calculette

    $('#reset').click(function() {
    	result="";
    	bar="";
    	foo="";
        $('input').text ="Enter a number";

    });



});
