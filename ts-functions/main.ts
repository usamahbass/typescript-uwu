function addEquals(num1: number, num2: number = 9): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

addEquals(3);
addEquals(3, 9);
