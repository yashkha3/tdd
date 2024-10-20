function calculate(input: string): number {
    const numbers = input.split(/\n|\,/);
    return numbers.reduce((acc, num) => acc + (+num.trim()), 0);
  }

export default calculate;