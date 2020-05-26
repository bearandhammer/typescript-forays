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
let manUnitedWins = 0;
for (let match of matchReader.matches) { // reader.data
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${ manUnitedWins } games`);
