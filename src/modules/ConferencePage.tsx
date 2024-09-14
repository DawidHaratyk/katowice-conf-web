import { cn } from "@/lib/utils";
import { sectionClasses } from "./Navbar";
import { mainContentClasses } from "./ProgramPage";

const paragraphs = [
  `Szanowni Państwo,`,
  `Zapraszamy Państwa na pierwszą konferencję „Jesienne spotkania z kardiologii i kardiochirurgii
dziecięcej – skorygowane przełożenie wielkich naczyń, atrezja płucna z ubytkiem międzykomorowym
i unaczynieniem odaortalnym” organizowaną w dniu 2.10.2024r. przez Oddział Kardiochirurgii
Dziecięcej oraz Kardiologii Dziecięcej Górnośląskiego Centrum Zdrowia Dziecka w Katowicach.`,
  `Konferencja kierowana jest do lekarzy oraz medyków chcących poszerzyć swoją wiedzę, a także
podzielić się własnymi doświadczeniami oraz osiągnięciami z zakresu leczenia dzieci oraz dorosłych
ze skorygowanym przełożeniem wielkich naczyń oraz atrezją płucną z unaczynieniem tętnic płucnych
od kolaterali aortalno-płucnych. Zapraszamy więc kardiologów, kardiologów dziecięcych,
kardiochirurgów, anestezjologów oraz lekarzy i medyków innych specjalności.`,
  `Gościem specjalnym
wydarzenia będzie wybitny kardiochirurg oraz naukowiec, prof. Richard Mainwaring pracujący na co
dzień w Stanford, USA – Ośrodku o największym na świecie doświadczeniu w leczeniu dzieci z wyżej
wymienionymi złożonymi wadami serca.`,
  `Wierzymy, że konferencja w swojej formule spełni oczekiwania uczestników i pozwoli na pogłębienie
wiedzy z zakresu kardiologii i kardiochirurgii dziecięcej. W związku z powyższym zapraszamy osoby
zainteresowane tematyką do wzięcia udziału w konferencji. Uprzejmie prosimy o rejestrację
uczestnictwa. Jednocześnie informujemy, że udział w konferencji jest bezpłatny.`,
  `Z wyrazami szacunku, w imieniu Zespołu`,
  `dr P. Stanek, dr G. Zalewski, prof. dr hab. n. med. Jacek Kusa`,
];

function ConferencePage() {
  return (
    <div
      className={cn(
        sectionClasses,
        mainContentClasses,
        "flex flex-col gap-6 py-8"
      )}
    >
      <h4 className="text-xl">KONFERENCJA</h4>
      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph) => (
          <div key={paragraph}>
            {paragraph.includes("Z wyrazami szacunku") ? (
              <>
                <p className="leading-7 text-gray-600">Z wyrazami szacunku,</p>
                <p className="leading-7 text-gray-600">w imieniu Zespołu</p>
              </>
            ) : (
              <p className="leading-7 text-gray-600">{paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConferencePage;
