/*
 * jquery.socialshareprivacy.js | 2 Klicks fuer mehr Datenschutz
 *
 * http://www.heise.de/extras/socialshareprivacy/
 * http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html
 *
 * Copyright (c) 2011 Hilko Holweg, Sebastian Hilbig, Nicolas Heiringhoff, Juergen Schmidt,
 * Heise Zeitschriften Verlag GmbH & Co. KG, http://www.heise.de
 *
 * Copiright (c) 2012 Mathias Panzenböck
 *
 * is released under the MIT License http://www.opensource.org/licenses/mit-license.php
 *
 * Spread the word, link to us if you can.
 */

(function ($, undefined) {
	"use strict";

	$.fn.socialSharePrivacy.settings.services.twitter = {
		'status'            : 'on', 
		'button_class'      : 'tweet',
		'dummy_line_img'    : 'socialshareprivacy/images/dummy_twitter.png',
		'dummy_box_img'     : 'socialshareprivacy/images/dummy_box_twitter.png',
		'dummy_alt'         : '"Tweet this"-Dummy',
		'txt_info'          : '2 clicks for more privacy: The Tweet this button will be enabled when you click here. Activating the button already sends data to Twitter &ndash; see <em>i</em>.',
		'txt_off'           : 'not connceted to Twitter',
		'txt_on'            : 'connceted to Twitter',
		'perma_option'      : 'on',
		'display_name'      : 'Twitter',
		'referrer_track'    : '',
		'tweet_text'        : $.fn.socialSharePrivacy.getTitle,
		'button'            : function (options, uri, settings) {
			var text = typeof(options.tweet_text) === 'function' ?
				options.tweet_text.call(this, options, uri, settings) :
				String(options.tweet_text||'');
			// 120 is the max character count left after twitters automatic
			// url shortening with t.co
			text = $.fn.socialSharePrivacy.abbreviateText(text, 120);
			var layout, w, h;
			if (settings.layout === 'line') {
				w = 120;
				h = 20;
				layout = 'horizontal';
			}
			else {
				w = 62;
				h = 62;
				layout = 'vertical';
			}

			return $('<iframe allowtransparency="true" frameborder="0" scrolling="no"></iframe>').css({
					width   : w+'px',
					height  : h+'px',
					overflow: 'hidden',
					border  : 'none'
				}).attr(
				'src', 'http://platform.twitter.com/widgets/tweet_button.html?'+$.param({
					url     : uri + options.referrer_track,
					counturl: uri,
					text    : text,
					count   : layout,
					lang    : options.language
				}).replace(/\+/g,'%20'));
		}
	};
})(jQuery);
