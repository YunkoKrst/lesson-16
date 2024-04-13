
'use strict'

function exploreMaze (mazeSize) {
    let currentPosition = 1; // Початкова позиція пошуковика
    let steps = 0; // Кількість кроків

    // Цикл while для руху вперед
    while (currentPosition <= mazeSize) {
        if (currentPosition !== 1 && currentPosition % 3) {
            console.log("Є перешкода (X)! Потрібно обійти.");
        } else {
            console.log("Пошуковик рухається вперед до позиції " + currentPosition);
        }
        currentPosition++; // Рухаємося вперед на один крок
        steps++; // Збільшуємо лічильник кроків
    }

    // Цикл do while для руху назад
    do {
        currentPosition--; // Рухаємося назад на один крок
        steps++; // Збільшуємо лічильник кроків
        console.log("Пошуковик рухається назад до позиції " + currentPosition);
    } while (currentPosition > 1);

    console.log("Пошуковик завершив рух зі зміною позицій " + steps + " разів.");
}

// Виклик функції
exploreMaze(15);