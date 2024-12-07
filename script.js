// Diccionario con los valores de los números romanos
const romanToInt = (roman) => {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Recorremos el número romano desde el final al inicio
    for (let i = roman.length - 1; i >= 0; i--) {
        const current = romanValues[roman[i].toUpperCase()];

        if (!current) {
            return "Número romano no válido"; // Validación para caracteres no válidos
        }

        // Si el valor actual es menor que el anterior, se resta; de lo contrario, se suma
        if (current < prevValue) {
            total -= current;
        } else {
            total += current;
        }

        prevValue = current;
    }

    return total;
};

// Capturamos el formulario y mostramos el resultado
document.getElementById('roman-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const romanInput = document.getElementById('roman-input').value.trim();
    const result = romanToInt(romanInput);

    document.getElementById('result').textContent = 
        typeof result === "number" ? `El número entero es: ${result}` : result;
});
