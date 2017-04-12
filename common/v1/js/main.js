$(document).ready(function() {
	$('#form-register-email').submit(function(e) {
		var email = $('input#email');
		var mobile = $('input#mobile');
		var passwd = $('input#password');
		var passwd_retype = $('input#password-retype');
		var term = $('input#term-email');

		var hasSuccess = true;

		if (!email.val()) {
			email.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			email.next('span.help-block').html('Yêu cầu nhập địa chỉ email.');
		}
		else if (!isEmail(email.val())) {
			email.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			email.next('span.help-block').html('Email chưa đúng định dạng.');
		}
		else {
			email.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			email.next('span.help-block').html('');
		}

		if (!mobile.val()) {
			mobile.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			mobile.next('span.help-block').html('Yêu cầu nhập số điện thoại di động.');
		}
		else {
			mobile.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			mobile.next('span.help-block').html('');
		}

		if (!passwd.val()) {
			passwd.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd.next('span.help-block').html('Yêu cầu nhập mật khẩu mới.');
		}
		else if (!isPassword(passwd.val())) {
			passwd.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd.next('span.help-block').html('Mật khẩu phải dài hơn 7 ký tự, chứa 1 ký tự hoa, 1 ký tự thường và 1 số.');
		}
		else {
			passwd.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd.next('span.help-block').html('');
		}

		if (!passwd_retype.val()) {
			passwd_retype.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_retype.next('span.help-block').html('Yêu cầu gõ lại mật khẩu.');
		}
		else if (passwd_retype.val() != passwd.val()) {
			passwd_retype.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_retype.next('span.help-block').html('Mật khẩu gõ lại chưa giống với mật khẩu mới.');
		}
		else {
			passwd_retype.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd_retype.next('span.help-block').html('');
		}

		if (!term.is(":checked")) {
			term.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			term.next().next('span.help-block').html('Bạn phải đồng ý với thoả thuận sử dụng.');
		}
		else {
			term.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			term.next().next('span.help-block').html('');
		}

		if (!hasSuccess) {
			e.preventDefault();
		}
	});

	$('#form-register-fb').submit(function(e) {
		var term = $('input#term-fb');

		var hasSuccess = true;

		if (!term.is(":checked")) {
			term.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');

			hasSuccess = false;

			term.next().next('span.help-block').html('Bạn phải đồng ý với thoả thuận sử dụng.');
		}
		else {
			term.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			term.next().next('span.help-block').html('');
		}

		if (!hasSuccess) {
			e.preventDefault();
		}
	});

	$('#form-register-gg').submit(function(e) {
		var term = $('input#term-gg');

		var hasSuccess = true;

		if (!term.is(":checked")) {
			term.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');

			hasSuccess = false;

			term.next().next('span.help-block').html('Bạn phải đồng ý với thoả thuận sử dụng.');
		}
		else {
			term.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			term.next().next('span.help-block').html('');
		}

		if (!hasSuccess) {
			e.preventDefault();
		}
	});

	$('#form-login-email').submit(function(e) {
		var email = $('input#email');
		var passwd = $('input#password');

		var hasSuccess = true;

		if (!email.val()) {
			email.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			email.next('span.help-block').html('Yêu cầu nhập địa chỉ email.');
		}
		else if (!isEmail(email.val())) {
			email.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			email.next('span.help-block').html('Email chưa đúng định dạng.');
		}
		else {
			email.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			email.next('span.help-block').html('');
		}

		if (!passwd.val()) {
			passwd.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd.next('span.help-block').html('Yêu cầu nhập mật khẩu.');
		}
		else {
			passwd.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd.next('span.help-block').html('');
		}

		if (!hasSuccess) {
			e.preventDefault();
		}
	});

	$('#form-forgot-password').submit(function(e) {
		var email = $('input#email');

		var hasSuccess = true;

		if (!email.val()) {
			email.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			email.next('span.help-block').html('Yêu cầu nhập địa chỉ email.');
		}
		else if (!isEmail(email.val())) {
			email.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			email.next('span.help-block').html('Email chưa đúng định dạng.');
		}
		else {
			email.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			email.next('span.help-block').html('');
		}

		if (!hasSuccess) {
			e.preventDefault();
		}
	});

	$('#form-reset-password').submit(function(e) {
		var passwd = $('input#password');
		var passwd_retype = $('input#password-retype');

		var hasSuccess = true;

		if (!passwd.val()) {
			passwd.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd.next('span.help-block').html('Yêu cầu nhập mật khẩu mới.');
		}
		else if (!isPassword(passwd.val())) {
			passwd.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd.next('span.help-block').html('Mật khẩu phải dài hơn 7 ký tự, chứa 1 ký tự hoa, 1 ký tự thường và 1 số.');
		}
		else {
			passwd.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd.next('span.help-block').html('');
		}

		if (!passwd_retype.val()) {
			passwd_retype.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_retype.next('span.help-block').html('Yêu cầu gõ lại mật khẩu.');
		}
		else if (passwd_retype.val() != passwd.val()) {
			passwd_retype.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_retype.next('span.help-block').html('Mật khẩu gõ lại chưa giống với mật khẩu mới.');
		}
		else {
			passwd_retype.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd_retype.next('span.help-block').html('');
		}

		if (!hasSuccess) {
			e.preventDefault();
		}
	});

	$('div.ng-isolate-scope').on({
		'mouseenter': function(e) {
			$(this).children('img.step-video-preview').addClass('hide');
			$(this).children('video').removeClass('hide');

			$(this).children('video')[0].play();
		},
		'mouseleave': function(e) {
			$(this).children('img.step-video-preview').removeClass('hide');
			$(this).children('video').addClass('hide');

			$(this).children('video')[0].pause();
			$(this).children('video')[0].currentTime = 0;
		}
	});
});

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function isPassword(passwd) {
	var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	return regex.test(passwd);
}