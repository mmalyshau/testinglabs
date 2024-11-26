import * as fs from 'fs';

export class CalcMachine {
    sum(...nums: number[]): number {
        return nums.reduce((acc, curr) => acc + curr, 0);
    }

    subduct(a: number, b: number): number {
        return a - b;
    }

    multiply(...nums: number[]): number {
        return nums.reduce((acc, curr) => acc * curr, 1);
    }

    divide(a: number, b: number): number {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }

    async sumFromFile(filePath: string): Promise<number> {
        const data = fs.readFileSync(filePath, 'utf8');
        const numbers = data.split('\n').map(line => parseFloat(line)).filter(num => !isNaN(num));
        return this.sum(...numbers);
    }

    static writeToFile(filePath: string, result: any): void {
        fs.writeFileSync(filePath, "Result is: " + result, 'utf8');
    }
}
