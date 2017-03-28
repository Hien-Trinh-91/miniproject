module.exports = {
  people: getPeople(),
  racquet : getRacquet()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

function getRacquet() {
  return [
    { id:'doura10', name: 'Doura 10', snippet: 'Destroy', imgs:['doura10_01.jpg','doura10_02.jpg','doura10_03.jpg','doura10_04.jpg']},
    { id:'nanoray900', name: 'Nanoray 900', snippet: 'Destroy Better', imgs:['nanoray900_01.jpg','nanoray900_02.jpg','nanoray900_03.jpg','nanoray900_04.jpg']},
    { id:'arcsaberZ-Slash', name: 'Arcsaber Z-Slash', snippet: 'God sword', imgs:['arcsaberZslash_01.jpg','arcsaberZslash_02.jpg','arcsaberZslash_03.jpg','arcsaberZslash_04.jpg']}
    
  ];
}
