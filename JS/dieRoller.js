    function rollDice(max) {
        const rollResult = 1 + Math.floor(Math.random()*max);
        document.getElementById("rollResult").innerHTML = rollResult;
        return rollResult;
        }
