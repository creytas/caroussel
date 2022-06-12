import React from "react";
import image1 from "./img/image_10.png";
import image2 from "./img/image_11.jpg";
import image3 from "./img/image_12.png";
import image4 from "./img/image_13.png";
import image5 from "./img/image_14.png";
import image6 from "./img/image_15.png";
import image7 from "./img/image_16.png";
import image8 from "./img/image_17.png";
import image9 from "./img/image_18.png";
import image10 from "./img/image_19.png";
import image11 from "./img/image_20.png";
import image12 from "./img/image_21.png";
import image13 from "./img/image_22.png";
import image14 from "./img/image_23.png";
import image15 from "./img/image_24.png";
import image16 from "./img/image_25.png";
import Carousel from "./components/carousel/Carousel";

function App() {
  const slides = [
    {
      picture: image1,
      title: "Sowing the earth is also feeding the future",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image2,
      title: "Every child we care about is a man we win",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image3,
      title:
        "Breeding is a purely entrepreneurial technique. To undertake: it is to know how to raise",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image4,
      title: "Educating a woman is educating a whole nation",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image5,
      title: "The stage is a picture of the world where the audience plays",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image6,
      title: "The child, I repeat, is the future",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image7,
      title:
        "A smile is often the most important thing. You get paid with a smile. You are rewarded with a smile",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image8,
      title:
        "Agriculture: a neglected sector but one that could be enriched if properly addressed",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image10,
      title: "Merry Christmas and Happy New Year wishes from Kesho Congo !!!",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image11,
      title: "By taking the child by the hand, we take the mother by the heart",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image12,
      title:
        "Education is not a preparation for life, education is life itself",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image14,
      title:
        "Expanding women's freedoms, education and opportunities is key to inclusive economic growth",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
    {
      picture: image16,
      title:
        "Coming together is a start, staying together is progress, working together is success",
      description:
        "Pariatur qui sit. Quia aut quasi. Aut earum quasi. Similique saepe ullam saepe dicta voluptatum temporibus alias. Sed dolorum aliquid quia distinctio fuga praesentium qui. Maiores culpa labore odio voluptas vero nostrum...",
      link: "",
    },
  ];
  return (
    <section className="container">
      <Carousel slides={slides} controls indicators width="100%" />
    </section>
  );
}

export default App;
