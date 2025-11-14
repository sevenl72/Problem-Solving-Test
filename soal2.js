const denseRanking = (s, gitScores) => {
    const result = [];
    const unique = [...new Set(s)]; // hilangkan duplikat skor
    for (const score of gitScores) {
        let players = unique.length - 1;
        while (players >= 0 && score >= unique[players]) {
            players--;
        }
        result.push(players + 2);
    }
    return result.join(' ');
};
const gits = [5, 25, 50, 120];
const skor = [100, 100, 50, 40, 40, 20, 10];

console.log(denseRanking(skor, gits));