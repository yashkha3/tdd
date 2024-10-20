function calculate(input: string): number {
    const numbers = input.split(/\n|\,/);
    let total = 0

    for(let num of numbers){
      const number = +num

      if(isNaN(number)) continue
      if(number < 0) throw new Error('negative numbers not allowed')
      
        total += number
    }

    return total
  }

export default calculate;