import { Card, CardContent } from "../../../../components/ui/card";

const teamLead = {
  name: "Gayane Umerova",
  role: "Project Chair",
  image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  paragraphs: [
    <>
      Gayane Umerova is dedicated to developing the culture sector in
      Uzbekistan. Head of the Department of Creative Economy and Tourism of the
      Administration of the President of the Republic of Uzbekistan and
      Chairperson of the{" "}
      <a
        href="https://acdf.uz/"
        rel="noopener noreferrer"
        target="_blank"
        className="underline"
      >
        Uzbekistan Art and Culture Development Foundation
      </a>{" "}
      (ACDF), Gayane Umerova is at the helm of building Uzbekistan&apos;s
      cultural infrastructure. Her efforts are bringing the nation&apos;s art,
      artists, and cultural heritage into the global spotlight. Currently, she
      is overseeing the restoration and development of the Centre for
      Contemporary Arts in Tashkent, poised to become a new cultural hub for the
      region, and is the commissioner of the Bukhara Biennial (5 September - 20
      November 2025). She has spearheaded the inaugural Aral Culture Summit
      (April 4-6, 2025); is driving the construction of the new Uzbekistan
      National Museum designed by Tadao Ando and is leading the forthcoming 43rd
      session of the UNESCO General Conference that will take place in Samarkand
      on 30 October - 13 November 2025. She is the commissioner for the
      Uzbekistan Pavilion at the Venice Biennale Arte and Architettura since
      2021 as well as for Uzbekistan&apos;s participation in Expo 2025 Osaka,
      among other significant projects.
    </>,
    "Committed to boosting Uzbekistan's prominence on the international culture scene, Umerova serves as the Chairperson of the National Commission of Uzbekistan on UNESCO Affairs under the Cabinet of Ministers and in April 2025 has been awarded France's Order of Arts and Literature. Her public service commitment is evident in her dedication to creating opportunities for young people in Uzbekistan's cultural sector and fostering a cultural economy that unites communities and generations.",
  ],
};

const programDirectors = [
  {
    name: "Jan Boelen",
    role: "Program Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    paragraphs: [
      "Jan Boelen is a curator of design, architecture, and contemporary art. He is the artistic director of Atelier LUMA, an experimental laboratory for design in Arles, France. Boelen studied Product Design at Genk and is the founder and former artistic director of Z33 – House for contemporary art in Hasselt, Belgium. He was founder of the Master Social design at the Design Academy of Eindhoven till 2020 and Rektor of the Karlsruhe University of Arts and Design from 2019 till 2023. In 2014 he curated BIO50, the design biennial of Ljubljana in Slovenia. He was curator of the 4th Istanbul Design Biennial in Istanbul (2018) and initiated Manifesta 9 in Belgium (2012). Lastly, Boelen curated the Lithuanian Pavilion Planet of People in the Venice Architecture Biennial (2021).",
      "Over the years he has been fashioning projects and exhibitions that encourage the visitor to look at everyday objects in a novel manner.",
      "Boelen recently edited Social Matter, Social Design: For Good or Bad, all Design is Social (Valiz, 2020), and Muller Van Severen: Dialogue (Walther Koenig, 2021) and Atelier Luma, Bioregional design practices (Luma, 2023) His writing addresses the implications of design in everyday life and how artistic practices can shape the discipline.",
    ],
  },
  {
    name: "Ksenia Starikova-Pozzoli",
    role: "Program Lead",
    image: "/profile-picture-7.png",
    paragraphs: [
      "Ksenia is a design curator and creative strategist with a focus on circular innovations and regenerative place making. London School of Economics and Stanford graduate, she brings over 15 years of creative leadership and programme management across a variety of impact-driven brands, sectors and organisations. A journalist by background, she gradually centered her thinking at the intersection of science, design & new technologies, leading one of WPP design & innovation practices in London and NYC.",
      "Her subsequent brand leadership of the iconic Design Hotels platform allowed for a greater focus on the topics of Community, Impact & Sustainability and led to her authorship of the first Regenerative Placemaking framework in Travel, widely adopted by the industry since then across the globe.",
      "Driven by her interests in sustainable design practices, Ksenia now runs her own design studio, working with impact and climate-driven ventures and organisations on their content, programming and community initiatives.",
      "She is also a curator of the largest climate tech festival in the UK, The Heat, and is focused on supporting a diverse range of pioneering bio design innovations in Fashion, Design and Architecture as part of it.",
    ],
  },
];

