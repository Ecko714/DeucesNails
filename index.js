quotes = {
    "0": "Well-behaved women seldom make history - Laurel Thatcher Ulrich",
    "1": "I am not afraid of storms, for I am learning how to sail my ship. - Louisa May Alcott",
    "2": "Am I good enough? Yes, I am. - Michelle Obama",
    "3": "I have as much muscle as any man, and can do as much work as any man. - Sojourner Truth",
    "4": "Courage is the price that life exacts for granting peace. - Amelia Earhart",
    "5": "Her own thoughts and reflections were habitually her best companions. - Jane Austen"
}

// Select a random quote
const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length);
const randomQuote = quotes[randomIndex];

// Insert the quote into the blockquote element in index.html
document.addEventListener("DOMContentLoaded", () => {
    const blockquote = document.querySelector("blockquote");
    if (blockquote) {
        blockquote.textContent = randomQuote;
    }
});

// Toggle background image on button click
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", () => {
            const body = document.body;
            if (body.style.background == "rgb(248, 231, 206)") {
                body.style.background = "url('assets\/background.jpg')"; // Remove background 
            } else {
                body.style.background = "#f8e7ce"; // Set your background image
            }
        });
    }
});