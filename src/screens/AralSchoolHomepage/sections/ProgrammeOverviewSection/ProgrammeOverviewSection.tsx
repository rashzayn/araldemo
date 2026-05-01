import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProgrammeOverviewSection = (): JSX.Element => {
  const introText = {
    title: "Aral School",
    description:
      "We are pleased to announce the Aral School, the new education programme beginning in 2026, led by Jan Boelen and commissioned by the Uzbekistan Art and Culture Development Foundation.",
  };

  const bodyParagraphs = [
    "The climate crisis is leaving an indelible mark on our ecosystems and bioregions, forcing us to rethink our interdependencies and alliances. North Uzbekistan and the Karakalpakstan area were once home to the vast Aral Sea, a lake in Central Asia that was for most of the 20th century the world's fourth largest saline lake. In the last fifty years, the lake has dramatically dried up, with a radical increase in salinisation, primarily due to unsustainable irrigation practices linked to intensive, large-scale cotton cultivation. The consequences have irreversibly altered a bioregion and caused the collapse of an ecosystem, with serious impact on local communities and the region's ecology, economy, culture, and public health.",
    "The Aral School is an interdisciplinary postgraduate programme that recognises the unique characteristics of this context, as well as the dramatic consequences of this ecosystem's collapse. In a lucid approach, the school takes these as the starting point to create new and sustainable visions and prototypes for a shared future. The programme brings together international and local participants from Uzbekistan and Karakalpakstan to explore innovative solutions for cultural and ecological regeneration. Learning from the traditions, biocultural context, and environmental pressure of the Karakalpakstan region, the programme fosters new ways of learning and collaborating across disciplines.",
  ];

  return (
    <section className="relative w-full bg-[#fcf4eb]">
      <div className="w-full border-t border-transparent">
        <img
          className="block h-px w-full object-cover"
          alt="Div LINE"
          src="/line-9.svg"
        />
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12">
          <div className="relative hidden lg:col-span-3 lg:block">
            <div className="relative h-full min-h-[503px] w-full">
              <div className="absolute right-0 top-[123px] h-5 w-5 bg-black" />
              <img
                className="absolute left-0 top-[124px] h-[380px] w-[376px]"
                alt="Line"
                src="/line-26.svg"
              />
            </div>
          </div>
          <div className="relative px-4 py-10 sm:px-6 lg:col-span-6 lg:px-0 lg:py-0">
            <div className="hidden lg:absolute lg:left-0 lg:top-0 lg:block lg:h-[416px] lg:w-full lg:bg-[#fcf4eb]" />
            <Card className="relative z-10 border-0 bg-transparent shadow-none">
              <CardContent className="px-0 pb-8 pt-0 lg:px-[18px] lg:pb-[88px] lg:pt-[123px]">
                <p className="[font-family:'Season_Mix_TRIAL-Medium',Helvetica] text-[28px] font-normal leading-[normal] text-black sm:text-3xl">
                  <span className="font-medium">{introText.title}</span>
                  <span className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica]">
                    {" "}
                    {introText.description}
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative hidden lg:col-span-3 lg:block">
            <div className="relative h-full min-h-[503px] w-full">
              <div className="absolute left-[17px] top-px flex h-[253px] w-[253px] rotate-90">
                <img
                  className="ml-0 mt-0 h-[253.71px] w-[253.71px] -rotate-90"
                  alt="Line"
                  src="/line-26-1.svg"
                />
              </div>
              <div className="absolute left-[252px] top-[236px] h-5 w-5 rotate-90 bg-[#f96243]" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button
            type="button"
            variant="ghost"
            className="h-auto w-full justify-between rounded-none bg-[#f96243] px-6 py-5 text-left text-black hover:bg-[#f96243]/95 sm:px-8 lg:min-h-[87px] lg:w-1/2 lg:px-[31px] lg:py-0"
          >
            <span className="w-full max-w-[205px] [font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-normal leading-[normal]">
              <span className="font-medium">Apply now</span>
              <span className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica]">
                {" "}
                Deadline 5th of October 2025
              </span>
            </span>
            <img
              className="mx-4 h-px w-[72px] shrink-0"
              alt="Line"
              src="/line-22.svg"
            />
            <span
              className="block h-[21px] w-[21px] shrink-0 bg-black"
              aria-hidden="true"
            />
          </Button>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2">
          <div className="bg-black">
            <img
              className="h-full w-full object-cover"
              alt="Image BLOCK"
              src="/image-block-4.png"
            />
          </div>
          <Card className="rounded-none border-0 bg-black shadow-none">
            <CardContent className="px-6 py-10 sm:px-8 lg:px-[133px] lg:py-[56px]">
              <div className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium leading-6 text-white">
                {bodyParagraphs.map((paragraph, index) => (
                  <p key={`programme-overview-paragraph-${index}`}>
                    {paragraph}
                    {index < bodyParagraphs.length - 1 && <br />}
                    {index < bodyParagraphs.length - 1 && <br />}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
