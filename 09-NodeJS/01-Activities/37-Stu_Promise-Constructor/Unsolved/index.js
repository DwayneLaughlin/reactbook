function waitFor(seconds){
  return new Promise((resolve, reject) =>{
    if (isNaN(seconds)) {
      return reject("please put in a number");
  }
    setTimeout(() => {
      resolve ("touchdown")
    }, seconds * 1000)
  });
}

waitFor(pp).then(msg => {
  console.log(msg);
}).
catch(err => {
  console.log(err);
})