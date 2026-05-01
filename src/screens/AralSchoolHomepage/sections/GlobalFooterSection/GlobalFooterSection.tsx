import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const socialLinks = [{ label: "LinkedIn" }, { label: "Instagram" }];

const policyLinks = [{ label: "Privacy policy" }, { label: "Cookie policy" }];

const organiserLogos = [
  {
    src: "/group.png",
    className: "absolute left-0 top-0 h-full w-[30.34%]",
    alt: "Group",
  },
  {
    src: "/vector-5.svg",
    className: "absolute left-[43.33%] top-0 h-[10.31%] w-[5.49%]",
    alt: "Vector",
  },
  {
    src: "/vector.svg",
    className: "absolute left-[48.89%] top-[4.11%] h-[7.14%] w-[3.48%]",
    alt: "Vector",
  },
  {
    src: "/vector-43.svg",
    className: "absolute left-[52.52%] top-0 h-[11.26%] w-[4.40%]",
    alt: "Vector",
  },
  {
    src: "/vector-2.svg",
    className: "absolute left-[57.53%] top-[3.95%] h-[7.46%] w-[3.53%]",
    alt: "Vector",
  },
  {
    src: "/vector-4.svg",
    className: "absolute left-[61.45%] top-0 h-[11.10%] w-[4.62%]",
    alt: "Vector",
  },
  {
    src: "/vector-36.svg",
    className: "absolute left-[66.17%] top-0 h-[10.95%] w-[2.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-25.svg",
    className: "absolute left-[68.62%] top-[3.95%] h-[7.46%] w-[3.10%]",
    alt: "Vector",
  },
  {
    src: "/vector-3.svg",
    className: "absolute left-[72.06%] top-0 h-[9.70%] w-[2.81%]",
    alt: "Vector",
  },
  {
    src: "/vector-31.svg",
    className: "absolute left-[75.16%] top-[3.95%] h-[7.46%] w-[3.86%]",
    alt: "Vector",
  },
  {
    src: "/vector-1.svg",
    className: "absolute left-[79.22%] top-[3.93%] h-[7.32%] w-[4.69%]",
    alt: "Vector",
  },
  {
    src: "/vector-6.svg",
    className: "absolute left-[43.05%] top-[17.79%] h-[10.23%] w-[5.71%]",
    alt: "Vector",
  },
  {
    src: "/vector-23.svg",
    className: "absolute left-[48.84%] top-[20.70%] h-[7.32%] w-[3.19%]",
    alt: "Vector",
  },
  {
    src: "/vector-3.svg",
    className: "absolute left-[52.24%] top-[18.48%] h-[9.70%] w-[2.81%]",
    alt: "Vector",
  },
  {
    src: "/vector-12.svg",
    className: "absolute left-[57.10%] top-[20.72%] h-[7.46%] w-[3.94%]",
    alt: "Vector",
  },
  {
    src: "/vector-1.svg",
    className: "absolute left-[61.18%] top-[20.70%] h-[7.32%] w-[4.69%]",
    alt: "Vector",
  },
  {
    src: "/vector-13.svg",
    className: "absolute left-[66.25%] top-[16.92%] h-[11.26%] w-[4.40%]",
    alt: "Vector",
  },
  {
    src: "/vector-42.svg",
    className: "absolute left-[72.94%] top-[17.72%] h-[10.46%] w-[4.60%]",
    alt: "Vector",
  },
  {
    src: "/vector-32.svg",
    className: "absolute left-[77.96%] top-[20.80%] h-[7.38%] w-[4.69%]",
    alt: "Vector",
  },
  {
    src: "/vector-15.svg",
    className: "absolute left-[82.84%] top-[16.93%] h-[11.10%] w-[2.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-3.svg",
    className: "absolute left-[85.15%] top-[18.48%] h-[9.70%] w-[2.81%]",
    alt: "Vector",
  },
  {
    src: "/vector-10.svg",
    className: "absolute left-[88.06%] top-[20.80%] h-[7.38%] w-[4.60%]",
    alt: "Vector",
  },
  {
    src: "/vector-9.svg",
    className: "absolute left-[92.94%] top-[20.70%] h-[7.32%] w-[3.19%]",
    alt: "Vector",
  },
  {
    src: "/vector-2.svg",
    className: "absolute left-[96.47%] top-[20.72%] h-[7.46%] w-[3.53%]",
    alt: "Vector",
  },
  {
    src: "/vector-21.svg",
    className: "absolute left-[43.43%] top-[34.64%] h-[10.15%] w-[5.54%]",
    alt: "Vector",
  },
  {
    src: "/vector-2.svg",
    className: "absolute left-[49.55%] top-[37.48%] h-[7.46%] w-[3.53%]",
    alt: "Vector",
  },
  {
    src: "/vector-38.svg",
    className: "absolute left-[53.20%] top-[37.64%] h-[7.22%] w-[4.44%]",
    alt: "Vector",
  },
  {
    src: "/vector-2.svg",
    className: "absolute left-[57.61%] top-[37.48%] h-[7.46%] w-[3.53%]",
    alt: "Vector",
  },
  {
    src: "/vector-15.svg",
    className: "absolute left-[61.54%] top-[33.69%] h-[11.10%] w-[2.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-26.svg",
    className: "absolute left-[64.02%] top-[37.49%] h-[7.46%] w-[4.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-20.svg",
    className: "absolute left-[68.49%] top-[37.49%] h-[10.50%] w-[4.38%]",
    alt: "Vector",
  },
  {
    src: "/vector-30.svg",
    className: "absolute left-[73.32%] top-[37.47%] h-[7.32%] w-[7.10%]",
    alt: "Vector",
  },
  {
    src: "/vector-2.svg",
    className: "absolute left-[80.79%] top-[37.48%] h-[7.46%] w-[3.53%]",
    alt: "Vector",
  },
  {
    src: "/vector-17.svg",
    className: "absolute left-[84.75%] top-[37.47%] h-[7.32%] w-[4.67%]",
    alt: "Vector",
  },
  {
    src: "/vector-3.svg",
    className: "absolute left-[89.60%] top-[35.24%] h-[9.70%] w-[2.81%]",
    alt: "Vector",
  },
  {
    src: "/vector-28.svg",
    className: "absolute left-[43.43%] top-[51.41%] h-[10.15%] w-[4.28%]",
    alt: "Vector",
  },
  {
    src: "/vector-26.svg",
    className: "absolute left-[47.82%] top-[54.25%] h-[7.46%] w-[4.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-32.svg",
    className: "absolute left-[52.26%] top-[54.33%] h-[7.38%] w-[4.69%]",
    alt: "Vector",
  },
  {
    src: "/vector-14.svg",
    className: "absolute left-[57.17%] top-[54.24%] h-[7.32%] w-[4.68%]",
    alt: "Vector",
  },
  {
    src: "/vector-18.svg",
    className: "absolute left-[62.22%] top-[50.46%] h-[11.29%] w-[4.43%]",
    alt: "Vector",
  },
  {
    src: "/vector-31.svg",
    className: "absolute left-[67.00%] top-[54.25%] h-[7.46%] w-[3.86%]",
    alt: "Vector",
  },
  {
    src: "/vector-3.svg",
    className: "absolute left-[70.96%] top-[52.01%] h-[9.70%] w-[2.81%]",
    alt: "Vector",
  },
  {
    src: "/vector-39.svg",
    className: "absolute left-[73.96%] top-[50.60%] h-[10.96%] w-[2.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-26.svg",
    className: "absolute left-[76.47%] top-[54.25%] h-[7.46%] w-[4.08%]",
    alt: "Vector",
  },
  {
    src: "/vector-1.svg",
    className: "absolute left-[80.99%] top-[54.24%] h-[7.32%] w-[4.69%]",
    alt: "Vector",
  },
];

