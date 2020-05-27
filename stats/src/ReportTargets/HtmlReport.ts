import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
        <!--Generated from HtmlReport.print()-->
        <div>
            <h1>Analysis Report</h1>
            <div>${ report }</div>
        </div>
        `;

        fs.writeFileSync('report.html', html);
    }
}
