$(function() {
	// handler for .ready() called.

//track total
	var total = 0;

//click events
	$('#add5').click(add5);

	function add5() {
		console.log(total);
		total = total + 5;
		console.log(total);
		$('#result').html(total)
	}

//update result html

});