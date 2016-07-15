$( ".carousel-infoglobo .bullet li" ).click(function() {
	$( ".carousel-infoglobo .bullet li" ).removeClass( "active" );
	$( this ).addClass( "active" );
	$(".carousel-infoglobo ul.list-images li").removeClass( "active" );
	$(".carousel-infoglobo ul.list-images li").removeClass( "next" );
	$(".carousel-infoglobo ul.list-images li").removeClass( "inactive" );
	$(".carousel-infoglobo ul.list-images li").removeClass( "prev" );
});
$( ".carousel-infoglobo .bullet li:nth-child(1)" ).click(function() {
	$(".carousel-infoglobo ul.list-images li:nth-child(1)").addClass( "active" );
	$(".carousel-infoglobo ul.list-images li:nth-child(2)").addClass( "next" );
	$(".carousel-infoglobo ul.list-images li:nth-child(3)").addClass( "inactive" );
	$(".carousel-infoglobo ul.list-images li:nth-child(4)").addClass( "prev" );
});
$( ".carousel-infoglobo .bullet li:nth-child(2)" ).click(function() {
	$(".carousel-infoglobo ul.list-images li:nth-child(2)").addClass( "active" );
	$(".carousel-infoglobo ul.list-images li:nth-child(3)").addClass( "next" );
	$(".carousel-infoglobo ul.list-images li:nth-child(4)").addClass( "inactive" );
	$(".carousel-infoglobo ul.list-images li:nth-child(1)").addClass( "prev" );
});
$( ".carousel-infoglobo .bullet li:nth-child(3)" ).click(function() {
	$(".carousel-infoglobo ul.list-images li:nth-child(3)").addClass( "active" );
	$(".carousel-infoglobo ul.list-images li:nth-child(4)").addClass( "next" );
	$(".carousel-infoglobo ul.list-images li:nth-child(1)").addClass( "inactive" );
	$(".carousel-infoglobo ul.list-images li:nth-child(2)").addClass( "prev" );
});
$( ".carousel-infoglobo .bullet li:nth-child(4)" ).click(function() {
	$(".carousel-infoglobo ul.list-images li:nth-child(4)").addClass( "active" );
	$(".carousel-infoglobo ul.list-images li:nth-child(1)").addClass( "next" );
	$(".carousel-infoglobo ul.list-images li:nth-child(2)").addClass( "inactive" );
	$(".carousel-infoglobo ul.list-images li:nth-child(3)").addClass( "prev" );
});

if (window.innerWidth > 940) {

	var n = $(".carousel-infoglobo ul.list-images li").length;
	var i = 1;
	var n1 = n + 1;
	var prev = n;
	var actual = i;
	var next = i+1;
	var inactive = 3;
	

	$( ".carousel-infoglobo .controller a" ).click(function() {
		$(".carousel-infoglobo ul.list-images li").removeClass( "active" );
		$(".carousel-infoglobo ul.list-images li").removeClass( "next" );
		$(".carousel-infoglobo ul.list-images li").removeClass( "inactive" );
		$(".carousel-infoglobo ul.list-images li").removeClass( "prev" );
	});

	$( ".carousel-infoglobo .controller a.back" ).click(function() {
		actual = actual - i;
		next = next - i;
		prev = prev - i;
		inactive = inactive - i ;

		if (actual == 0) {actual = n;}
		if (actual == n1) {actual = i;}
		if (inactive == 0) {inactive = n;}
		if (inactive == n1) {inactive = i;}
		if (prev == 0) {prev = n;}
		if (prev == n1) {prev = i;}
		if (next == 0) {next = n;}
		if (next == n1) {next = i;}

		$(".carousel-infoglobo ul.list-images li:nth-child(" + (actual) + ")").addClass( "active" );
		$(".carousel-infoglobo ul.list-images li:nth-child(" + (next) + ")").addClass( "next" );
		$(".carousel-infoglobo ul.list-images li:nth-child(" + (prev) + ")").addClass( "prev" );
		$(".carousel-infoglobo ul.list-images li:nth-child(" + (inactive) + ")").addClass( "inactive" );
		
	});

	$( ".carousel-infoglobo .controller a.next" ).click(function() {
		actual = actual + i;
		next = next + i;
		prev = prev + i;
		inactive = inactive + i ;

		if (actual == 0) {actual = n;}
		if (actual == n1) {actual = i;}
		if (inactive == 0) {inactive = n;}
		if (inactive == n1) {inactive = i;}
		if (prev == 0) {prev = n;}
		if (prev == n1) {prev = i;}
		if (next == 0) {next = n;}
		if (next == n1) {next = i;}

		$(".carousel-infoglobo ul.list-images li:nth-child(" + (actual) + ")").addClass( "active" );
		$(".carousel-infoglobo ul.list-images li:nth-child(" + (next) + ")").addClass( "next" );
		$(".carousel-infoglobo ul.list-images li:nth-child(" + (prev) + ")").addClass( "prev" );
		$(".carousel-infoglobo ul.list-images li:nth-child(" + (inactive) + ")").addClass( "inactive" );
		
	});
}