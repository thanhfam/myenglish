$(document).ready(function() {
	$('#form-register-email').submit(function(e) {
		var firstname = $('input#firstname');
		var lastname = $('input#lastname');
		var email = $('input#email');
		var mobile = $('input#mobile');
		var passwd = $('input#password');
		var passwd_retype = $('input#password-retype');
		var term = $('input#term-email');

		var hasSuccess = true;

		if (!firstname.val()) {
			firstname.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			firstname.next('span.help-block').html('Yêu cầu nhập tên.');
		}
		else {
			firstname.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			firstname.next('span.help-block').html('');
		}

		if (!lastname.val()) {
			lastname.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			lastname.next('span.help-block').html('Yêu cầu nhập họ, đệm.');
		}
		else {
			lastname.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			lastname.next('span.help-block').html('');
		}

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

	$('#form-change-password').submit(function(e) {
		var passwd = $('input#password-current');
		var passwd_new = $('input#password-new');
		var passwd_new_retype = $('input#password-new-retype');

		var hasSuccess = true;

		if (!passwd.val()) {
			passwd.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd.next('span.help-block').html('Yêu cầu nhập mật khẩu hiện tại.');
		}
		else {
			passwd.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd.next('span.help-block').html('');
		}

		if (!passwd_new.val()) {
			passwd_new.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_new.next('span.help-block').html('Yêu cầu nhập mật khẩu mới.');
		}
		else if (!isPassword(passwd_new.val())) {
			passwd_new.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_new.next('span.help-block').html('Mật khẩu mới yêu cầu ít nhất 8 ký tự, chứa 1 ký tự hoa, 1 ký tự thường và 1 chữ số.');
		}
		else {
			passwd_new.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd_new.next('span.help-block').html('');
		}

		if (!passwd_new_retype.val()) {
			passwd_new_retype.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_new_retype.next('span.help-block').html('Yêu cầu gõ lại mật khẩu.');
		}
		else if (passwd_new_retype.val() != passwd.val()) {
			passwd_new_retype.closest('div.form-group')
				.removeClass('has-success')
				.addClass('has-error');
			hasSuccess = false;

			passwd_new_retype.next('span.help-block').html('Mật khẩu gõ lại chưa giống với mật khẩu mới.');
		}
		else {
			passwd_new_retype.closest('div.form-group')
				.removeClass('has-error')
				.addClass('has-success');

			passwd_new_retype.next('span.help-block').html('');
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

	// topic list
	$('#lst-group-topic > a').on('click', function(e) {
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$('#lst-group-topic > a.active').removeClass('active');
			$(this).addClass('active');
		}
		e.preventDefault();
	});

	// skill list
	$('#lst-group-skill > a').on('click', function(e) {
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$('#lst-group-skill > a.active').removeClass('active');
			$(this).addClass('active');
		}
		e.preventDefault();
	});

	// content type button group
	$('#btn-group-content-type .btn').on('click', function(e) {
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$('#btn-group-content-type .btn.active').removeClass('active');
			$(this).addClass('active');
		}
		e.preventDefault();
	});

	// difficulty button group
	$('#btn-group-difficulty button').on('click', function(e) {
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$('#btn-group-difficulty button.active').removeClass('active');
			$(this).addClass('active');
		}
		e.preventDefault();
	});

	// difficulty button group
	$('#lst-group-view li a').on('click', function(e) {
		return;
		if ($(this).hasClass('active')) {
			return false;
		}
		else {
			$('#btn-group-difficulty button.active').removeClass('active');
			$(this).addClass('active');
		}
		e.preventDefault();
	});

	$('#video-list .view-video').on('click', function(e) {
		$('#modal-video').modal();

		e.preventDefault();
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

function loadVideo(params) {
	var defauls = {
		topic: 'all',
		skill: 'all',
		difficulty: 'beginner',
		view: 'most-view'
	};
}

function loadCourses(params) {
	var defauls = {
		topic: 'all',
		skill: 'all',
		difficulty: 'beginner',
		view: 'most-view'
	};
}