$(function () {


	//Открываем модалку для редактирование данных аккаунта
	$('.data-user .edit-info-account').on('click', function () {
		$('.modal.info-account form').css('display', 'none');

		$('.modal.info-account').fadeIn(function () {
			$('.modal.info-account .form-1').slideToggle();
		});
	});

	//Открываем модалка для редактирование адреса доставки
	$('.data-user .edit-address').on('click', function () {
		$('.modal.info-address form').css('display', 'none');
		
		$('.modal.info-address').fadeIn(function () {
			$('.modal.info-address .form-1').slideToggle();
		});		
	});


	$('.zakazi-info').on('click', function () {
		$('.zakazi-info').removeClass('active');
		$(this).addClass('active');
	});

	$('.zakazi-info.works').on('click', function () {
		$('.window-tablet').removeClass('active');
		$('.window-tablet.work').addClass('active');
	});

	$('.zakazi-info.buys').on('click', function () {
		$('.window-tablet').removeClass('active');
		$('.window-tablet.success-buys').addClass('active');
	});

	$('.sex-cell .radio').on('click', function () {
		$('.sex-cell .radio').attr('check', 'false');
		$(this).attr('check', 'true');
	});

});