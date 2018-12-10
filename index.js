const raw = require('./data.json');

const tasks = raw.filter(row => row[0]=="tasks")[0][1];

var data = {};

tasks.forEach(row => {
  data[row.name] = row.description;
});

console.log(data);