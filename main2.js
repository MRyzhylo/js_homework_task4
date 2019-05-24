'use strict'

function blockPosition(nameId) {
    this.container = document.getElementById(nameId);
    this.btnUp = document.createElement('button');
    this.btnUp.innerHTML = 'Up';
    this.container.appendChild(this.btnUp);
    this.btnDown = document.createElement('button');
    this.btnDown.innerHTML = 'Down';
    this.container.appendChild(this.btnDown);
    this.btnLeft = document.createElement('button');
    this.btnLeft.innerHTML = 'Left';
    this.container.appendChild(this.btnLeft);
    this.btnRight = document.createElement('button');
    this.btnRight.innerHTML = 'Right';
    this.container.appendChild(this.btnRight);


    this.scrollUp = function () {
        this.container.alignItems = '';
        this.container.className = 'scrollUp';
    }.bind(this)
    this.btnUp.onclick = this.scrollUp;

    this.scrollDown = function () {
        this.container.style.top = '';
        this.container.alignItems = '';
        this.container.className = 'scrollDown';
    }.bind(this)
    this.btnDown.onclick = this.scrollDown;

    this.scrollLeft = function () {
        this.container.justifyContent = '';
        this.container.className = 'scrollLeft';
    }.bind(this)
    this.btnLeft.onclick = this.scrollLeft;

    this.scrollRigth = function () {
        this.container.style.left = '';
        this.container.justifyContent = '';
        this.container.className = 'scrollRight';
    }.bind(this)
    this.btnRight.onclick = this.scrollRigth;

}

new blockPosition('main_block');