export const GlobalFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#fcf4eb]">
      <div className="mx-auto w-full max-w-[1443px] px-[18px] pt-[46px]">
        <div className="h-px w-full">
          <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        </div>
        <div className="grid grid-cols-1 gap-y-10 border-b border-transparent py-[84px] lg:grid-cols-[346px_1fr_1fr] lg:gap-x-[19px]">
          <section className="flex min-w-0 flex-col justify-between lg:min-h-[436px]">
            <div className="space-y-0">
              <h2 className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-[16.1px] text-black">
                CONTACT
              </h2>
              <p className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] mt-0 text-base font-normal leading-[16.1px] text-black">
                Uzbekistan Art and Culture Development Foundation Address: 1,
                Taras Shevchenko str., Tashkent, 100029, Uzbekistan
                <br />
                Phone:{" "}
                <a
                  href="tel:+998 (71) 207 40 80"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline"
                >
                  +998 (71) 207 40 80
                </a>
              </p>
              <div className="mt-4">
                <h3 className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-[16.1px] text-black">
                  GENERAL INQUIRIES
                </h3>
                <p className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal leading-[16.1px] text-black">
                  info@aralschool.uz
                </p>
              </div>
            </div>
            <div className="pt-10 lg:pt-0">
              <img
                className="h-auto w-full max-w-[682px]"
                alt="Logo aral school"
                src="/logo---aral-school-.svg"
              />
            </div>
          </section>
          <section className="border-t border-black pt-10 lg:border-t-0 lg:border-l lg:pl-[18px] lg:pt-0">
            <div className="max-w-[220px]">
              <h2 className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-[16.1px] text-black">
                SOCIAL MEDIA
              </h2>
              <nav className="mt-0 flex flex-col">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] inline-flex items-center gap-1 text-base font-normal leading-[16.1px] text-black"
                  >
                    <span>{item.label}</span>
                    <span className="[font-family:'Season_Sans_TRIAL-Medium',Helvetica] font-medium">
                      ↗
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </section>
          <section className="border-t border-black pt-10 lg:border-t-0 lg:border-l lg:pl-[59px] lg:pt-0">
            <div className="max-w-[684px]">
              <h2 className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-[16.1px] text-black">
                NEWSLETTER
              </h2>
              <Card className="mt-[26px] w-full max-w-[684px] rounded-none border-0 bg-transparent p-0 shadow-none">
                <CardContent className="p-0">
                  <form className="flex w-full max-w-[684px] flex-col gap-3 sm:flex-row sm:items-stretch">
                    <Input
                      type="email"
                      defaultValue=""
                      placeholder="Enter your email"
                      className="h-[68px] flex-1 rounded-none border-black bg-transparent px-[39px] [font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal text-black placeholder:text-[#808e8d] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      className="h-[68px] rounded-none border border-black px-8 [font-family:'Season_Sans_TRIAL-Medium',Helvetica] text-base font-medium text-black hover:bg-black hover:text-[#fcf4eb]"
                    >
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="mt-24 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
                <div className="w-full max-w-[241px]">
                  <div className="relative h-[136px] w-[241px] max-w-full">
                    {organiserLogos.map((logo, index) => (
                      <img
                        key={`${logo.src}-${index}`}
                        className={logo.className}
                        alt={logo.alt}
                        src={logo.src}
                      />
                    ))}
                  </div>
                </div>
                <div className="max-w-[220px]">
                  <h3 className="[font-family:'Season_Sans_TRIAL-Bold',Helvetica] text-base font-bold leading-[16.1px] text-black">
                    Organiser
                  </h3>
                  <p className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal leading-[16.1px] text-black">
                    Uzbekistan Art and Culture Development Foundation
                  </p>
                </div>
              </div>
              <nav className="mt-8 flex max-w-[220px] flex-col xl:ml-auto">
                {policyLinks.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="[font-family:'Season_Sans_TRIAL-Regular',Helvetica] text-base font-normal leading-[16.1px] text-black"
                  >
                    • {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </section>
        </div>
        <div className="h-px w-full">
          <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        </div>
      </div>
    </footer>
  );
};
