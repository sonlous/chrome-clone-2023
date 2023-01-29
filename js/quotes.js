const quotes = [
    {
        quote: "침묵하는 사람보다 언어에 능숙한 사람은 없다.",
        author: "샘 레이번"
    },
    {
        quote: "아름다움에 결점이 없다는 것 자체가 결점이다.",
        author: "해브록 엘리스"
    },
    {
        quote: "인생은 거짓된 상황의 끝없는 연속이다.",
        author: "소온톤 와일더"
    },
    {
        quote: "인생이 진지하다는 증거는 털끝만큼도 없다.",
        author: "브렌단 길"
    },
    {
        quote: "인생은 겸손에 대한 오랜 수업이다.",
        author: "제임스 M. 베리"
    },
    {
        quote: "인생의 목적은 성숙하지 않기 위해 싸우는 것이다.",
        author: "딕 워트하이머"
    },
    {
        quote: "완벽함이 아니라 탁월함을 위해서 애써라.",
        author: "H. 잭슨 브라운 주니어"
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "루이 파스퇴르"
    },
    {
        quote: "침묵하는 사람보다 언어에 능숙한 사람은 없다.",
        author: "파울로 코엘료"
    },
    {
        quote: "이른 아침은 입에 황금을 물고 있다.",
        author: "벤자민 프랭클린"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;