import SectionDivider from "@/components/miscellaneous/SectionDivider";
import Heading from "@/components/miscellaneous/Heading";

export default function AbteilungssprecherPage() {
  return (
    <main className="min-h-screen">
      <section
        id="projects"
        className="mt-[5rem] flex flex-col justify-center items-center"
      >
        <div className="mt-[4rem] mb-[8rem] flex justify-center items-center w-[300rem] h-[22rem] md:h-[30rem] bg-secondary transform rotate-[3.5deg]">
          <div className="flex flex-col w-full text-white text-center transform -rotate-[3.5deg]">
            <Heading
              color="white"
              size="text-xl md:text-3xl"
              weight="font-semibold"
              className="mb-5"
            >
              Abteilungssprecher HIT
            </Heading>
            <Heading
              color="white"
              size="text-base md:text-basePlus"
              weight="font-medium"
              capitalize={false}
            >
              STUPPNIG MARKUS
            </Heading>
          </div>
        </div>

        <blockquote className="relative">
          <svg
            className="absolute -top-6 -start-8 size-16"
            style={{ color: "lightgrey" }}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>

          <div className="relative z-10">
            <p className="text-xl text-gray-800 md:text-3xl md:leading-normal dark:text-white">
              <em>Government of the people, by the people, for the people</em>
            </p>
          </div>
        </blockquote>

        <p className="italic text-lg">- Abraham Lincoln</p>

        <div className="flex flex-col h-full mx-[1rem] md:mx-[7rem]">
          <Heading
            zoom={false}
            className="text-black text-[2rem] md:text-[3rem] font-semibold mt-[3rem] md:mt-[6rem]"
          >
            Aktueller Stand
          </Heading>
          <p className="text-[1.2rem] md:text-[1.7rem] mt-[1rem]">
            Am Montag, dem 30. September haben wir ein Klassensprechertreffen
            angesetzt, bei dem Franz Puerto und ich eure Meinungen und Ideen
            hören konnten.
          </p>
          <p className="text-[1.2rem] md:text-[1.7rem] mt-[1rem]">
            Direkt darauf haben wir diese beim Abteilungsvorstand, dem Herrn
            Professor Koppensteiner, eingebracht. Aktuell warten wir noch auf
            den Zugriff auf eine Shared Mailbox, sodass wir E-Mails an die
            gesamte Abteilung senden können. Das Protokoll habt ihr hier zum{" "}
            <a
              href="/protokoll-03.10.2024-Koppensteiner.pdf"
              className="text-primary underline"
              download
            >
              download
            </a>
          </p>

          <Heading
            zoom={false}
            className="text-black text-[2rem] md:text-[3rem] font-semibold mt-[3rem] md:mt-[6rem]"
          >
            Über mich
          </Heading>
          <p className="text-[1.2rem] md:text-[1.7rem] mt-[1rem] mb-[3rem] md:mb-[7rem]">
            Ich bin Markus, und habe das vergnügen, als Abteilungssprecher für
            die HIT gewählt worden zu sein. Nachdem der Herr Professor
            Koppensteiner, der Herr Professor Brein, aber auch zahlreiche andere
            Personen sich für mich und mein Auslandssemester eingesetzt haben,
            möchte ich dem TGM etwas zurückgeben. Mit dem Amt als
            Abteilungssprecher bedanke ich mich für die Unterstützung indem ich
            mich setze für EUER Interesse einsetze.
          </p>
        </div>
      </section>
      <SectionDivider />
    </main>
  );
}
