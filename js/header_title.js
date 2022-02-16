class Escape {
    constructor(obj) {
        this.place = document.querySelector(obj.place);
        this.zone = this.place.closest(obj.headerZone)
        this.minusZone = this.zone.querySelector(obj.headerNav);
        this.mouse(this.place)
        window.addEventListener('resize', ()=> this.mouse(this.place))
    }
    random(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min)
    }
    mouse(btn) {
        let header__nav = document.querySelector('.header__nav');
        
        let height = this.zone.clientHeight - this.minusZone.clientHeight - this.place.clientHeight
        console.log(height);
        let width = this.zone.clientWidth - this.place.clientWidth
        console.log(width);

        btn.addEventListener('mouseover', () => {
            btn.style =
                `
                margin-top:${this.random(50, height)}px;
                margin-left:${this.random(150, width)}px;
                transition: 0.5s;
                `
        })
    }
}

new Escape({
    place: '.header__content',
    headerZone: '.header',
    headerNav: '.header__nav'
})

// console.log(window.innerWidth);