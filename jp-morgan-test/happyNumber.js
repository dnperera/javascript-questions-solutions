function happynumber(numbers) {
  var output = 0;
  for (let i = 0; numbers.length > i; i++) {
    output += parseInt(numbers[i]) * parseInt(numbers[i]);
  }

  if (output === 1) {
    return "1";
  } else {
    console.log(output);
    return happynumber(output.toString());
  }
}
console.log(happynumber("91"));
