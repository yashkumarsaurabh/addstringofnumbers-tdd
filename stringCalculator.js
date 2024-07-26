class StringCalculator {
    add(stringOfNumbers) {
      if (!stringOfNumbers) return 0;

    let delimiter = /,|\n/;
    if (stringOfNumbers.startsWith("//")) {
      const parts = stringOfNumbers.split('\n');
      delimiter = new RegExp(parts[0][2]);
      stringOfNumbers = parts.slice(1).join('\n');
    }

    const numbers = stringOfNumbers.split(delimiter).map(Number);

    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    return numbers.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = new StringCalculator();
