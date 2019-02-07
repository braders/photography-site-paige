(function () {
	function Main() {
		var global = {
		}

		var fn = {
			init: function () {
				fn.initMenu();
				fn.initPopover();
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
				jQuery('.popover').find('img').attr('src', src);
				jQuery('.popover, .popover-bg').fadeIn(400);
			},

			closePopover: function()
			{
				jQuery('.popover, .popover-bg').fadeOut(400);
				jQuery('.popover').find('img').removeAttr('src');
			}

		}

		fn.init();
	}

	new Main();
}());