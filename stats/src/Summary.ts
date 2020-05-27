import { MatchData } from './MatchData';
import { HtmlReport } from './ReportTargets/HtmlReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { ConsoleReport } from './ReportTargets/ConsoleReport';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport()
        );
    }

    static winsAnalsisWithConsoleReport(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new ConsoleReport()
        );
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    }

    compileReport(matches: MatchData[]): void {
        const generatedReport = this.analyzer.run(matches);
        this.outputTarget.print(generatedReport);
    }
}
