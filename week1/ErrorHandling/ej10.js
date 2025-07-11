function divide_Numbers(x, y) {

  try {
    // Check if both x and y are numbers
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
    // Check if y is zero
    if (y === 0) {
      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
    const result = x / y;
    console.log('Result:', result);

  } catch (error) {
    if (error instanceof TypeError) {
      console.log('TypeError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  } finally {
    console.log('Cleanup Code.');
  }
}

divide_Numbers(20, '4'); // Invalid divisor
divide_Numbers(20, 4);  //  Valid division
divide_Numbers(20, 0); // Division by zero