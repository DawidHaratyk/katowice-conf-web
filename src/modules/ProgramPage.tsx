import { cn } from "@/lib/utils";
import { sectionClasses } from "./Navbar";
import heartImage from "@/assets/heart.webp";
import ProgramAccordion from "./ProgramAccordion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const programItems = [
  {
    time: "9.00-9.45",
    content: "Przywitanie gości. Kawa.",
  },
  {
    time: "9.45-10.00",
    content: "Otwarcie konferencji. Wykład inauguracyjny.",
  },
  {
    time: "10.05-10.15",
    content: `Reverse double switch with hemi Senning component – prof. T. Mroczek, USD
Kraków`,
  },
  {
    time: "10.15-10.45",
    content: `Skorygowane przełożenie wielkich naczyń – aktualne wyzwania okiem
kardiologa dziecięcego - dr hab. n. med. A. Morka, GCZD Katowice`,
  },
  {
    time: "10.45-11.15",
    content: `Skorygowane przełożenie wielkich naczyń– ocena morfologii i funkcji prawej i
lewej komory w badaniu rezonansu magnetycznego serca – dr. n. med. Z. Olczak, GCZD
Katowice`,
  },
  {
    time: "11.15-11.30",
    content: `Leczenie operacyjne problemów zastawkowych u dzieci po korekcji wrodzonych
wad serca - dr n. med. G. Zalewski, GCZD Katowice`,
  },
  {
    time: "11.30-12.00",
    content: `ccTGA- Strategia leczenia operacyjnego metodą double switch- prof. Richard
Mainwaring, Stanford, USA`,
  },
  {
    time: "12.10-12.30",
    content: `Dyskusja.`,
  },
  {
    time: "12.30-13.30",
    content: `Przerwa. Lunch.`,
  },
  {
    time: "13.30-13.45",
    content: `PA+VSD+ MAPCA’s z unaczynieniem płuc od lewej t. wieńcowej – opis
przypadku- lek. L. Zalewska, GCZD, Katowice`,
  },
  {
    time: "13.45-14.15",
    content: `PA+VSD+MAPCA’s – rola kardiologii interwencyjnej - dr n. med. Krzysztof Kocot, GCZD,
Katowice`,
  },
  {
    time: "14.15–14.30",
    content: `Wykorzystanie krążenia pozaustrojowego w celach diagnostycznych podczas
operacji unifokalizacji – mgr Karolina Seiler, GCZD Katowice`,
  },

  {
    time: "14.30–14.45",
    content: `Wyzwania w opiece pooperacyjnej u pacjentów po operacji unifokalizacji tętnic
płucnych – dr n. med. E. Urbańska, GCZD, Katowice`,
  },
  {
    time: "14.45-15.15",
    content: `PA+VSD+ MAPCA’s – strategia leczenia operacyjnego, prof. Richard
Mainwaring, Stanford, USA`,
  },
  {
    time: "15.15-15.45",
    content: `Dyskusja.`,
  },
  {
    time: "16.00",
    content: `Zakończenie konferencji.`,
  },
];
export const mainContentClasses =
  "md:w-2/3 md:max-w-2/3 lg:max-w-3/4 lg:w-3/4 md:mx-auto mx-2";

function ProgramPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div
      className={cn(
        sectionClasses,
        mainContentClasses,
        "flex flex-col gap-6 py-8 items-center"
      )}
    >
      <h4 className="text-lg text-center font-semibold">
        Jesienne spotkania kardiologii i kardiochirurgii dziecięcej –
        skorygowane przełożenie wielkich naczyń, atrezja płucna z ubytkiem
        międzykomorowym i unaczynieniem odaortalnym
      </h4>
      <img src={heartImage} alt="heart" className="w-full sm:w-2/5" />
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold p-1">Środa dn. 02.10.2024</h3>
          <h4 className="font-bold p-1 mb-8">
            Aula SUM im. Prof. Zahorskiego, ul. Medyków 18, Katowice
          </h4>
          <h4 className="font-bold p-1 text-xl">Plan konferencji</h4>
          <h4 className="text-xl font-bold bg-[#a0b7c7] p-1 rounded-lg mb-2">
            ROZPOCZĘCIE KONFERENCJI
          </h4>
          <div className="flex flex-col gap-2">
            {programItems.slice(0, 2).map((item) => (
              <ProgramAccordion time={item.time} content={item.content} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-xl font-bold bg-[#a0b7c7] p-1 rounded-lg mb-2">
              SESJA 1
            </h4>
            <p className="text-gray-600 px-2">
              Moderator: dr hab. n. med M. Wites, prof T. Mroczek, prof. J. Kusa
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {programItems.slice(2, 9).map((item) => (
              <ProgramAccordion time={item.time} content={item.content} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-xl font-bold bg-[#a0b7c7] p-1 rounded-lg mb-2">
              SESJA 2
            </h4>
            <p className="text-gray-600 px-2">
              Moderator: dr P. Stanek, prof. G. Brzezińska-Rajszys, dr M.
              Buczyński
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {programItems.slice(9).map((item) => (
              <ProgramAccordion time={item.time} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPage;