const operationsTeam = [
  {
    name: "Khudoyorkhon Abdujabborov",
    role: "Project Manager",
    image: "/profile-picture-6.png",
    paragraphs: [
      'Khudoyorkhon Abdujabborov is a project manager at the Aral School, responsible for coordinating partnerships, exhibitions, and local implementation across Karakalpakstan. He brings extensive experience in international cultural collaboration, having managed key initiatives for the Uzbekistan Art and Culture Development Foundation, including the exhibition "A Glimpse Through Time: The Legacy of Khudaybergen Devanov" at UNESCO in Paris and the redevelopment of the permanent collection at the State Museum of Arts named after I.V. Savitsky in Nukus. Prior to this, he worked in diplomatic and cultural roles at the Embassy of Poland in Uzbekistan and the El-Yurt Umidi Foundation. He holds a degree in International Relations from Kazan Federal University and is also a laureate of an international circus arts festival, with performance experience in Uzbekistan, Mexico, and the USA.',
    ],
  },
  {
    name: "Gulnara Joldasbaeva",
    role: "Local Coordinator",
    image: "/profile-picture-5.png",
    paragraphs: [
      "Gulnara Joldasbaeva is a cultural producer, educator, and local coordinator of the Aral Culture Summit in Karakalpakstan. She curates interdisciplinary events connecting ecology, heritage, and contemporary art. As part of the School, she brings together artists, scientists, and community members to reflect on the Aral Sea crisis through creative formats. In partnership with UNDP, she also launched Bilim, a platform offering programming and language education to young women in underrepresented communities. Her experience in ecological education and local cultural engagement makes her an essential link between artistic content and regional relevance.",
    ],
  },
  {
    name: "Cyril Zammit",
    role: "Advisor",
    image: "/profile-picture-3.png",
    paragraphs: [
      "Cyril Zammit is an independent advisor and design consultant, with a career devoted to supporting cultural and creative initiatives across the Middle East and Central Asia.",
      "He began his professional journey at the Institut Français in Prague, followed by a role at the Cultural Department of the French Embassy in London. He later moved to Switzerland, where he oversaw international sponsorship for the Montreux Jazz Festival, before taking on cultural sponsorship roles at UBS and HSBC Private Bank.",
      "In 2009, Cyril relocated to the UAE, where he played a key role in launching Abu Dhabi Art, and went on to establish Design Days Dubai and Dubai Design Week. He later served as an advisor to Dubai Culture & Arts Authority, and subsequently joined the UAE Ministry of Foreign Affairs & International Cooperation as a Cultural Affairs Expert in the Office of Public and Cultural Diplomacy.",
      "Since March 2022, he has been advising the Uzbekistan Art and Culture Development Foundation. In 2023, he also became an advisor to L'ÉCOLE Middle East in Dubai and was appointed Design Consultant to the Royal Commission for AlUla. Cyril is also a regular design columnist for Esquire Middle East.",
    ],
  },
  {
    name: "Anastasia Sinitsyna",
    role: "Research & Development",
    image: "/profile-picture-4.png",
    paragraphs: [
      "Anastasia Sinitsyna is a researcher and cultural consultant working at the intersection of environmental humanities, design, and education. She is currently based in Venice, Italy, where she coordinates international exhibitions and cultural initiatives, including the Spanish (2023) and Uzbekistan (2022-2025) National Pavilions at the Venice Biennale. Her work focuses on ecological transformation, sustainable futures, and the role of art and education in reimagining cultural and physical landscapes.",
      "Anastasia also leads research and programming for the Aral Culture Summit, a long-term initiative of ACDF aimed at supporting biocultural diversity and ecological regeneration in Karakalpakstan and the broader Aral Sea region",
    ],
  },
];

