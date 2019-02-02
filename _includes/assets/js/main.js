(function () {
	function Main() {
		var global = {
		}

		var fn = {
			init: function () {
				fn.initMenu();
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
					jQuery('.navbar').fadeOut();
					jBody.removeClass('stop-scrolling');
					window.removeEventListener('touchmove', fn.blockPageScroll, {passive: false});
				}
				else
				{
					jBody.addClass('has-menu-open');
					jQuery('.navbar').fadeIn();
					jBody.addClass('stop-scrolling');
					window.addEventListener('touchmove', fn.blockPageScroll, {passive: false});
				}
			},

			blockPageScroll: function(e) {
				e.preventDefault();
			}
		}

		fn.init();
	}

	new Main();
}());