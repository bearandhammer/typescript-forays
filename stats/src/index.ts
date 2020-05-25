import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    // String representing content
    encoding: 'utf-8'
})
.split('\n')
//.map(match => match.split(','));
.map((match: string): string[] => {
    return match.split(',');
});

enum MatchResult {
    HomeWin = 'H',
    AwayWin ='A',
    Draw = 'D'
};

// Starter...bad code!
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${ manUnitedWins } games`);
