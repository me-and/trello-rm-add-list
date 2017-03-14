// ==UserScript==
// @name         Remove Trello Add List
// @namespace    me_and
// @version      1.0.0
// @description  Remove Trello's Add List option
// @author       Adam Dinwoodie
// @copyright    2017, Adam Dinwoodie
// @licence      MIT
// @match        https://trello.com/b/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var element = document.querySelector('.js-add-list');
    element.parentNode.removeChild(element);
})();
