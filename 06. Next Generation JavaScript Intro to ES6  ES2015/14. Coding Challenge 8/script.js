/*
>>> 14. Coding Challenge 8
*/

class Element {
  constructor(name, buildyear) {
    this.name = name;
    this.buildyear = buildyear;
  }
}

class Park extends Element {
  constructor(name, buildyear, area, numberTrees) {
    super(name, buildyear);
    this.area = area;
    this.numberTrees = numberTrees;
  }

  treeDensity() {
    const density = this.numberTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}

class Street extends Element {
  constructor(name, buildyear, length, size = 3) {
    super(name, buildyear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildyear}, is a ${classification.get(this.size)} street`);
  }
}


const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949),
];

const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2010, 2.7),
  new Street('Sunset Street', 1888, 2.5, 5),
];


function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('-----------Parks Report-----------');
  // Density
  p.forEach(el => el.treeDensity());

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildyear);
  const [totalAge, averageAge] = calc(ages);
  console.log(`Our ${p.length} perks have an average of ${averageAge} years.`);


  // which park has more than 1000 trees
  const i = p.map(el => el.numberTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {
  console.log('-----------Street Report-----------');

  // Toal and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

  // Classify sizes

  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);