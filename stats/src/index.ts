// Imports that assist with collation/loading of data
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
// Imports that assist with reporting (report generation, etc.)
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';

// Load match data (from CSV)
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Outputing to the console for the WinsAnalysis-based summaries
const consoleReportOutput = new ConsoleReport();

// Man United - print 'wins'
let summary = new Summary(
    new WinsAnalysis('Man United'),
    consoleReportOutput
);
summary.compileReport(matchReader.matches);

// Huddersfield - print 'wins'
summary = new Summary(
    new WinsAnalysis('Huddersfield'),
    consoleReportOutput
);
summary.compileReport(matchReader.matches);
