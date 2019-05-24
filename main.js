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
        this.container.style.top = '0';
        this.container.alignItems = '';
    }.bind(this)
    
    this.scrollDown = function () {
        this.container.style.top = '';
        this.container.style.bottom = '0';
        this.container.alignItems = '';
    }.bind(this)
    
    this.scrollLeft = function () {
        this.container.style.left = '0';
        this.container.justifyContent = '';
    }.bind(this)
    
    this.scrollRigth = function () {
        this.container.style.left = '';
        this.container.style.right = '0';
        this.container.justifyContent = '';
    }.bind(this)
    
    this.init = function () {
        this.btnUp.onclick = this.scrollUp;
        this.btnDown.onclick = this.scrollDown;
        this.btnLeft.onclick = this.scrollLeft;
        this.btnRight.onclick = this.scrollRigth;
    }.bind(this)
    this.init();
}

new blockPosition('main_block');
