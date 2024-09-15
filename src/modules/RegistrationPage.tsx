import { cn } from "@/lib/utils";
import { sectionClasses } from "./Navbar";
import { Link } from "react-router-dom";
import { mainContentClasses } from "./ProgramPage";

const paragraphs = [
  "e-mail : kardiochirurgia@gczd.katowice.pl",
  "tel: +48 660-582-632",
  "W celu rejestracji prosimy o wysłanie e-maila lub SMS z danymi uczestnika (imię i nazwisko) do dnia 25.09.2024r.",
];

function RegistrationPage() {
  return (
    <div
      className={cn(
        sectionClasses,
        mainContentClasses,
        "flex flex-col gap-6 py-8"
      )}
    >
      <h4 className="text-xl">REJESTRACJA</h4>
      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph) => (
          <p className="leading-7 text-gray-600" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <Link to="/program">Program konferencji</Link>
    </div>
  );
}

export default RegistrationPage;
