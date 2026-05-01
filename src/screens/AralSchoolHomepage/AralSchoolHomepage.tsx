import { Button } from "../../components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { AboutACDFSection } from "./sections/AboutACDFSection";
import { CoreTeamSection } from "./sections/CoreTeamSection";
import { EligibilitySection } from "./sections/EligibilitySection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { MentorsAndExpertsSection } from "./sections/MentorsAndExpertsSection";
import { ProgramHeroSection } from "./sections/ProgramHeroSection";
import { ProgrammeOverviewSection } from "./sections/ProgrammeOverviewSection";
import { ResearchThemesSection } from "./sections/ResearchThemesSection";

const navigationItems = [
  "Aral School",
  "Programme",
  "Apply",
  "Team",
  "FAQ",
  "About ACDF",
  "Aral Culture Summit",
];

const languageItems = ["EN", "UZ", "KK", "RU"];

const programmeVisionImages = [
  {
    src: "/programme-image-block-4.png",
    alt: "Programme image",
    className:
      "w-full max-w-[519px] object-cover sm:col-span-8 lg:col-span-5 lg:justify-self-start",
  },
  {
    src: "/programme-image-block-3.png",
    alt: "Programme image",
    className:
      "w-full max-w-[484px] object-cover sm:col-span-8 lg:col-span-4 lg:justify-self-end",
  },
  {
    src: "/programme-image-block-5.png",
    alt: "Programme image",
    className:
      "w-full max-w-[272px] object-cover sm:col-span-4 lg:col-span-2 lg:self-start lg:justify-self-center",
  },
  {
    src: "/programme-image-block-2.png",
    alt: "Programme image",
    className:
      "w-full max-w-[507px] object-cover sm:col-span-8 lg:col-span-5 lg:justify-self-center",
  },
  {
    src: "/programme-image-block-6.png",
    alt: "Programme image",
    className:
      "w-full max-w-[346px] object-cover sm:col-span-6 lg:col-span-3 lg:justify-self-center",
  },
];

export const AralSchoolHomepage = (): JSX.Element => {
  return (
    <main className="relative min-h-screen w-full overflow-x-auto bg-[#fcf4eb]">
      <div className="relative mx-auto min-w-[1440px] bg-[#fcf4eb]">
        <div className="fixed inset-x-0 top-0 z-50 mx-auto min-w-[1440px] bg-[#f96243]">
          <div className="mx-auto flex h-10 w-full max-w-[1440px] items-center justify-between overflow-hidden">
            <p className="ml-5 [font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-black">
              Apply to the Aral School – Deadline 5th of October 2025
            </p>
            <div className="flex h-10 w-[374px] items-center bg-[#fcf4eb] px-[31px] py-0">
              <ToggleGroup
                type="single"
                defaultValue="EN"
                className="flex w-full justify-start gap-[34px]"
                aria-label="Language selection"
              >
                {languageItems.map((language) => (
                  <ToggleGroupItem
                    key={language}
                    value={language}
                    aria-label={language}
                    className="h-auto min-w-0 rounded-none px-0 py-0 data-[state=on]:bg-transparent data-[state=on]:text-black data-[state=on]:shadow-none"
                  >
                    <span
                      className={`inline-flex h-5 items-center justify-center [font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-black ${
                        language === "EN" ? "w-[43px] bg-[#f96243]" : "w-fit"
                      }`}
                    >
                      {language}
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </div>
        <header className="fixed inset-x-0 top-10 z-40 mx-auto min-w-[1440px] bg-[#fcf4eb8c] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
          <div className="relative mx-auto flex h-[108px] w-full max-w-[1440px] items-center justify-between px-[18px]">
            <img className="h-[65px] w-[155px]" alt="Aral" src="/aral.svg" />
            <nav aria-label="Primary" className="flex items-center">
              <ul className="flex items-center gap-[60px]">
                {navigationItems.map((item) => (
                  <li key={item}>
                    <Button
                      variant="ghost"
                      className="h-auto rounded-none p-0 [font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-black hover:bg-transparent hover:text-black"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <img
              className="h-[63px] w-[246px]"
              alt="School"
              src="/school.svg"
            />
            <div className="absolute bottom-[-11px] left-1/2 h-[21px] w-[21px] -translate-x-1/2 bg-black" />
          </div>
        </header>
        <div className="pointer-events-none absolute inset-y-0 left-[365px] z-0 w-px bg-[url('/vertical-column-base-line-1.svg')] bg-repeat-y" />
        <div className="pointer-events-none absolute inset-y-0 left-[720px] z-0 w-px bg-[url('/vertical-column-base-line-2.svg')] bg-repeat-y" />
        <div className="pointer-events-none absolute inset-y-0 left-[1074px] z-0 w-px bg-[url('/vertical-column-base-line.svg')] bg-repeat-y" />
        <div className="relative z-10 flex flex-col pt-[148px]">
          <ProgramHeroSection />
          <ProgrammeOverviewSection />
          <section className="relative w-full">
            <div className="w-full">
              <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
            </div>
            <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-[76px] pb-[120px] pt-[84px]">
              <div className="ml-auto w-[718px] bg-[#fcf4eb]">
                <div className="px-[51px] pb-[24px] pt-[25px]">
                  <h2 className="w-[586px] [font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-7xl font-normal leading-[normal] tracking-[0] text-black">
                    Programme <br />
                    vision
                  </h2>
                </div>
                <img className="h-px w-[720px]" alt="Line" src="/line-40.svg" />
              </div>
              <div className="relative min-h-[1100px]">
                <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-8 lg:grid-cols-9">
                  {programmeVisionImages.map((image, index) => (
                    <img
                      key={`programme-vision-image-${index}`}
                      className={image.className}
                      alt={image.alt}
                      src={image.src}
                    />
                  ))}
                </div>
                <img
                  className="pointer-events-none absolute left-[289px] top-[224px] h-[353px] w-[353px]"
                  alt="Graphic ornament"
                  src="/graphic-ornament-1.svg"
                />
                <img
                  className="pointer-events-none absolute left-[643px] top-[371px] h-[349px] w-[349px]"
                  alt="Graphic ornament"
                  src="/graphic-ornament.svg"
                />
              </div>
            </div>
          </section>
          <ResearchThemesSection />
          <EligibilitySection />
          <CoreTeamSection />
          <MentorsAndExpertsSection />
          <AboutACDFSection />
          <GlobalFooterSection />
        </div>
      </div>
    </main>
  );
};
