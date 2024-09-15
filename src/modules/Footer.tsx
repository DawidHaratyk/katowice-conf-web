import { cn } from "@/lib/utils";
import { mainContentClasses } from "./ProgramPage";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#314653] w-full">
      <div
        className={cn(
          "md:mx-auto flex flex-col gap-10 p-8 md:gap-20 md:py-16 md:flex-row",
          mainContentClasses
        )}
      >
        <div className="flex flex-col gap-4">
          <h4 className="text-xl text-gray-50 font-semibold">
            PRZYDATNE LINKI
          </h4>
          {/* <div className="flex flex-col gap-2 text-slate-300">
            <p>sum</p>
            <p>sum</p>
          </div> */}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl text-gray-50 font-semibold">KONTAKT Z NAMI</h4>
          <div className="flex flex-col gap-2 text-slate-300">
            <div className="flex gap-2 items-center">
              <MapPin className="w-4 h-4" />
              <p>ul. Medyków 18, Katowice</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4" />
              <p>660-582-632</p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="w-4 h-4" />
              <p>kardiochirurgia@gczd.katowice.pl</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
