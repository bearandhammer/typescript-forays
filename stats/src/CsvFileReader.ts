import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [ Date, string, string, number, number, MatchResult, string ];

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public fileName: string) {
    }

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            // String representing content
            encoding: 'utf-8'
        })
        .split('\n')
        .map((match: string): string[] => {
            return match.split(',');
        })
        // Convert to correct types
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,     // 'H', 'A', 'D' (type assertion),
                row[6]
            ];
        });
    }
}
