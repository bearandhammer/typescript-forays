import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

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
        });
    }
}
