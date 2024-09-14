import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  time: string;
  content: string;
};

function ProgramAccordion({ content, time }: Props) {
  return (
    <Accordion defaultValue="item-1" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">Godz. {time}</AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 px-2 text-gray-600 text-base">{content}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProgramAccordion;