const mentorCategories = [
  {
    title: "Water",
    members: [
      {
        name: "Sagitjan Aytjanov",
        image: "/ellipse-147.png",
        framed: true,
        paragraphs: [
          "Sagitjan has a profound experience in the field of complex projects management with technical expertise in programs planning, management, monitoring and evaluation, community empowerment, employment and business support. He has been engaged in a wide range of development, programming and implementation processes of UN programmes for the last 20 years both at national and international level.",
          "Sagitjan worked as WASH Officer for UNICEF Country Office in Uzbekistan by managing several UN Joint Programmes in Karakalpakstan, focused on improving access to safe drinking water in remote communities of Karakalpakstan, improving WASH facilities in 25 schools and 36 healthcare facilities and the revision of WASH hardware and software standards (2021-2025).",
          'He was also the Project Manager for UNDP Uzbekistan "Promoting Youth Employment in Uzbekistan" on managing youth employment and entrepreneurial skills development. He was also a Team Leader on Social Services/Monitoring & Evaluation for several UN Joint Programmes in Aral Sea region (2013-2014; 2016-2019).',
          "At international level, Sagitjan served as Planning, Monitoring and Evaluation Officer for UN Liberia Resident Coordinator's Office, where he was engaged in coordination of 16 UN agencies during the EVD outbreak (2014-2016).",
        ],
      },
      {
        name: "Eva Pfannes",
        image: "/profile-picture.png",
        paragraphs: [
          'Eva is a passionate practitioner and frequent key-note speaker who thrives working in complex and fast developing environments with public sector and cultural clients, focused on the benefits for society and the natural environment. She co-founded OOZE architects; urbanists with her partner Sylvain Hartenberg in Rotterdam. "OOZE is championing a culture of innovation, inclusion and integration: radical system thinkers and doers, passionate collaborators leaving no one behind, and catalysts\' designers that foster innovative interventions for real change, from the smallest community to the world" (quote Henk Ovink, 2025). Eva specializes in urban strategies, blue-green infrastructure and bankable concept developments that mitigate and adapt to climate change impacts with Nature-based and Culture-based solutions.',
          "For the Dutch Water as Leverage programme, she is the team lead for the CITY OF 1000 TANKS alliance in Chennai, developing a water balance model across the city to make the most inclusive, efficient and economic use of water locally. Água Carioca, an urban circulatory system for Brazil, received the Holcim Prize for Sustainable Development. As co-curator and lead designer for the International Architecture Biennial Rotterdam (IABR) Eva and her team developed a neighbourhood energy transition model prioritizing community ownership, multi-scalar benefits, and actionable implementation frameworks.",
        ],
      },
    ],
  },
  {
    title: "Food",
    members: [
      {
        name: "Elena Kan",
        image: "/profile-picture-1.png",
        paragraphs: [
          'Elena Kan is the director of a young NGO "KIVA Center" dedicated to advancing sustainable development by integrating science, education, research, production, and agribusiness - one of the few civil society organizations of its kind in the Aral Sea region.',
          "With a background in language studies and ecology, Elena has built extensive experience in capacity building for efficient land and water use in agriculture. Among her current engagements is the promotion of effective production and export of alternzative, low-resource oilseed crops among farmers and agripreneurs. Elena also collaborates with protected areas to enhance their educational programs and eco-tourism capacities through non-formal learning on natural resource conservation and fostering civic activism for environmental protection. She strives to drive positive changes in both urban and rural areas, contributing to nature conservation and the resilience of local ecosystems and communities through education and collaboration.",
        ],
      },
      {
        name: "Michelle Skelsgaard",
        image: "/profile-picture-2.png",
        paragraphs: [
          "Michelle is a Danish economic geographer, policy advisor, and project manager with a strong focus on sustainable agri-food systems and agroecological transformations. She hold an MSc in Geography with a specialization in socio-economic transformations, and have extensive experience working across civil society, research, and practice.",
          "She currently work as a food policy advisor at the Danish environmental NGO Rådet for Grøn Omstilling (Green Transition Denmark), where she  develops and leads projects at the intersection of policy, sustainability, and agriculture, including ecological economics, seed sovereignty, and grassroots innovation in food and farming systems.",
          "Her professional background spans research, advisory, and editorial roles across multiple countries and contexts. She  co-founded interdisciplinary platforms (e.g. The Preserve Journal, KOMPOST Studio), all dedicated to the exploration and celebration of sustainable food culture, place-based knowledge, and transformative storytelling. She is deeply engaged in regional innovation networks and participatory learning formats, with a particular interest in the regeneration and revitalisation of rural landscapes, practices, and communities.",
        ],
      },
    ],
  },
];

