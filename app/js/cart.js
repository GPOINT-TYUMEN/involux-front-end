//SHOE MORE NAV CONTENTS
var selfLiCheck = '',
	selfLi = ''
$('.sec-top-nav-2 .check-nav li').on('click', function () {
	var selector = $(this).attr('check-show');

	if (selfLiCheck && selfLiCheck !== selector && selfLiCheck !== '') {
		$(selfLiCheck).removeClass('active');
		$(selfLi).removeClass('active');
	} 

	if (selector && selector !== '') {
		selfLiCheck = selector;
		selfLi = this;
		$(this).toggleClass('active');		
		$(selector).toggleClass('active');
	}
});


$('.sec-top-nav-2 .close-more-nav').on('click', function () {
	$(selfLi).trigger('click');
});

//SHOW PRODUCT IN CART
$('.cart').hover(function () {
	$('.product', this).fadeIn(200);
}, function () {
	$('.product', this).fadeOut(200);	
});
//SHOW/HIDE CITYES
$('.sec-top-nav .address').on('click', function () {
	$('.sec-cityes-top').slideToggle(200);
});

//HIDE CITYES
$('.sec-cityes-top .close-cityes').on('click', function () {
	$('.sec-cityes-top').slideUp(200);
});

//SHOW WRITE MESSAGES
$('.sec-top-nav .write-message').on('click', function () {
	$('.sec-messages').fadeIn(200, function () {
		$('.container-form-messages').slideDown(300);
	});
});

//SHOW REG
$('.sec-top-nav .reg').on('click', function () {
	$('.sec-auth-reg').fadeIn(200, function () {
		$('.container-form-reg').slideDown(300);
	});
});


//SHOW AUTH
$('.sec-top-nav .auth').on('click', function () {
	$('.sec-auth-reg').fadeIn(200, function () {
		$('.container-form-auth').slideDown(300);
	});
});


//> AUTH/REG
//SHOW RESET PSW
$('.sec-auth-reg .modalgo-reset-psw').on('click', function () {
	$('.sec-auth-reg form').css('display', 'none');
	$('.sec-auth-reg .container-form-resset-password-2').slideDown(200);
});

//SHOW REG
$('.sec-auth-reg .modalgo-reg-user').on('click', function () {
	$('.sec-auth-reg form').css('display', 'none');
	$('.sec-auth-reg .container-form-reg').slideDown(200);
});
//> AUTH/REG
//> MOBILE LEFT NAV
//SHOW LEFT NAV
$('.sec-mobile-top-nav .burger').on('click', function () {
	$('.sec-mobile-left-nav').fadeIn();
	//FIX SCROLL
});

//SHOW MORE NAV
$('.sec-mobile-left-nav li').on('click', function () {
	var selector = $(this).attr('nav');

	if (selector && selector !== '') {
		$(selector).fadeIn();
	}
});

//CLOSE NAV
$('.sec-mobile-left-nav .pagination').on('click', function () {
	var mobileLeftNav = $(this).parent().parent();

	console.log(mobileLeftNav);
	if ($(mobileLeftNav).hasClass('levt-nav-2')) {
		$(mobileLeftNav).fadeOut();
	} else {
		$('.sec-mobile-left-nav').fadeOut();
	}
});
//< MOVILE LEFT NAV

//> MODAL SETTINGS
	$('.modal').attr('self', 'modal');
	$('.modal-wrapper').attr('self', 'modal');

	//CLOSE ESCAPE
	$('body').on('keyup', function (e) {
		var keyCode = e.keyCode;
		if (keyCode === 27) {
			$('.modal').fadeOut(200);
			$('.modal form').fadeOut(200);
		}
	});

	//CLOSE CLICK
	$('.modal').on('click', function (e) {
		var elem = e.target || e.srcElement;
		if ($(elem).attr('self') === 'modal') {
			$(this).fadeOut(200);
			$('.modal form').fadeOut(200);			
		}
	});

	//CLOSE CLICK
	$('.close-modal').on('click', function () {
		$(this).closest('.modal').fadeOut(200);
		$('.modal form').fadeOut(200);		
	});	
//< MODAL SETTINGS


//< MOBILE
$(function () {
	//SHOW MODOAL AUTH
	$('.mobile-auth #auth').on('click', function () {;
		$('.modal.sec-auth-reg form').css('display', 'none');
		$('.modal.sec-auth-reg').fadeIn(function () {
			$('.modal.sec-auth-reg .container-form-auth').slideToggle();
		});
	});

	//SHOW MODOAL AUTH
	$('.mobile-auth #reg').on('click', function () {;
		$('.modal.sec-auth-reg form').css('display', 'none');
		$('.modal.sec-auth-reg').fadeIn(function () {
			$('.modal.sec-auth-reg .container-form-reg').slideToggle();
		});
	});	
});
//< MOBILE

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