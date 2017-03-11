$('document').ready(function(){
    var foo="";
    var bar="";
    var result="";

    $('.key1').click(function() {
        bar = parseInt($(this).html());
        console.log(bar);
        console.log(typeof bar);
        $('input').val(bar);
    });

    $('.key2').click(function() {
        foo = parseInt($(this).html());
        console.log(foo);
        console.log(typeof foo);
        $('input').val(foo);
    });

   	$('#plus').click(function() {
        result = bar + foo;
        console.log(result);
        console.log(typeof result);
    });
        
    $('#less').click(function() {
    	result = bar - foo;
    	console.log(result);
    	console.log(typeof result);
    });    

    $('#divid').click(function() {
    	result = bar / foo;
    	console.log(result);
    	console.log(typeof result);
    });

    $('#multiply').click(function() {
    	result = bar * foo;
    	console.log(result);
    	console.log(typeof result);
    });

    $('#result').click(function() {
    	$('input').val(result);
    });

    $('#reset').click(function() {
    	result="";
    	bar="";
    	foo="";

    });


});