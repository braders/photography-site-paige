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
				var title = jQuery(this).find('[data-title]').attr('data-title');
				var subtitle = jQuery(this).find('[data-subtitle]').attr('data-subtitle');
				jQuery('.popover').find('img').attr('src', src);
				jQuery('.popover').find('.popover__title').text(title);
				jQuery('.popover').find('.popover__subtitle').text(subtitle);
				jQuery('.popover, .popover-bg').fadeIn(400);

				var img = jQuery('.popover').find('img');
				if (fn.isImgLoaded(img)) {
					fn.resizePopoverImage(img);
				} else {
					img.on('load', fn.resizePopoverImage(img));
				}
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

			resizePopoverImage: function(img) {
				// Wait until screen painted
				/*window.setTimeout(function() {
					var fits = false;
					var width = jQuery(img).width();
					var winHeight = jQuery(window).height();
					while (!fits) {
						var height = jQuery('.popover__content').height();
						if (height < winHeight) {
							width = width - 1;
							console.log(width);
							jQuery(img).css('max-width', width);
						} else {
							matches = true;
						}
					}
				}, 1)*/
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