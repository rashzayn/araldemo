import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

const leftColumnQuestions = [
  "What is the tuition fee for the Aral School programme and does the School provide a monthly stipend to cover participants' expenses?",
  "What kind of degree will I receive upon completing the programme?",
  "Can I apply if I have no previous experience in design and ecology?",
  "Does the Aral School provide accommodation?",
  "Are there any significant programme related expenses that I will have to cover?",
];

const rightColumnQuestions = [
  "Can I apply to the Aral School if my English is not very good?",
  "Is it mandatory to stay in Uzbekistan? Can I participate in the Aral School online?",
  "Is the programme full-time?",
  "Is it possible to combine work with participation in the Aral School?",
  "Where can I find more information about the Aral School?",
];

export const MentorsAndExpertsSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-10 sm:py-14 lg:py-0">
      <img
        className="pointer-events-none absolute left-[4%] top-[470px] hidden h-auto w-[32.4%] max-w-[466px] lg:block"
        alt="Image BLOCK"
        src="/image-block.png"
      />
      <img
        className="pointer-events-none absolute right-0 top-[480px] hidden h-auto w-[30.7%] max-w-[442px] lg:block"
        alt="Image BLOCK"
        src="/image-block-1.png"
      />
      <img
        className="pointer-events-none absolute left-1/2 top-0 hidden h-auto w-[32.4%] max-w-[466px] -translate-x-1/2 lg:block"
        alt="Image BLOCK"
        src="/image-block-2.png"
      />
      <div className="relative mx-auto flex min-h-[963px] w-full max-w-[1440px] items-start justify-center px-4 sm:px-6 lg:px-0">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[1022px] w-px -translate-x-1/2 lg:block">
          <img
            className="h-full w-full"
            alt="Div CENTRE LINE"
            src="/div-centre-line-1.svg"
          />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[179px] w-[179px] -translate-x-1/2 lg:flex">
          <img
            className="h-[157.71px] w-[157.71px]"
            alt="Line"
            src="/line-36.svg"
          />
          <div className="mt-[157px] h-[22px] w-[22px] bg-[#f96243]" />
        </div>
        <header className="absolute left-4 top-8 z-10 sm:left-6 sm:top-10 lg:left-[9.65%] lg:top-[7.58%]">
          <h2 className="[font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-[32px] font-normal leading-[36px] tracking-[0] text-white sm:text-[40px] sm:leading-[44px]">
            FAQ
          </h2>
        </header>
        <Card className="relative mt-24 w-full max-w-[1165px] rounded-none border-0 bg-[#fcf4eb] shadow-none sm:mt-28 lg:mt-[170px]">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="px-5 py-8 sm:px-8 lg:px-[41px] lg:py-12">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="left-0"
                >
                  {leftColumnQuestions.map((question, index) => (
                    <AccordionItem
                      key={`left-${index}`}
                      value={`left-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="gap-6 py-7 text-left hover:no-underline [&>svg]:hidden">
                        <div className="flex w-full items-center justify-between gap-7">
                          <span className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-6 tracking-[0] text-black">
                            {question}
                          </span>
                          <img
                            className="h-[12.05px] w-[23.69px] shrink-0"
                            alt="Vector"
                            src="/vector-1-1.svg"
                          />
                        </div>
                      </AccordionTrigger>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="px-5 py-8 sm:px-8 lg:px-[41px] lg:py-12">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="right-0"
                >
                  {rightColumnQuestions.map((question, index) => (
                    <AccordionItem
                      key={`right-${index}`}
                      value={`right-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="gap-6 py-7 text-left hover:no-underline [&>svg]:hidden">
                        <div className="flex w-full items-center justify-between gap-7">
                          <span className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-6 tracking-[0] text-black">
                            {question}
                          </span>
                          <img
                            className="h-[12.05px] w-[23.69px] shrink-0"
                            alt="Vector"
                            src="/vector-1-1.svg"
                          />
                        </div>
                      </AccordionTrigger>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
