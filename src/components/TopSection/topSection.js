
import beans from "../../assets/images/top-cont1-min.jpg";
import roast from "../../assets/images/top-cont2-min.jpg";

export const sections = [
    {
        id: "coffee",
        title: "Coffee Beans",
        text: "私たちが提供するスペシャリティーコーヒーは、高い基準に基づいて選ばれています。一杯のコーヒーで、生産者のストーリーと自然の恵みを感じてください。",
        to: "/coffee",
        linkLabel: "詳しくはこちら",
        imgSrc: beans,
        imgAlt: "Coffee Beans",
        direction: "row",
    },
    {
        id: "Roast",
        title: "Roast",
        text: "軽焙煎でフルーティーな酸味と華やかなアロマを、中焙煎でバランスの良い甘みとコクを、深焙煎で強いボディ感とビターな風味を引き出します。",
        to: "/coffee",
        linkLabel: "詳しくはこちら",
        imgSrc: roast,
        imgAlt: "Roast",
        direction: "row-reverse",
    },
];