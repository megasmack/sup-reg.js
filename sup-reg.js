/*
 * sup-reg.js v1.0.0
 * https://github.com/gsmke/sup-reg.js
 */

;(function ($) {
    'use strict';

    $('body :not(script,sup)').contents().filter(function () {
        return this.nodeType === 3;
    }).replaceWith(function () {
        return this.nodeValue.replace(/[®]/g, '<sup>$&</sup>');
    });

})(jQuery);
