//click to cross off a todo

$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type=text]").on("keypress", function (event) {
	var newTodo = $(this).val();
	if(event.which === 13) {
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newTodo +"</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function () {
	$("input[type=text]").fadeToggle();
	if ($("input[type=text]").css("opacity") > 0.99) {
		$("input[type=text]").focus();
	}
})