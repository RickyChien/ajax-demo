
/*
 * GET user information.
 */

var users = [
  { firstName: 'Mark', lastName: 'Otto', ID: '12000087' },
  { firstName: 'Jacob', lastName: 'Thornton', ID: '12014044' },
  { firstName: 'Larry', lastName: 'Bird', ID: '18407887' },
  { firstName: 'Ricky', lastName: 'Chien', ID: '11458704' },
  { firstName: 'Lisa', lastName: 'Toyota', ID: '22001104' },
  { firstName: 'Derrick', lastName: 'Rose', ID: '10105051' },
  { firstName: 'Joe', lastName: 'Johnson', ID: '62400883' },
  { firstName: 'Ray', lastName: 'Bower', ID: '40320883' },
  { firstName: 'Jason', lastName: 'Mraz', ID: '42406451' },
  { firstName: 'Sakuo', lastName: 'Mulias', ID: '24086154' },
  { firstName: 'Peter', lastName: 'Chen', ID: '05688830' },
  { firstName: 'Octorber', lastName: 'Rechason', ID: '19445650' },
  { firstName: 'Amber', lastName: 'Len', ID: '12064843' },
  { firstName: 'Law', lastName: 'Wang', ID: '77485513' },
  { firstName: 'Frank', lastName: 'Wang', ID: '03648981' },
  { firstName: 'May', lastName: 'Day', ID: '35886451' },
  { firstName: 'Bill', lastName: 'Gates', ID: '98115436' },
  { firstName: 'Steve', lastName: 'Jobs', ID: '01586451' },
  { firstName: 'Lily', lastName: 'Lenka', ID: '62410823' },
  { firstName: 'Robot', lastName: 'Williams', ID: '44653180' },
  { firstName: 'Luout', lastName: 'Dan', ID: '98483150' },
  { firstName: 'Ting', lastName: 'Amumu', ID: '62400883' },
  { firstName: 'Johann', lastName: 'Sebastain', ID: '10064843' },
  { firstName: 'Frederick', lastName: 'Chopin', ID: '28001104' },
  { firstName: 'Hector', lastName: 'Berlioz', ID: '08350013' },
  { firstName: 'George', lastName: 'Frederic', ID: '01560089' },
  { firstName: 'Antonio', lastName: 'Vivaldi', ID: '19045650' }
];

exports.list = function(begin, end) {
  return users.slice(begin, end);
};

exports.count = function(limit) {
  return Math.floor(users.length / limit) + 1;
}
