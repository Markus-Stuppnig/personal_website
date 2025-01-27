export interface Post {
  title: string;
  description: string[];
  imagePath: string;
  link: string;
  width: number;
}

export const postsData: Post[] = [
  {
    title: "Personal Growth",
    description: ["TODO books, nutrition, fitness, habits"],
    imagePath: "/journeys/growth.png",
    link: "/journeys/growth",
    width: 400,
  },
  {
    title: "Exchange Semester USA",
    description: [
      "On December 13<sup>th</sup> I stepped onto a plane, headed to Chicago, United States. With only 16 years of age, I was on my way into a completely different life, meeting people from another culture and staying there for a whole semester. Now that it's all over, I can comfortably say that it was the best decision I ever made. I built so many friendships, still being close with some of them. And of course, my ability and my skills with the english language skyrocketed. I not only created lasting memories, but also improved as a person. I am sooo thankful for the time I spent there and all the opportunities that came up for me. Experiencing american culture was truly fascinating.<br /><br />Thank you Ben, Fred, Skyler, Marifer, Jefferson, Ashton, Derek, Christian, and all of you. You made my time in the USA great!<br /><br /><a href='/journeys/exchange' class='underline decoration-[0.2rem] underline-offset-4'>See more!</a>",
    ],
    imagePath: "/journeys/exchange.jpeg",
    link: "www.google.com",
    width: 400,
  },
  {
    title: "SCUBA Diving",
    description: [
      "Receiving my PADI Open Water Diver Certification in summer 2023, I can now offially call myself being part of the wonderful diving community. You will never forget your first breath under the water, it's such a fascinating thing to experience. Being in exposure to the aquatic world and seing all this life is not only appealing, but it also relaxes you on a completely different level. Another awesome thing is diving with a close friend or in a group. Just the thought of being in such a dangerous place, somewhere humans wouldn't survive without modern technology and having to support each other is an incredible feeling.<br /><br /><a href='/contact' class='underline decoration-[0.2rem] underline-offset-4'>Let's go dive together!</a>",
    ],
    imagePath: "/journeys/scuba.png",
    link: "www.google.com",
    width: 600,
  },
  {
    title: "Computer science",
    description: [
      "Another thing I am really passionate about is developing software solutions and solving problems. As you can see <a href='https://informatikolympiade.at/rankings/2024/qualifikationsrunde-1.html' target='_blank' class='underline decoration-[0.2rem] underline-offset-4'>here</a> I am 13<sup>th</sup> place in first qualification of the austrian computer science olympiad and I am invited to one week of studying algorithms at viennas best technical univerisity, TU Wien. The next competition will start after this week.<br /><br />Explore some of my projects on <a href='https://github.com/Markus-Stuppnig' target='_blank' class='underline decoration-[0.2rem] underline-offset-4'>my GitHub account!</a>",
    ],
    imagePath: "/journeys/coding.png",
    link: "www.google.com",
    width: 400,
  },
] as const;
