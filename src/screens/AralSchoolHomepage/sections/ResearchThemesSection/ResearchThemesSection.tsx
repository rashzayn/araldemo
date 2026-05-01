import { Card, CardContent } from "../../../../components/ui/card";

const researchThemes = [
  {
    number: "1",
    title: "The Food System of the Aral region",
    image: "https://images.pexels.com/photos/5632605/pexels-photo-5632605.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description:
      "When ecological systems are changing or collapsing, agriculture needs to adapt. What kind of sustainable food systems in Karalpakstan and the Aral Sea region at a larger scale can we develop? New agroecological approach in the city of Nukus and beyond will be explored and developed, creating a sustainable framework for a resilient and equitable future.",
  },
  {
    number: "2",
    title: "Water of the Aral region",
    image: "https://images.pexels.com/photos/9951050/pexels-photo-9951050.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description:
      "In the region where water evaporated by human activities we want to bring back water in everyday life to increase the quality of life. As a new benchmark for the water ecosystem, this theme explores new opportunities, partnerships, tools and collaborations that will elevate the most precious source of. Reshaping the future of the region through new water ethics, and principles of the bioregional design.",
  },
];

const programmeOutcomes = [
  "Design prototypes connected to the core themes developed within the research groups.",
  "Media publication capturing the process, key research questions and prototype solutions will be published within 2026.",
  "First ideas  will be shared with the global creative public during Milan Design Week 2026 and Aral Culture Summit 2026, additional cultural outposts for the prototypes exhibition might also take place.",
  "Key research outcomes and ideas will be shared in an exhibition and publication during the second Aral Culture Summit in October 2026 as part of the programme.",
];

export const ResearchThemesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px]">
        <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <header className="bg-[#fcf4eb]">
            <div className="flex min-h-[218px] flex-col justify-start px-[20px] py-[25px] md:px-[51px]">
              <h2 className="[font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-[42px] font-normal leading-none tracking-[0] text-black md:text-7xl">
                Core research themes
              </h2>
            </div>
            <img className="h-px w-full" alt="Line" src="/line-40.svg" />
          </header>
          <div className="bg-[#fcf4eb] px-[20px] py-[24px] md:px-[51px]">
            <p className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] max-w-[522px] text-base font-medium leading-6 tracking-[0] text-black">
              The two first themes of the Aral School Pilot examine food and
              water. Two interconnected research topics that are influencing the
              way we produce and consume food, our livelihood and global
              biodiversity. We need to develop and speculate new strategies and
              design new systems to prototype possible futures in order to
              inspire, building hope. The topics are at the same time our alibi
              and point of departure to introduce holistic eco-systemic projects
              that would build a new bioregion from molecular to bioregional
              scale.
            </p>
          </div>
        </div>
        <div className="px-5 py-10 md:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[22px]">
            {researchThemes.map((theme) => (
              <article key={theme.number} className="relative">
                <div className="relative overflow-hidden">
                  <img
                    className="block aspect-[595/388] w-full object-cover"
                    alt="Programme image"
                    src={theme.image}
                  />
                  <div className="absolute left-0 top-[58%] w-[50.29%] min-w-[240px] max-w-[347px]">
                    <div className="bg-[#f96243] px-[28px] py-[30px] md:px-[40px] md:py-[34px]">
                      <h3 className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-2xl font-normal leading-tight tracking-[0] text-black md:text-3xl">
                        {theme.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute left-[16px] top-6 flex h-[85px] w-[85px] items-center justify-center border border-solid border-black bg-[#fcf4eb] md:left-[115px]">
                    <span className="[font-family:'Season_Sans_TRIAL-Light',Helvetica] text-3xl font-light leading-none tracking-[0] text-black">
                      {theme.number}
                    </span>
                  </div>
                </div>
                <Card className="relative -mt-2 ml-auto w-[85.22%] rounded-none border-0 bg-white shadow-none">
                  <CardContent className="p-6 md:px-10 md:py-12">
                    <p className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-black">
                      {theme.description}
                    </p>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
        <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        <div className="grid grid-cols-1 lg:grid-cols-[346px_minmax(0,1fr)]">
          <div className="px-5 pt-0 lg:px-5">
            <div className="relative h-[366px] w-full max-w-[346px]">
              <img className="h-full w-full" alt="Line" src="/line-23.svg" />
              <div className="absolute bottom-0 left-0 h-5 w-5 bg-[#f96243]" />
            </div>
          </div>
          <div className="w-full">
            <header className="bg-[#fcf4eb]">
              <div className="flex min-h-[218px] items-start px-[20px] py-[25px] md:px-[51px]">
                <h2 className="[font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-[42px] font-normal leading-none tracking-[0] text-black md:text-7xl">
                  Programme outcomes
                </h2>
              </div>
              <img className="h-px w-full" alt="Line" src="/line-40.svg" />
            </header>
            <div className="grid grid-cols-1 gap-5 px-5 py-10 md:grid-cols-2 lg:grid-cols-4">
              {programmeOutcomes.map((outcome, index) => (
                <Card
                  key={`programme-outcome-${index}`}
                  className="rounded-none border-0 bg-transparent shadow-none"
                >
                  <CardContent className="p-0">
                    <article className="min-h-[249px] bg-black px-[31px] py-[34px]">
                      <p className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium leading-[22px] tracking-[0] text-white">
                        {outcome}
                      </p>
                    </article>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-0 pb-14 pt-2">
          <div className="relative h-[136px] w-[117px]">
            <img className="h-full w-full" alt="Line" src="/line-24-1.svg" />
            <div className="absolute bottom-0 left-0 h-5 w-5 border border-solid border-black" />
          </div>
          <div className="relative h-[171px] w-[152px]">
            <img className="h-full w-full" alt="Line" src="/line-24.svg" />
            <div className="absolute bottom-0 right-0 h-5 w-5 border border-solid border-black" />
          </div>
        </div>
        <img className="h-px w-full" alt="Line" src="/line-9.svg" />
      </div>
    </section>
  );
};
