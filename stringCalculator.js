class StringCalculator {
    add(stringOfNumbers) {
      if (!stringOfNumbers) return 0;

    let delimiter = /,/;
    const numbers = stringOfNumbers.split(delimiter).map(Number);

    return numbers.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = new StringCalculator();
