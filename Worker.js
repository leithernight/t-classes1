class Worker {
    name
    surname
    rate
    days

    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary() {
        return this.rate * this.days
    }

    getFullName() {
        return this.name + ' ' + this.surname
    }
}

let a = new Worker('John', 'Brown', 500, 17)

document.querySelector('.worker').innerHTML = 'worker: full name = ' + a.getFullName() + ', rate = ' + a.rate + ', days = ' + a.days + ', salary = ' + a.getSalary();