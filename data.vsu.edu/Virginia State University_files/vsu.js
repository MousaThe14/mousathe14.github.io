(function($) {
	$(document).ready(function() {
		var backToTopVisible = false;
		getAlerts();
		setResourcesMenuWidth();
		removeImgAtts();
		fixVideoIframes();
		responsiveTables();
		if ($('#navigation .navbar-subdomain').length > 0) {
			$('#navigation').addClass('subdomain');
			var $mainNav = $('#navigation').find('.navbar-nav').first();
			if ($mainNav) {
				var navigationLabel = $mainNav.data('nav');
				if (navigationLabel) {
					$('#navigation').attr('aria-label', navigationLabel);
				}
			}
		}
		$(window).on('debouncedresize', function() {
			var containerWidth = $('.container').first().outerWidth();
			setResourcesMenuWidth();
			$('body').removeClass('menu-open');
			$('#mega-menu .collapse').collapse('hide');
			$('.mobile-accordion').collapse('hide');
			if (containerWidth < 992) {
				if ($(document.activeElement).prop('type') !== 'text') {
					$('#main-nav').collapse('hide');
				}
			}
			setTimeout(setBodyPadding, 300);

		});
		$(document).on('shown.bs.collapse', '#main-nav.navbar-collapse', function(e) {
			var containerWidth = $('.container').first().outerWidth();
			if ($(this).hasClass('show')) {
				if (containerWidth < 992) {
					var screenHeight = Number($(window).height());
					var headerHeight = Number($('#navigation .navbar-brand').first().outerHeight());
					var subdomainHeight = Number($('#navigation .navbar-subdomain').first().outerHeight());
					var menuHeight = 0;
					if (isNaN(subdomainHeight)) {
						menuHeight = Number(screenHeight) - Number(headerHeight);
					} else {
						menuHeight = Number(screenHeight) - Number(subdomainHeight);
					}
					$('#main-nav').css({ maxHeight: menuHeight });
					var bodyTop = '-' + window.scrollY + 'px';
					$('body').addClass('menu-open').css({ top: bodyTop });
					window.addEventListener('touchmove', handleTouchEvent, { passive: false });
					document.getElementById('main-nav').addEventListener('touchmove', handleNavTouchEvent, { passive: false });
				} else {
					$('#main-nav').css({ maxHeight: 'none' });
				}
			}
			setTimeout(function() {
				var subMenuId = e.target.id.replace('mb', 'dt');
				var $subMenu = $('#' + subMenuId);
				//console.log('subMenuId: ', subMenuId);
				//console.log('subMenu.length: ', $subMenu.length);
				//console.log('subMenu.class: ', $subMenu.attr('class'));
				if ($subMenu.length > 0 && $subMenu.hasClass('show') && containerWidth >= 992) {
					//console.log('Main nav collapse show:', $subMenu.attr('id'));
					var $firstSubMenuLink = $subMenu.find('a').first();
					//console.log('firstSubMenuLink:', $firstSubMenuLink.text());
					if ($firstSubMenuLink.length > 0) {
						if ($firstSubMenuLink.hasClass('overview')) {
							$firstSubMenuLink.focus().trigger('focus');
							//console.log('Focus:', $firstSubMenuLink.text());
						}
					}
				}
			}, 300);
		}).on('hidden.bs.collapse', '#main-nav.navbar-collapse', function(e) {
			if (!$(this).hasClass('show')) {
				$('body').removeClass('menu-open').css({ top: '' });
				$('#main-nav').css({ maxHeight: 'none' });
				window.removeEventListener('touchmove', handleTouchEvent, { passive: true });
			}
		});
		$('#main-nav .primary-dropdown-toggle').each(function(i, navLink) {
			$(this).attr('href', $(this).data('nav'));
			$(navLink).on('click', function() {
				var itemClass = $(this).attr('href');
				$('#mega-menu .collapse:not(' + itemClass + ')').removeClass('show').collapse('hide');
			});
		});
		$(document).on('keyup', '#mega-menu .collapse a', function(e) {
			//console.log('Keyup:', e.which);
			//console.log('Href', this.href);
			// Up arrow, backspace, esc
			if (e.which == 38 || e.which == 8 || e.which == 27) {
				var $menu = $(this).closest('.collapse');
				var menuLinkId = $menu.attr('id').replace('-dt','');
				//console.log('Keyup menu:', menuLinkId);
				$('#main-nav a[href=".' + menuLinkId + '"]').click().focus();
			}
		});
		// Handle tab key for mega menu links
		$('#mega-menu .collapse').each(function(e) {
			var menu = this;
			//console.log('MM:', menu.id)
			var $lastMenuElem = $(menu).find('a').last();
			if ($lastMenuElem.length == 1) {
				//console.log('lastMenuElem', $lastMenuElem.text());
				var parentMenuItemId = menu.id.replace('-dt','').replace('nav-', 'menu-');
				//console.log('parentMenuItemId', parentMenuItemId);
				var $parentMenuItem = $('#' + parentMenuItemId);
				if ($parentMenuItem.length > 0) {
					//console.log('parentMenuItem', $parentMenuItem.text());
					if ($parentMenuItem.length == 1) {
						var $nextMenuItem = $parentMenuItem.parent().next().children('a').first();
						//console.log('Next:', $parentMenuItem.parent().get(0));
						if ($nextMenuItem.length == 0) {
							//console.log('nextMenuItem', $nextMenuItem.length);
							$nextMenuItem = $('#main-nav').next('button').first();
							//console.log('nextMenuItem', $nextMenuItem.length);
						}
						//console.log('nextMenuItem', $nextMenuItem.text());
						$lastMenuElem.on('keyup', function(e) {
							//console.log('LastMenuElem Keyup:', e.which);
							if (e.which == 9) {
								$parentMenuItem.trigger('click');
								$nextMenuItem.focus();
							}
						});
						$(menu).find('a').each(function(i, submenuLink) {
							if (submenuLink.href == window.location.href || window.location.href.indexOf(submenuLink.href.replace('/index.php', '')) != -1) {
								$parentMenuItem.addClass('active');
							}
						});
					}
				}
			}
		});
		$(document).on('shown.bs.collapse', '#nav-search-dt', function(e) {
			$(this).find('input').focus().trigger('focus');
		}).on('show.bs.collapse', '#nav-search-dt', function(e) {
			$(this).siblings().removeClass('show').collapse('hide');
		});
		$(document).on('keyup', '#nav-search-dt input', function(e) {
			//console.log('Search Keyup:', e.which);
			// Up arrow, backspace, esc
			if (e.which == 38) {
				$('#navigation button.search-toggler').first().click().focus();
			}
		});
		$(document).on('submit', '.search-form', function(e) {
			e.preventDefault();
			var searchTerm = $(this).find('input[name="q"]').first().val();
			var searchForm = this;
			if (searchTerm) {
				searchForm.submit();
			} else {
				$(searchForm).find('.wrapper').addClass('is-invalid');
			}
		});
		$(document).on('change', 'form.search-form', function() {
			$(this).find('.wrapper').removeClass('is-invalid');
		});
		$('body').on('change', '.form-control', function() {
			$(this).addClass('visited');
		});
		// Collapse all mega menus document click
		$(document).on('click', function(e) {
			if ($(e.target).parents('header').length == 0 || $(e.target).attr('id') == 'mega-menu') {
				$('#mega-menu .collapse, #resources-menu.collapse').collapse('hide');
				$('.mobile-accordion').collapse('hide');
				if ($(window).width() < 992) {
					$('#main-nav').collapse('hide');
				}
			}
		});
		$('section').each(function(i) {
			var bottomOfObject = $(this).position().top;
			var bottomOfWindow = $(window).scrollTop() + $(window).height();

			if (bottomOfWindow > bottomOfObject) {
				$(this).animate({ opacity: '1' }, 800);
			}
		});
		$(window).scroll(function() {
			/* Scroll Progress on Top Nav */
			var scrollTop = $(window).scrollTop();
			var scrollPosition = scrollTop + $(window).height();
			var screenSize = $('body')[0].scrollHeight;
			var percent = (scrollPosition / screenSize) * 100;
			if (percent > 20 && scrollTop !== 0) {
				$('header#hd #navigation.navbar .nav-scroll-indicator').css('width',  percent + '%');
			} else {
				$('header#hd #navigation.navbar .nav-scroll-indicator').css('width', '0%');
			}
			/* End Scroll Progress on Top Nav */

			$('section').each(function(i) {
				var bottomOfObject = $(this).position().top;
				if (scrollPosition > bottomOfObject) {
					$(this).animate({ opacity: '1' }, 800);
				}
			});
			// Collapse all mega menus on scroll
			$('#mega-menu .collapse, #resources-menu.collapse').collapse('hide');
			// Back to top button
			if ($(this).scrollTop() == 0 && backToTopVisible) {
				$('#back-to-top').removeClass('show');
				backToTopVisible = false;
			} else if (!backToTopVisible) {
				$('#back-to-top').addClass('show');
				backToTopVisible = true;
			}
		});
		$(document).on('click', '#back-to-top, #skip-link', function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, 300, function() {
				$('#content').find('a, button, [tabindex]').first().trigger('focus');
			});
		});
		$(document).on('focus', '.gallery-grid-item a', function(e) {
			console.log('Focus gallery-grid-item');
			$(this).closest('.gallery-grid-item').addClass('active');
		});
		$(document).on('blur', '.gallery-grid-item a', function(e) {
			console.log('Unfocus gallery-grid-item');
			$(this).closest('.gallery-grid-item').removeClass('active');
		});
		// shrink the main logo on scroll
		$(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('header#hd #navigation.navbar .navbar-brand img').addClass('small-logo');
            $('header#hd #navigation.navbar .navbar-subdomain .navbar-brand').addClass('small-nav');
        } else {
            $('header#hd #navigation.navbar .navbar-brand img').removeClass('small-logo');
            $('header#hd #navigation.navbar .navbar-subdomain .navbar-brand').removeClass('small-nav');
        }
    });
	});
	function removeImgAtts() {
		$('#content img').each(function() {
			if ($(this).hasClass('alignleft') || $(this).hasClass('alignright') || $(this).hasClass('aligncenter') || $(this).hasClass('size-full')) {
				$(this)
					.css({
						width: 'auto',
						height: 'auto',
					})
					.removeAttr('width')
					.removeAttr('height');
			}
		});
	}
	function fixVideoIframes() {
		$('#content iframe[src*="youtube"], #content iframe[src*="youtu.be"]').each(function() {
			$(this).removeAttr('width').removeAttr('height');
			if (!$(this).parent().hasClass('video-wrapper') && !$(this).parent().hasClass('player-wrapper')) {
				$(this).wrap('<div class="video-wrapper"></div>');
			}
		});
	}
	function responsiveTables() {
		$('#content table').each(function() {
			if (!$(this).hasClass('table') && !$(this).hasClass('gsc-search-box') && !$(this).hasClass('gsc-input')) {
				$(this).addClass('table');
			}
			if (!$(this).hasClass('gsc-search-box') && !$(this).hasClass('gsc-input') && !$(this).parent().hasClass('table-responsive')) {
				$(this).wrap('<div class="table-responsive"></div>');
			}
		});
	}
	function setResourcesMenuWidth() {
		var resourcesMenuItem = $('#utility-bar').find('a[data-target="#resources-menu"]').first().parent().get(0);
		if (resourcesMenuItem) {
			var resourcesMenuItemWidth = Math.floor($(resourcesMenuItem).outerWidth()) + 1;
			$('#resources-menu').width(resourcesMenuItemWidth);
		}
	}
	function handleTouchEvent(e) {
		e.preventDefault();
	}
	function handleNavTouchEvent(e) {
		e.stopPropagation();
	}
	function getAlerts() {
		var debugAlerts = false;
		if (debugAlerts) console.log('getAlerts()');
		$('#hd').find('.alert').alert('close');
		$.ajax({
			url: '/site-alerts.json',
			dataType: 'json',
			method: 'GET',
			cache: false,
			timeout: 8000,
			beforeSend: function(xhr, settings) {
				if (debugAlerts) console.log('getAlerts():', settings.url);
			}
		}).done(function(data, status, xhr) {
			if (debugAlerts) console.log('getAlerts().done()', data);
			if (data && data.hasOwnProperty('alerts') && Array.isArray(data.alerts) && data.alerts.length > 0) {
				if (debugAlerts) console.log('getAlerts().alerts:', data.alerts);
				var now = new Date();
				var activeAlert = null;
				var activeAlerts = [];
				$.each(data.alerts, function(i, alert) {
					if (alert && alert.hasOwnProperty('alertStartDate')) {
						var cookieName = 'alert-' + alert.id;
						var alertCookie = $.cookie(cookieName);
						var alertExpired = false;
						if (!alertCookie || '1' != alertCookie) {
							var startDateArray = alert.alertStartDate.split(/[- :]/);
							var alertStartDate = new Date(startDateArray[0], startDateArray[1]-1, startDateArray[2], startDateArray[3], startDateArray[4], startDateArray[5].substring(0,2));
							if (debugAlerts) console.log('getAlerts(' + alert.id + ').alertStartDate:', alertStartDate.toString());
							if (alert.hasOwnProperty('alertExpireDate') && alert.alertExpireDate != "") {
								var expireDateArray = alert.alertExpireDate.split(/[- :]/);
								var alertExpireDate = new Date(expireDateArray[0], expireDateArray[1]-1, expireDateArray[2], expireDateArray[3], expireDateArray[4], expireDateArray[5].substring(0,2));
								if (debugAlerts) console.log('getAlerts(' + alert.id + ').alertExpireDate:', alertExpireDate.toString());
								if (typeof alertExpireDate.getMonth === 'function' && alertExpireDate <= now) {
									alertExpired = true;
									if (debugAlerts) console.log('getAlerts(' + alert.id + ').expired:', alertExpireDate.toString());
								}
							}
							if (debugAlerts) console.log('getAlerts(' + alert.id + ').alertExpired:', alertExpired);
							if (alertExpired === false && typeof alertStartDate.getMonth === 'function' && alertStartDate <= now) {
								alert.startDateObj = alertStartDate;
								activeAlerts.push(alert);
							} else {
								if (debugAlerts) console.log('getAlerts(' + alert.id + '):notActive', alertStartDate.toString());
							}
						} else {
							if (debugAlerts) console.log('getAlerts(' + alert.id + ').alertCookie exists:', cookieName);
						}
					}
				});
				if (debugAlerts) console.log('getAlerts().activeAlerts:', activeAlerts);
				if (activeAlerts.length > 0) {
					activeAlerts.sort(function(a,b){
						return b.startDateObj - a.startDateObj;
					});
					activeAlert = activeAlerts[0];
					if (debugAlerts) console.log('getAlerts().activeAlert:', activeAlert);
					if (activeAlert && activeAlert.hasOwnProperty('alertText') && activeAlert.alertText != '') {
						var alertHtml = '<div class="alert alert-dismissable alert-' + activeAlert.alertTheme + '" role="alert"><div class="container"><div class="alert-body"><div class="mr-3"><span class="fas fa-exclamation-triangle"></span></div>';
						alertHtml += '<div>' + activeAlert.alertText;
						if (activeAlert.alertLink && activeAlert.alertLink != '' && activeAlert.alertLinkText && activeAlert.alertLinkText != '') {
							var linkUrlElem = document.createElement('a');
							linkUrlElem.setAttribute('href', activeAlert.alertLink);
							var linkTarget = (linkUrlElem.hostname == location.hostname) ? '_self' : '_blank';
							alertHtml += '<a href="' + activeAlert.alertLink +'" class="more" target="' + linkTarget + '">' + activeAlert.alertLinkText + '</a>';
						}
						alertHtml += '</div></div></div><a href="#" class="dismiss" data-dismiss="alert" aria-label="Close" tabindex="0"><span class="fal fa-times"></span></a></div>';
						$alert = $(alertHtml);
						$alert.css({
							position: 'absolute',
							top: '-900px',
							opacity: '0.5'
						}).on('closed.bs.alert', function(e) {
							if (debugAlerts) console.log('getAlerts().closed():', activeAlert.id);
							var cookieName = 'alert-' + activeAlert.id;
							$.cookie(cookieName, 1, { path: '/' });
							setBodyPadding();
						});
						$alert.appendTo('#hd');
						setTimeout(function() {
							var alertHeight = $alert.outerHeight();
							$alert.css({
								position: 'static',
								top: 'auto',
								height: 0
							});
							$alert.animate({height: alertHeight, opacity: '1.0'}, 200, function() {
								$alert.css('height', 'auto');
								setBodyPadding();
							});
						}, 200);
					} else {
						if (debugAlerts) console.warn('getAlerts(): no active alerts');
					}
				} else {
					if (debugAlerts) console.warn('getAlerts(): no active alerts');
				}
			} else {
				if (debugAlerts) console.error('getAlerts(): no content');
			}
		}).fail(function(xhr, status, err) {
			if (debugAlerts) console.error('getAlerts():', err);
			setBodyPadding();
		});
	}
	function setBodyPadding() {
		var utilityBarHeight = 0
		if ($('#utility-bar').is(':visible')) {
			utilityBarHeight = Number($('#utility-bar').outerHeight());
		}
		var navigationHeight = Number($('#navigation').outerHeight());
		var alertHeight = 0;
		if ($('#hd .alert').length > 0) {
			alertHeight = Number($('#hd .alert').first().outerHeight());
		}
		var headerHeight = Math.floor(utilityBarHeight + navigationHeight + alertHeight);
		//console.log('setBodyPadding:', headerHeight);
		$('body').css('padding-top', headerHeight + 'px');
	}
})(jQuery);
function resizeVideo(video, playerRatio) {
	//console.log('resizeVideo:', playerRatio);
	if (video) {
		var wrapperWidth = jQuery(video).parent().width();
		var wrapperHeight = jQuery(video).parent().height();
		var viewportRatio = wrapperHeight / wrapperWidth;
		jQuery(video).width(wrapperWidth);
		//console.log("viewportRatio:", viewportRatio, "playerRatio:", playerRatio);
		if (viewportRatio > playerRatio) {
			jQuery(video).width(wrapperHeight * (1 / playerRatio));
			jQuery(video).height(wrapperHeight);
		} else {
			jQuery(video).width(wrapperWidth);
			jQuery(video).height(wrapperWidth * playerRatio);
		}
		if (jQuery(window).width() < jQuery(video).width()) {
			var adjust = (jQuery(video).width() / 2) - (jQuery(window).width() / 2);
			jQuery(video).css('left', adjust * -1);
		} else {
			jQuery(video).css('left', 0);
		}
	}
}
function getYouTubeVideoId(url){
	//var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	var regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/
	var match = url.match(regExp);
	if (match && match[2].length == 11) {
		return match[2];
	} else {
		return null;
	}
}
