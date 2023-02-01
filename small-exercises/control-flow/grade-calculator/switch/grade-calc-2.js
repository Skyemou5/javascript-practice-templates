const score = parseInt(prompt('Enter your test score:'), 10);

switch (true) {
  case score >= 90:
    console.log('A');
    break;
  case score >= 80:
    console.log('B');
    break;
  case score >= 70:
    console.log('C');
    break;
  case score >= 60:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}
