import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const eligibilityCards = [
  {
    number: "1",
    title: "What is in it for applicants?",
    body: [
      "No tuition fee",
      "Prototyping, material costs, research trips and accommodation are included",
      "Monthly participation stipend",
      "Visibility and exposure to global and local creative network",
      "Contact with international experts on a 1-1 basis",
      "Publication of the cohort developments and outcome in a respective print format",
      "A growing cohort of Aral School alumni, who remain connected in the future",
    ],
    connector: "right",
    className: "lg:translate-y-0",
  },
  {
    number: "2",
    title: "Application Requirements",
    body: [
      "Completed higher education",
      "2–3 years of work experience",
      "Fluency in English",
      "High level of motivation and self-organisation",
    ],
    connector: "left",
    className: "lg:translate-y-24",
  },
  {
    number: "3",
    title: "Selection Process",
    body: [
      "Upon applications and portfolio review, selected candidates will be invited for a creative interview session to share their areas of interests and motivations.",
    ],
    connector: "right",
    className: "lg:-translate-y-4",
  },
  {
    number: "4",
    title: "Required documents",
    body: [
      "Please submit the following documents together with your application:",
      "",
      "CV + Creative Portfolio (PDF, not exceeding a total of 10 pages and 5 projects) - your portfolio should contain examples of projects and/or research work completed in the last few years and demonstrate your skills and expertise as well as interest in the themes of focus of the Aral School. Please embed any video material within the Portfolio PDF",
      "Copy of a university diploma",
      "Motivation letter – please explain in no more than 600 words why you are interested in the program and how it connects to your area of research or practice",
      "Passport photo page scan.",
      "",
      "Please note, only fully completed applications as per the list above will be considered.",
    ],
    connector: "left",
    className: "lg:translate-y-28",
    cta: {
      label: "Completed online application form",
      href: "https://docs.google.com/document/d/15pabI3Qpyxa0oW9FmV8Gl6aE2eEVuDrpr4eGPQV1vBg/edit?usp=sharing",
    },
  },
] as const;

const paragraphText = [
  "The multidisciplinary programme is aimed at young professionals from Uzbekistan and abroad with varied backgrounds and work experience in the fields of architecture, urbanism, environmental science, biotech, climate studies, filmmaking, media, crafts, design, computer technologies, social studies, physical sciences and other fields.",
  "It is recommended that applicants to the programme have a higher education diploma (in any specialisation) and no less than 2–3 years of work experience.",
  "When reviewing applications, we focus on how potential researchers could apply their expertise to the research agenda of the programme and current theme.",
];

const Connector = ({ side }: { side: "left" | "right" }) => {
  if (side === "left") {
    return (
      <div className="pointer-events-none absolute -left-8 -top-8 hidden h-32 w-32 lg:block">
        <img
          className="absolute left-1 top-1 h-32 w-32"
          alt="Line"
          src="/line-28.svg"
        />
        <div className="absolute left-0 top-0 h-[21px] w-[21px] bg-black" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute -right-32 -top-8 hidden h-[130px] w-[130px] lg:block">
      <img
        className="absolute left-0 top-1 h-[130px] w-[130px]"
        alt="Line"
        src="/line-27-1.svg"
      />
      <div className="absolute right-0 top-0 h-[21px] w-[21px] bg-black" />
    </div>
  );
};

const StepCard = ({
  number,
  title,
  body,
  connector,
  className,
  cta,
}: (typeof eligibilityCards)[number]) => {
  return (
    <article className={`relative ${className}`}>
      <Connector side={connector} />
      <Card className="relative overflow-visible rounded-none border-0 bg-white shadow-none">
        <CardContent className="relative p-0">
          <div className="grid min-h-[106px] grid-cols-[106px_1fr]">
            <div className="flex items-center justify-center border border-[#f96243]">
              <span className="[font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-[40px] font-normal leading-[44px] tracking-[0] text-[#f96243]">
                {number}
              </span>
            </div>
            <header className="flex items-center px-6 py-6 md:px-8">
              <h3 className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-2xl font-medium leading-8 tracking-[0] text-black">
                {title}
              </h3>
            </header>
          </div>
          {cta ? (
            <div className="border-t-0">
              <div className="bg-[#f96243]">
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[87px] items-center justify-between gap-4 px-6 py-5 md:px-[31px]"
                >
                  <span className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal tracking-[0] text-black">
                    {cta.label}
                  </span>
                  <span className="flex items-center gap-4">
                    <img
                      className="h-px w-[72px] shrink-0"
                      alt="Line"
                      src="/line-22.svg"
                    />
                    <span className="flex h-[21px] w-[21px] items-center justify-center bg-black text-white">
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ) : null}

          <div
            className={`px-6 pb-8 pt-6 md:px-8 ${
              cta ? "pt-8" : number === "1" ? "pt-6" : "pt-6"
            }`}
          >
            <div className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-black">
              {body.map((paragraph, index) =>
                paragraph === "" ? (
                  <div key={`${title}-space-${index}`} className="h-6" />
                ) : (
                  <p key={`${title}-paragraph-${index}`} className="mb-0">
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export const EligibilitySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fcf4eb] py-0">
      <div className="mx-auto flex w-full max-w-[1438px] flex-col">
        <header className="w-full lg:w-[718px]">
          <div className="bg-[#fcf4eb] px-6 pb-10 pt-6 md:px-10 md:pb-12 md:pt-[25px] lg:px-[51px]">
            <h2 className="[font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-5xl font-normal leading-none tracking-[0] text-black md:text-6xl lg:text-7xl">
              Who can apply
            </h2>
          </div>
          <img className="block h-px w-full" alt="Line" src="/line-40.svg" />
        </header>
        <div className="px-6 pt-0 md:px-10 lg:px-[18px]">
          <div className="mt-0">
            <img
              className="h-auto w-full object-cover"
              alt="Image BLOCK"
              src="/image-block-3.png"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-12 lg:gap-x-0 lg:gap-y-0 lg:py-0">
            <div className="lg:col-span-3" />
            <div className="lg:col-span-6 lg:bg-[#fcf4eb] lg:px-0 lg:py-12">
              <div className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-black">
                {paragraphText.map((paragraph, index) => (
                  <p
                    key={`eligibility-paragraph-${index}`}
                    className="mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3" />
          </div>
          <div className="pb-10 lg:pb-0">
            <Button
              asChild
              className="h-auto min-h-[87px] w-full rounded-none border-0 bg-[#f96243] px-6 py-5 text-left hover:bg-[#f96243] md:px-[31px] lg:ml-auto lg:flex lg:w-[719px]"
            >
              <a
                href="https://docs.google.com/document/d/15pabI3Qpyxa0oW9FmV8Gl6aE2eEVuDrpr4eGPQV1vBg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex w-full items-center justify-between gap-4">
                  <span className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-black">
                    <span className="font-medium">Apply now</span>
                    <span className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica]">
                      {" "}
                      Deadline 5th of October 2025
                    </span>
                  </span>
                  <span className="flex items-center gap-4">
                    <img
                      className="h-px w-[72px] shrink-0"
                      alt="Line"
                      src="/line-22.svg"
                    />
                    <span className="flex h-[21px] w-[21px] items-center justify-center bg-black text-white">
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </span>
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-x-[257px] lg:gap-y-10">
            {eligibilityCards.map((card) => (
              <StepCard key={card.number} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