const sectionHeaderClass =
  "[font-family:'Season_Mix_TRIAL-Regular',Helvetica] font-normal text-black text-[44px] leading-none tracking-[0]";
const nameClass =
  "[font-family:'Season_Mix_TRIAL-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-10";
const roleClass =
  "[font-family:'Season_Sans_TRIAL-Medium',Helvetica] font-medium text-black text-[22px] leading-[44px] tracking-[0]";
const bodyClass =
  "[font-family:'Season_Sans_TRIAL-Medium',Helvetica] font-medium text-black text-base leading-6 tracking-[0]";

type Person = {
  name: string;
  role?: string;
  image: string;
  framed?: boolean;
  paragraphs: (string | JSX.Element)[];
};

const IntroDecor = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 hidden xl:block">
      <div className="mx-auto max-w-[1440px]">
        <div className="absolute left-[355px] top-[39px] flex h-[260px] w-[260px]">
          <div className="h-5 w-5 bg-black" />
          <img
            className="mt-[19.3px] h-[240.71px] w-[240.71px]"
            alt="Line"
            src="/line-27.svg"
          />
        </div>
        <div className="absolute left-[-3px] top-[698px] h-[378px] w-[378px]">
          <img
            className="absolute left-[3px] top-[-1px] h-[369px] w-[366px]"
            alt="Line"
            src="/line-28-2.svg"
          />
          <div className="absolute left-[358px] top-[358px] h-5 w-5 bg-black" />
        </div>
      </div>
    </div>
  );
};

const MentorsDecor = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 hidden xl:block">
      <div className="mx-auto max-w-[1440px]">
        <div className="absolute left-[720px] top-0 h-[364px] w-[365px]">
          <img
            className="absolute left-0 top-[-1px] h-[355px] w-[355px]"
            alt="Line"
            src="/line-28-3.svg"
          />
          <div className="absolute left-[345px] top-[344px] h-5 w-5 bg-black" />
        </div>
      </div>
    </div>
  );
};

const Portrait = ({
  person,
  size = "large",
}: {
  person: Person;
  size?: "large" | "small";
}) => {
  const dimension =
    size === "large"
      ? "h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[336px] lg:w-[336px]"
      : "h-[168px] w-[168px] sm:h-[220px] sm:w-[220px] lg:h-[336px] lg:w-[336px]";

  if (person.framed) {
    return (
      <div className={`relative shrink-0 border border-black ${dimension}`}>
        <img
          className="absolute left-px top-px h-[calc(100%-2px)] w-[calc(100%-2px)]"
          alt="Line"
          src="/line-25.svg"
        />
        <div
          className="absolute left-[6.845%] top-[7.738%] h-[86.905%] w-[86.905%] bg-cover bg-[50%_50%]"
          style={{ backgroundImage: `url(${person.image})` }}
        />
      </div>
    );
  }

  return (
    <img
      className={`shrink-0 object-cover ${dimension}`}
      alt="Profile picture"
      src={person.image}
    />
  );
};

