let count = document.getElementById("count");
let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset");
let currentSessionCount: HTMLElement | null = document.getElementById("currentSessionCount");
let highestCount: HTMLElement | null = document.getElementById("highestCount");
let totalSessionsCount = document.getElementById("totalSessionsCount");
let number = 0;
let highest = 0;
let totalSessions = 0;


increment?.addEventListener("click", () => {
    number++;
    if (count && currentSessionCount) {
        count.innerText = String(number);
        currentSessionCount.innerText = String(number);
        if (number > highest && highestCount) {
            highest = number;
            highestCount.innerText = String(highest);
        }
    }
});

decrement?.addEventListener("click", () => {
    if (number == 0) {
        return;
    }
    else {
        number--;
        if (count && currentSessionCount) {
            count.innerText = String(number);
            currentSessionCount.innerText = String(number);
        }
    }
});

reset?.addEventListener("click", () => {
    if (number > 0) {
        number = 0;
        totalSessions++;
    }
    total();
    if (count && currentSessionCount) {
        count.innerText = String(number);
        currentSessionCount.innerText = String(number);
    }
});

function total() {
    if (totalSessionsCount) {
        totalSessionsCount.innerText = String(totalSessions);
    }
}



