function drawL(event) {
  const size = Number(event.target.value);
  const outputElement = document.getElementById("output");

  let output = "";
  for (i = 0; i < size - 1; i++) {
    output += "L<br>";
  }
  for (i = 0; i < size; i++) {
    output += "L";
  }
  outputElement.innerHTML = output;
}
document.getElementById("size");
document.addEventListener("input", drawL);

function drawC(event) {
  const size1 = Number(event.target.value);
  const outputElement1 = document.getElementById("output1");

  if (size1 < 3) {
    outputElement1.innerHTML = "C letter size must be at least 3";
    return;
  }

  let output1 = "";
  for (i = 0; i < size1; i++) {
    output1 += "C";
  }
  output1 += "<br>";
  for (i = 0; i < size1 - 2; i++) {
    output1 += "C<br>";
  }
  for (i = 0; i < size1; i++) {
    output1 += "C";
  }
  outputElement1.innerHTML = output1;
}

document.getElementById("size1");
document.addEventListener("input", drawC);
