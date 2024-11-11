import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { CalcMachine } from '../src/calculator';
import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(__dirname, '../data');
const sumFilePath = path.join(dataDir, 'numbers.txt');
const outputFilePath = path.join(dataDir, 'output.txt');

describe('CalcMachine', () => {
    const calc = new CalcMachine();

    beforeAll(() => {
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }
    });

    afterAll(() => {
        if (fs.existsSync(sumFilePath)) fs.unlinkSync(sumFilePath);
        if (fs.existsSync(outputFilePath)) fs.unlinkSync(outputFilePath);
    });

    it('should correctly add numbers', () => {
        expect(calc.sum(2, 3, 4)).toBe(9);
    });

    it('should correctly subtract two numbers', () => {
        expect(calc.subduct(10, 4)).toBe(6);
    });

    it('should correctly multiply numbers', () => {
        expect(calc.multiply(2, 3, 4)).toBe(24);
    });

    it('should correctly divide two numbers', () => {
        expect(calc.divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
    });

    it('should sum numbers from a file', async () => {
        fs.writeFileSync(sumFilePath, '1\n2\n3\n4\n5', 'utf8');
        const result = await calc.sumFromFile(sumFilePath);
        expect(result).toBe(15);
    });

    it('should write result to file', () => {
        CalcMachine.writeToFile(outputFilePath, 42);
        const content = fs.readFileSync(outputFilePath, 'utf8');
        expect(content).toBe("Result is: 42");
    });
});
