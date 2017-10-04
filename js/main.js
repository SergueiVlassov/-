jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 5000,
			pause: false,
            wrap: true
		});
	});
});


$(document).ready(function() {
$(settings.emailID).keyup(function(){
		var email = $.trim($(settings.emailID).val());
		    if(email !== 0) {
				if(isValidEmailAddress(email)){
          $(this).parents('.form-group').addClass('has-success');
          $(this).addClass('form-control-success');
          $(this).parents('.form-group').removeClass('has-danger');
          $(this).removeClass('form-control-danger');
          $(this).parents('.form-group').find('.texte').css('display', 'none');
					localStorage.setItem('email', email);
				} else {
               $(this).parents('.form-group').addClass('has-danger');
               $(this).addClass('form-control-danger');
                   $(this).parents('.form-group').find('.texte').text(settings.ErrorTextEmail);
                   $(this).parents('.form-group').find('.texte').css('display', 'block');
				}
			} else {
              $(this).parents('.form-group').addClass('has-danger');
              $(this).addClass('form-control-danger');
                $(this).parents('.form-group').find('.texte').text(settings.ErrorTextEmail);
                $(this).parents('.form-group').find('.texte').css('display', 'block');
			}
		});
   

				$(settings.Custom).keyup(function(){
						var custom = $.trim($(settings.Custom).val()).length * 1;
								if(custom > Math.round(settings.MinCharsCustom - 1)) {
									$(this).parents('.form-group').addClass('has-success');
									$(this).addClass('form-control-success');
									$(this).parents('.form-group').removeClass('has-danger');
									$(this).removeClass('form-control-danger');
									var customS = $.trim($(settings.Custom).val());
									$(this).parents('.form-group').find('.texte').css('display', 'none');
									 localStorage.setItem('custom', customS);
							} else if(custom < settings.MinCharsCustom){
											$(this).parents('.form-group').addClass('has-danger');
											$(this).addClass('form-control-danger');
											$(this).parents('.form-group').find('.texte').text(settings.ErrorTextCustom);
										 $(this).parents('.form-group').find('.texte').css('display', 'block');
							}
						});



// localStorage
if (localStorage.getItem('email') ||  localStorage.getItem('custom')) {
$(settings.emailID).val(localStorage.getItem('email'));

$(settings.Custom).val(localStorage.getItem('custom'));
}
$('#submit').on('click', function () {
	  window.localStorage.clear();
    var mail = $.trim($(settings.emailID).val());
   
		var cus = $.trim($(settings.Custom).val());
    if (mail == '' || cus == '') {
			$('.form-group').addClass('has-danger');
			$('.form-control').addClass('form-control-danger');
    } else {
      $("#message").css('display', 'block');
    }
});
	});
	function isValidEmailAddress(emailAddress) {
 		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
 		return pattern.test(emailAddress);
	}