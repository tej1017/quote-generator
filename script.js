const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy");
const shareBtn = document.getElementById("share");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `– ${randomQuote.author}`;
}

newQuoteBtn.addEventListener("click", getRandomQuote);

copyBtn.addEventListener("click", () => {
    const textToCopy = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(textToCopy);
    alert("Quote copied to clipboard!");
});

shareBtn.addEventListener("click", async () => {
    const textToShare = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    if (navigator.share) {
        await navigator.share({
            title: "Quote of the Day",
            text: textToShare,
        });
    } else {
        alert("Sharing not supported on this browser.");
    }
});
