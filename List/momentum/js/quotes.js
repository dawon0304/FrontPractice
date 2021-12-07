const quotes = [{
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: " <Walt Disney>",
    },
    {
        quote: "웃음이 없는 하루는 버린 하루다.",
        author: "<Charles Chaplin>",
    },
    {
        quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
        author: "<Michael Jordan>",
    },
    {
        quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다.",
        author: "<Oprah Gail Winfrey>",
    },
    {
        quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
        author: "<Steve Jobs>",
    },
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
        author: "<Pablo Picasso>",
    },
    {
        quote: "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라",
        author: "<Helen Adams Keller>",
    },
    {
        quote: "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다.",
        author: "<Thomas Alva Edison>",
    },
    {
        quote: "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 떄문이다.",
        author: "<Warren Buffett>",
    },
    {
        quote: "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다.",
        author: "<Benjamin Franklin>",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;