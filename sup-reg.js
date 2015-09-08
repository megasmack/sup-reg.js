/*
 * sup-reg.js v1.0.1
 * https://github.com/gsmke/sup-reg.js
 */

;(function ($) {
    'use strict';

    $(document).ready(function () {
        $('body :not(script,sup)').contents().filter(function () {
            return this.nodeType === 3;
        }).replaceWith(function () {
            return this.nodeValue.replace(/[®]/g, '<sup>$&</sup>');
        });
    });

})(jQuery);
