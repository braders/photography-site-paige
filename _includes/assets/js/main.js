(function () {
	function Main() {
		var global = {
		}

		var fn = {
			init: function () {
				fn.initMenu();
				fn.initPopover();
				fn.initHome();
			},

			initMenu: function() {
				jQuery('.js-toggle').on('click', fn.onMenuToggle);
			},

			onMenuToggle: function()
			{
				var jBody = jQuery('body');
				if (jBody.hasClass('has-menu-open'))
				{
					jBody.removeClass('has-menu-open');
					jQuery('main').css('margin-top', '');
					jQuery('.navbar').fadeOut();
					jBody.removeClass('stop-scrolling');
					window.removeEventListener('touchmove', fn.blockPageScroll, {passive: false});
				}
				else
				{
					jBody.addClass('has-menu-open');
					jQuery('main').css('margin-top', jQuery('header').outerHeight());
					jQuery('.navbar').fadeIn();
					jBody.addClass('stop-scrolling');
					window.addEventListener('touchmove', fn.blockPageScroll, {passive: false});
				}
			},

			blockPageScroll: function(e) {
				e.preventDefault();
			},

			initPopover: function() {
				jQuery('.imggrid__item').on('click', fn.openPopover);
				jQuery('.popover, popover-bg').on('click', fn.closePopover);
			},

			openPopover: function(e)
			{
				var src = jQuery(this).find('[data-large]').attr('data-large');
				var title = jQuery(this).find('[data-title]').attr('data-title');
				var subtitle = jQuery(this).find('[data-subtitle]').attr('data-subtitle');
				jQuery('.popover').find('img').attr('src', src);
				jQuery('.popover').find('.popover__title').text(title);
				jQuery('.popover').find('.popover__subtitle').text(subtitle);
				jQuery('.popover, .popover-bg').fadeIn(400);
			},

			isImgLoaded: function(img) {
				if (!img.complete) {
					return false;
				}

				if (img.naturalWidth === 0) {
					return false;
				}

				return true;
			},

			closePopover: function()
			{
				jQuery('.popover, .popover-bg').fadeOut(400);
				jQuery('.popover').find('img').removeAttr('src');
			},

			initHome: function()
			{
				jQuery('.slider').slick({
					arrows: false,
					lazyLoad: 'ondemand',
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 4000,
					pauseOnFocus: false,
					pauseOnHover: false,
					infinite: true,
					fade: true,
					cssEase: 'linear',
					initialSlide: fn.getRandomInt(0, jQuery('.slider').find('img').length)
				});
			},

			getRandomInt: function(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
			}

		}

		fn.init();
	}

	new Main();
}());