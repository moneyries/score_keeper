$(function() {
	// handler for .ready() called.

//track total
	var total = 0;

//click events
	$('#zero').click(zero);
	$('#add5').click(add5);
	$('#add10').click(add10);
	$('#sub1').click(sub1);

	function zero() {
		total = 0;
		total = total + 0;
		console.log(total);
		$('#result').html(total);
		alert('All clear!')
	}

	function add5() {
		console.log(total);
		total = total + 5;
		console.log(total);
		$('#result').html(total);
	}

	function add10() {
		console.log(total);
		total = total + 10;
		console.log(total);
		$('#result').html(total);
	}

	function sub1() {
		console.log(total);
		total = total - 1;
		console.log(total);
		$('#result').html(total);
	}

//update result html

});