import fs from 'fs';

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) {
    }

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            // String representing content
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        // Convert to correct types
        .map(this.mapRow);
    }
}
