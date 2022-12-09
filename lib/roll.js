export function roll(numSides, numDice, numRolls) {
    var results = []

    for(let i = 0; i < numRolls; i++) {
        var dice = 0;
        for(let j = 0; j < numDice; j++) {
            dice = dice + Math.floor(Math.random() * numSides) + 1;
        }
        results.push(dice)
    }
    return {
        "sides": numSides,
        "dice": numDice,
        "rolls": numRolls,
        "results": results
      };

}