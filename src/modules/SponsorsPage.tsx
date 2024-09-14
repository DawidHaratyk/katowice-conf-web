import { cn } from "@/lib/utils";
import { sectionClasses } from "./Navbar";
import { mainContentClasses } from "./ProgramPage";
import sponsorImage1 from "@/assets/sponsor-1.png";

function SponsorsPage() {
  return (
    <div
      className={cn(
        sectionClasses,
        mainContentClasses,
        "flex flex-col gap-6 py-8"
      )}
    >
      <h4 className="text-xl">SPONSORZY</h4>
      <div className="flex flex-col gap-4">
        <img src={sponsorImage1} alt="Serce dziecka" className="w-48" />
      </div>
    </div>
  );
}

export default SponsorsPage;
