$(function () {

	//Выбор способа получения товара
	$('.step-buy .table-pokup .check-method').on('click', function () {
		$('.step-buy .table-pokup .check-method').attr('check', 'false');
		$(this).attr('check', 'true');
	});

	$('.step-buy .politica .radio').on('click', function () {
		$('.step-buy .table-pokup .check-method').attr('check', 'false');
		$(this).attr('check', 'true');
	});
});