import Experience from "@/components/Experience/Experience";
import About from "@/components/About/About";
import Recommendations from "@/components/Recommendations/Recommendations";
import Introduction from "@/components/Introduction/Introduction";
import SectionDivider from "@/components/miscellaneous/SectionDivider";

export default function Home() {
  return (
    <main>
      <About />
      <Introduction />
      <SectionDivider height="h-[5rem] md:h-[10rem]" />
      <Experience />
      <SectionDivider height="h-[5rem] md:h-[10rem]" />
      <Recommendations />
      <SectionDivider height="h-[5rem] md:h-[10rem]" />
    </main>
  );
}
