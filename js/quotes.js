const quotes = [
    {
        quote: "No one has a finer command of language than the person who keeps his mouth shut.",
        author: "- Sam Rayburn"
    },
    {
        quote: "The absence of flaw in beauty is itself a flaw.",
        author: "- Havelock Ellis"
    },
    {
        quote: "Life is an unbroken succession of false situations.",
        author: "- Thornton Wilder"
    },
    {
        quote: "Not a shred of evidence exists in favor of the idea that life is serious.",
        author: "- Brendan Gill"
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "- James M. Barrie"
    },
    {
        quote: "The purpose of life is to fight maturity.",
        author: "- Dick Werthimer"
    },
    {
        quote: "Strive for excellence, not perfection.",
        author: "- H. Jackson Brown Jr."
    },
    {
        quote: "If you can concentrate always on the present, you'll be a happy man.",
        author: "- Paulo Cuelho"
    },
    {
        quote: "Dream as if you'll live forever. Live as if you'll die today.",
        author: "- James Dean"
    },
    {
        quote: "Early morning hath gold in its mouth.",
        author: "- Benjamin Franklin"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;