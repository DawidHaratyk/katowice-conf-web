import { cn } from "@/lib/utils";
import { sectionClasses } from "./Navbar";
import { mainContentClasses } from "./ProgramPage";
import universityImage from "@/assets/university.jpg";

function InformationsPage() {
  return (
    <div
      className={cn(
        sectionClasses,
        mainContentClasses,
        "flex flex-col gap-6 py-8"
      )}
    >
      <h4 className="text-xl">INFORMACJE</h4>
      <div className="flex flex-col">
        <p className="leading-7 text-gray-600">Miejsce konferencji</p>
        <p className="leading-7 text-gray-600">
          Aula Uniwersytecka A-3 im. Prof. Zahorskiego ul. Medyków 18, Katowice
        </p>
        <img
          src={universityImage}
          alt="Ślaski Uniwersytet Medyczny w Katowicach"
          className="mt-4 w-full md:w-2/3"
        />
      </div>
    </div>
  );
}

export default InformationsPage;
