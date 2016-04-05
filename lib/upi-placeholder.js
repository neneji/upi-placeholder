/*
 * upi-placeholder
 * https://github.com/neneji/upi-placeholder
 *
 * Copyright (c) 2016 neneji
 * Licensed under the MIT license.
 */

(function (window, document, undefined) {

    'use strict';
    var FONT_SCALE = 0.6,
        DEFAULT_COLORS = [
            ' #ff9999',
            '#b3d9ff',
            '#ccb3ff',
            '#ccff99',
            '#ffe0b3',
            '#b3b3ff',
            '#ff99cc'
        ];

    var getRandomColor = function (colorArray) {
        colorArray = colorArray || DEFAULT_COLORS;

        return colorArray[Math.floor(Math.random()*colorArray.length)];
    };

    var upi = {
        version: '0.1.0',
        defaults: {
            size: 100,
            fontFamily: 'sans-serif',
            shape: 'circle',
            fontColor: '#ffffff',
            backgroundColor: (function(){return getRandomColor();})()
        }
    };


    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = upi;

    } else if (typeof define === 'function' && define.amd) {
        define(upi);
    }

    if (typeof window !== 'undefined') {
        window.upi = upi;
    }

    var cloneObject = function (obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        var temp = obj.constructor(); // give temp the original obj's constructor
        for (var key in obj) {
            temp[key] = cloneObject(obj[key]);
        }

        return temp;
    };

    var getGoodOptions = function (options) {
        if (typeof  options === 'undefined') {
            return cloneObject(upi.defaults);
        }


        for (var i in upi.defaults) {
            if (typeof options[i] === 'undefined') {
                options[i] = upi.defaults[i];
            }
        }

        return options;
    };

    var renderImage = function (letters, options) {
        options = getGoodOptions(options);


        var canvas = document.createElement('canvas');
        canvas.width = options.size;
        canvas.height = options.size;
        var ctx = canvas.getContext('2d');

        var fontSize = options.size * FONT_SCALE;

        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, options.size, options.size);

        ctx.fillStyle = options.fontColor;
        ctx.font = fontSize + 'px ' + options.fontFamily;
        ctx.textAlign = "center";
        ctx.fillText(letters, options.size / 2, (options.size + fontSize * 0.7 /* 30% text height margin */) / 2);

        return canvas.toDataURL();
    };

    var getUserNameLetters = function (userName) {
        var parts = userName.split(' ');
        switch (parts.length) {
            case 1:
                return userName.slice(0, 2);
            case 2:
                return parts[0][0] + parts[1][0];
            default:
                return parts[0][0] + parts[1][0];
        }
    };

    var generateProfileImage = function (userName, options) {
        return renderImage(getUserNameLetters((userName).toUpperCase()), options);
    };

    upi.generateProfileImage = generateProfileImage;

}(window, document));
