function beep() {
  process.stdout.write('\x07');
}

function scheduledBeep(delay) {
  delay = Number(delay);   // converting string to number
  if (!isNaN(delay) && delay > 0) {
    setTimeout(beep, delay * 1000);
  } 
}
var originalNumbers = process.argv.slice(2);

for (const num of originalNumbers) {
  scheduledBeep(num);
}

