class Human {
    constructor(el) {
        this.name = el.name
        this.age = el.age
        this.job = el.job
        this.surname = el.surname
    }
    info() {
        return `My name is ${this.name}, I'm ${this.age} years old, my job is ${this.job}`
    }
}
// const Asliddin = new Human({
//     name: "Asliddin",
//     age: 12,
//     job: 'Clever boy'
// })
// const Abdulloh = new Human({
//     name: "Abdulloh",
//     age: 18,
//     job: 'betayin',
//     surname: "Rahmatjonov"
// })

class Man extends Human {
    constructor(el) {
        super(el)
        this.surname = el.surname
    }
}
class Woman extends Human {
    constructor(el) {
        super(el)
        this.surname = el.surname
        this.gender = el.gender
       
    }
}
new Woman({
    name: "Sevinch",
    age: 18,
    job: 'cook',
    surname: "Rahmatjonova",
    gender: 'famale'
})
new Man({
    name: "Abdulloh",
    age: 18,
    job: 'betayin',
    surname: "Rahmatjonov"
})
