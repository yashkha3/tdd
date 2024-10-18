function calculate(input: string): number {
    const numbers = input.replace(/\s+/g, ' ').split(',');
    return numbers.reduce((acc, num) => acc + (+num), 0);
  }

export default calculate;