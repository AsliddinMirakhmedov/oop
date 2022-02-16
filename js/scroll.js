class Scroll {
    constructor(el) {
        this.nav = document.querySelector(el.nav)
        this.top = el.top
        this.unit = el.unit == 'px' ? 'px' : '%'
        this.nav.style = `position: fixed; top: ${this.scrollUnit()}px`
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', ()=> this.scroll())
    }

    scroll() {
        let position =  this.scrollUnit()
        if (position - window.scrollY > 0) {
            this.nav.style.top = `${position - window.scrollY}px`
        } 
        else {
            this.nav.style.top = `0px`
        }
    }

    scrollUnit() {
        if (this.unit == `px`) {
            return this.top > 0 ? this.top : 0
        } else if (this.unit == '%') {
            return (window.innerHeight / 100) * this.top - this.nav.clientHeight
        }
    }
}

new Scroll({
    nav: '.header__nav',
    top: 100,
    unit: '%'
})