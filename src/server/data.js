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
    { id:'doura10', name: 'Doura 10', snippet: 'Destroy', img:'doura10_01.jpg'},
    { id:'nanoray900', name: 'Nanoray 900', snippet: 'Destroy Better', img:'nanoray900_01.jpg'},
    { id:'arcsaberZ-Slash', name: 'Arcsaber Z-Slash', snippet: 'God sword', img:'arcsaberZslash_01.jpg'}
    
  ];
}
