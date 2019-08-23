const fs = require('fs');
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error);
      resolve(data);  
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/f1');
  const f2 = yield readFile('/etc/f2');
  console.log(f1.toString());
  console.log(f2.toString());
}