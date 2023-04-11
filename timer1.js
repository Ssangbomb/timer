let timeSet = process.argv.slice(2);

const timer = (times) => {
  for(let sec of times) {
    if(sec < 0) {
      return console.log("setTimeout with a negative")
    } else if (isNaN(sec)){
      return console.log("setTimeout with a non-number")
    }
    let numTime = Number(sec);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numTime * 1000);
  }
}

timer(timeSet);