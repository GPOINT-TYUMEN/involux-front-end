$(function () {

	//Калькулятор количество продуктов
	$('.cart-page .button-plus').on('click', function () {
		var input = $(this).parent().find('input[type="text"]');

		var countItems = parseInt($(input).val());

		countItems++;

		$(input).val(countItems);
		$(input).attr('value', countItems);
	});

	//Калькулятор количество продуктов
	$('.cart-page .button-minus').on('click', function () {
		var input = $(this).parent().find('input[type="text"]');

		var countItems = parseInt($(input).val());

		countItems--;

		//Количество продукта не может быть меньше еденицы
		if (countItems >= 1) {
			$(input).val(countItems);
			$(input).attr('value', countItems);			
		}
	});	
});