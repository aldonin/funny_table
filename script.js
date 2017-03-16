$(".go").click(function() {
	var players = [
		$("input[name=player1]").val(),
		$("input[name=player2]").val(),
		$("input[name=player3]").val(),
		$("input[name=player4]").val()
	];

	$(".board").hide();
	$.each(players, function(index, value) {
		$("#" + index).html(value);
	});
	$(".game").show();
});

$(".minus").click(function() {
	var value = $(this).prev();
	value.html(value.html() - 1);
});

$(".plus").click(function() {
	var value = $(this).prev().prev();
	value.html(1*value.html() + 1);
});