const PersonFeature = ({
  person,
  reverse = false,
  compact = false,
}: {
  person: Person;
  reverse?: boolean;
  compact?: boolean;
}) => {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none">
      <CardContent className="p-0">
        <article
          className={`grid items-start gap-8 lg:grid-cols-[336px_minmax(0,1fr)] ${
            reverse ? "lg:grid-cols-[minmax(0,1fr)_336px]" : ""
          }`}
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <Portrait person={person} size={compact ? "small" : "large"} />
          </div>
          <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
            <header className="space-y-1 pt-1">
              <h3 className={nameClass}>{person.name}</h3>
              {person.role ? <p className={roleClass}>{person.role}</p> : null}
            </header>
            <div className="space-y-3">
              {person.paragraphs.map((paragraph, index) => (
                <p
                  key={`${person.name}-paragraph-${index}`}
                  className={bodyClass}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

const SmallProfileCard = ({ person }: { person: Person }) => {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none">
      <CardContent className="p-0">
        <article className="space-y-6">
          <Portrait person={person} size="small" />
          <header className="space-y-1">
            <h3 className={nameClass}>
              {person.name}
              <br />
              {person.role ? (
                <span className={roleClass}>{person.role}</span>
              ) : null}
            </h3>
          </header>
          <div className="space-y-3">
            {person.paragraphs.map((paragraph, index) => (
              <p
                key={`${person.name}-paragraph-${index}`}
                className={bodyClass}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

const Banner = ({ title }: { title: string }) => {
  return (
    <header className="relative min-h-[218px] border-b border-black bg-[#fcf4eb]">
      <div className="px-8 py-6 sm:px-12 sm:py-7">
        <h2 className="[font-family:'Season_Mix_TRIAL-Regular',Helvetica] text-5xl font-normal leading-none tracking-[0] text-black sm:text-6xl">
          {title}
        </h2>
      </div>
      <img
        className="absolute bottom-0 left-0 h-px w-full"
        alt="Line"
        src="/line-40.svg"
      />
    </header>
  );
};

export const CoreTeamSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fcf4eb] text-black">
      <IntroDecor />
      <div className="mx-auto w-full max-w-[1440px]">
        <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="hidden xl:block" />
          <Banner title="The team" />
        </div>
        <div className="px-5 pb-16 pt-20 sm:px-8 lg:px-12">
          <div className="ml-auto max-w-[1050px]">
            <PersonFeature person={teamLead} />
          </div>
        </div>
        <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        <div className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-10">
            {programDirectors.map((person) => (
              <PersonFeature key={person.name} person={person} compact />
            ))}
          </div>
        </div>
        <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        <div className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {operationsTeam.map((person) => (
              <SmallProfileCard key={person.name} person={person} />
            ))}
          </div>
        </div>
        <img className="h-px w-full" alt="Div LINE" src="/line-9.svg" />
        <div className="relative grid grid-cols-1 xl:grid-cols-[718px_minmax(0,1fr)]">
          <Banner title="Mentors & Experts" />
          <div className="relative">
            <MentorsDecor />
          </div>
        </div>
        <div className="px-5 pb-20 pt-9 sm:px-8 lg:px-[18px]">
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-10">
            {mentorCategories.map((category) => (
              <section key={category.title} className="space-y-10">
                <header>
                  <h2 className={sectionHeaderClass}>{category.title}</h2>
                </header>
                <div className="space-y-16">
                  {category.members.map((person) => (
                    <PersonFeature key={person.name} person={person} compact />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
