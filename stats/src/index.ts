import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

// import { CsvFileReader } from './Inheritance/CsvFileReader';
// import { MatchReader } from './Inheritance/MatchReader';

// Inheritance...
// const reader = new MatchReader('football.csv');
// reader.read();

// Interfaces...
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Starter...bad code!

console.log(`Man United won ${ manUnitedWins } games`);
