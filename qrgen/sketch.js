let qrData;

function setup() {
  createCanvas(400, 400);
  qrData = qr.encodeQR('https://www.google.com/');
  console.log(qrData);
}

function draw() {
  background(220);

  textSize(50);

  let gap = 10;

  fill(50, 20, 40);

  for (let y = 0; y < qrData.length; y++) {
    let row = qrData[y];
    for (let x = 0; x < row.length; x++) {
      let cell = row[x];

      if (cell) {
        circle(x * gap, y * gap, gap)
      }
    }
  }
}