class Boss extends Worker {
    workers

    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers
    }

    getSalary() {
        return this.rate * this.days * this.workers
    }
}

let b = new Boss('Ben', 'Ford', 1000, 15, 20)

document.querySelector('.boss').innerHTML = 'boss: full name = ' + b.getFullName() + ', rate = ' + b.rate + ', days = ' + b.days + ', salary = ' + b.getSalary();