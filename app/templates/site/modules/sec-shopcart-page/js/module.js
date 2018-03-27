$(function () {

	//Калькулятор количество продуктов
	$('.cart-page .button-plus').on('click', function () {
		var input = $(this).parent();
	console.log(input);
		
		$(input).val(parseInt($(input).val())++);
	});
});