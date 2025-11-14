const denseRanking = (s, gitScores) => {
    const result = [];
    const uniqueScores = [...new Set(s)];
    for (const s of gitScores) {
        let i = uniqueScores.length - 1;
        while (i >= 0 && s >= uniqueScores[i]) {
            i--;
        }
        result.push(i + 2);
    }
    return result.join(' ');
};
const gits = [5, 25, 50, 120];
const skor = [100, 100, 50, 40, 40, 20, 10];

console.log(denseRanking(skor, gits));