export abstract class Employee{
    public salary: number;
    public tasks: string[];

    constructor(public name: string, public age: number){
        this.salary = 0;
        this.tasks = [];
    }

    protected getSalary(): number {
        return this.salary;
    }

    public work(): void {   
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(`${this.name} ${currentTask}`);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
}