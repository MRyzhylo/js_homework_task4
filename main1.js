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
    this.rect = this.container.getBoundingClientRect();
    this.rectUp = this.rect.top;
    this.rectLeft = this.rect.left;
    this.rectDown = (this.rect.top * 2) - 235;

    this.scrollUp = function () {
        this.container.alignItems = '';
        let rect = this.container.getBoundingClientRect();
        if (rect.top === 0) {
            return;
        } else {
            this.container.style.transform = `translate(0, -${this.rectUp}px)`;
        }
    }.bind(this)

    this.scrollDown = function () {
        this.container.alignItems = '';
        let rect = this.container.getBoundingClientRect();
        if (rect.top === 0) {
            this.container.style.transform = `translate(0, ${this.rectUp}px)`;
        } else {
            this.container.style.transform = `translate(0, ${this.rectUp}px)`;
        }
    }.bind(this)

    this.scrollLeft = function () {
        this.container.justifyContent = '';
        let rect = this.container.getBoundingClientRect();
        if (rect.left === 0) {
            return;
        } else {
            this.container.style.transform = `translate(-${this.rectLeft}px, 0)`;
        }
    }.bind(this)

    this.scrollRigth = function () {
        this.container.justifyContent = '';
        let rect = this.container.getBoundingClientRect();
        if (rect.left === 0) {
            this.container.style.transform = `translate(${this.rectLeft}px, 0)`;
        } else {
            this.container.style.transform = `translate(${this.rectLeft}px, 0)`;
        }
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
