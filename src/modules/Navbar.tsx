import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@/components/icons/MenuIcon";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { mainContentClasses } from "./ProgramPage";

export const sectionClasses = "py-4 px-2 md:px-4";

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/konferencja", text: "KONFERENCJA" },
    { to: "/program", text: "PROGRAM" },
    { to: "/rejestracja", text: "REJESTRACJA" },
    { to: "/informacje", text: "INFORMACJE" },
    { to: "/sponsorzy", text: "SPONSORZY" },
  ];

  const getLinkItems = ({ withOnClick }: { withOnClick: boolean }) => {
    return links.map((link) => (
      <Link
        to={link.to}
        key={link.to}
        className={cn(
          "text-sm font-medium text-gray-900 hover:text-gray-900 transition-colors hover:bg-gray-100 px-3 py-2 rounded-lg",
          {
            "bg-gray-100": pathname === link.to,
          }
        )}
        {...(withOnClick ? { onClick: () => setIsOpen(false) } : {})}
      >
        {link.text}
      </Link>
    ));
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "flex flex-col-reverse items-center lg:flex-row lg:justify-around gap-6 pt-4",
          sectionClasses,
          mainContentClasses
        )}
      >
        <h2 className="font-bold text-xl text-center uppercase italic">
          Jesienne spotkania z kardiologii i kardiochirurgii <br /> dziecięcej –
          skorygowane przełożenie wielkich naczyń, atrezja płucna z ubytkiem
          międzykomorowym i unaczynieniem odaortalnym
        </h2>
        <img src={logo} alt="logo" className="h-24 md:h-28" />
      </div>

      <div
        className={cn(
          "border-b border-t border border-gray-200 w-full",
          sectionClasses
        )}
      >
        <nav>
          <ul
            className={cn("hidden md:flex space-x-4 gap-4", mainContentClasses)}
          >
            {getLinkItems({ withOnClick: false })}
          </ul>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="hover:bg-gray-100 transition md:hidden">
              <MenuIcon />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav>
              <ul className="flex flex-col space-y-4 mt-8">
                {getLinkItems({ withOnClick: true })}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
