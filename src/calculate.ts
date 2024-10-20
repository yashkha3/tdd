function calculate(input: string): number {
    const numbers = input.split(/\n|\,/);
    let total = 0

    for(let num of numbers){
      if(+num < 0) throw new Error('negative numbers not allowed')
      total += +num
    }

    return total
  }

export default calculate;