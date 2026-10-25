const words = [
  'spray',
  'limit',
  'limit',
  'elite',
  'exuberant',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter(word => word.length > 6);

console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2010 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
];

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
