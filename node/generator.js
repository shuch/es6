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
  const f1 = yield readFile('../generator_for.html');
  const f2 = yield readFile('../generator_next.html');
  console.log(f1.toString());
  console.log(f2.toString());
}

const g = gen();

g.next().value.then(function(data) {
  g.next(data).value.then(function(data) {
    g.next(data);
  })
});