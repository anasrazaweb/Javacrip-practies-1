

function CountCheak(word, letter) {
    word = word.toLowerCase();
    letter = letter.toLowerCase();

    tottlecountis = word.split("").reduce((accum, curentcarecter) => {
        if (curentcarecter === letter) {
            accum++;
        }
        return accum
        
    }, 0)
    return tottlecountis
}









console.log(CountCheak("inspiration", "I"))