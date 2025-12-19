setInterval(function () {
    alert("Please, use me...");
}, 30000);

const calculate = () => {
    const val1 = document.getElementById("num1").value;
    const val2 = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;

    if (!/^\d+$/.test(val1) || !/^\d+$/.test(val2)) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    const num1 = parseInt(val1, 10);
    const num2 = parseInt(val2, 10);
    let result;

    if ((operator === "/" || operator === "%") && num2 === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

      switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
        default: return;
    }

    alert(result);
    console.log(result);
};