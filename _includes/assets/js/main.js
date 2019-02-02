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
					jQuery(document).on('touchmove.menuOpen', fn.blockPageScroll);
				}
				else
				{
					jBody.addClass('has-menu-open');
					jQuery('.navbar').fadeIn();
					jQuery(document).on('touchmove.menuOpen', fn.blockPageScroll);
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