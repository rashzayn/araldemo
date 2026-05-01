import { Card, CardContent } from "../../../../components/ui/card";

const descriptionParts = [
  { text: "The Aral", className: "font-medium" },
  {
    text: " ",
    className: "[font-family:'Season_Mix_TRIAL-Regular',Helvetica]",
  },
  { text: "Sea", className: "font-medium" },
  {
    text: " is a place where all the most urgent concerns of today come together. Soil, water, energy, food, textiles and air quality – it can be seen as the live laboratory of the future and can help us rethink what's possible for many generations to come.",
    className: "[font-family:'Season_Mix_TRIAL-Regular',Helvetica]",
  },
];

export const ProgramHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-transparent py-8 md:py-10 lg:py-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-4 px-4 sm:px-5 sm:gap-6 lg:grid-cols-[686px_minmax(0,1fr)] lg:gap-[34px]">
        <figure className="m-0 w-full overflow-hidden">
          <img
            className="block h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            alt="Aral Sea landscape"
            src="https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            loading="lazy"
          />
        </figure>
        <Card className="rounded-none border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="w-full">
              <img
                className="block h-px w-full"
                alt="Line"
                src="/line-38.svg"
              />
              <div className="bg-[#fcf4eb] px-6 py-8 md:px-10 md:py-12 lg:min-h-[507px] lg:px-[47px] lg:py-[95px]">
                <p className="[font-family:'Season_Mix_TRIAL-Medium',Helvetica] text-[28px] font-normal leading-[1.25] tracking-[0] text-black md:text-[32px] lg:max-w-[598px] lg:text-4xl">
                  {descriptionParts.map((part, index) => (
                    <span
                      key={`description-part-${index}`}
                      className={part.className}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
              </div>
              <img
                className="block h-px w-full"
                alt="Line"
                src="/line-38.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
