// Import that assists with collation/loading of data
import { MatchReader } from './MatchReader';
// Import that assists with reporting (report generation, etc.)
import { Summary } from './Summary';

// Load match data (from CSV)
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Define constants for the team names that we want to report on
const manUnited = 'Man United',
    huddersfield = 'Huddersfield';

// Man United - print 'wins'
let summary = Summary.winsAnalsisWithConsoleReport(manUnited);
summary.compileReport(matchReader.matches);

// Huddersfield - print 'wins'
summary = Summary.winsAnalsisWithConsoleReport(huddersfield);
summary.compileReport(matchReader.matches);

// Man United - wins to 'report.html'
summary = Summary.winsAnalysisWithHtmlReport(manUnited);
summary.compileReport(matchReader.matches);
