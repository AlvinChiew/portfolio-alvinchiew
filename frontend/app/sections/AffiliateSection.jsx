import Link from "next/link";

const affiliates = [
  { name: "EduNation", url: "https://www.bac.edu.my/" },
  { name: "East 101", url: "https://www.east101.com/" },
  { name: "Top Glove", url: "https://www.topglove.com/" },
  { name: "Intel", url: "https://www.intel.com/" },
  { name: "Naluri", url: "https://www.naluri.life/" },
  { name: "INSCALE", url: "https://www.inscale.net/" },
  { name: "Topdanmark", url: "https://www.topdanmark.com/en/" },
  {
    name: "DHL",
    url: "https://group.dhl.com/en/about-us/corporate-divisions/it-services.html",
  },
];

const AffiliateSection = () => {
  return (
    <section id="affiliates" className="py-8 lg:py-16">
      <h2 className="pb-6 text-center text-3xl font-bold text-white md:pb-12">
        Professional Affiliates
      </h2>
      <ul className="flex flex-wrap justify-center">
        {affiliates.map(({ name, url }, index) => (
          <Link
            href={url}
            target="_blank"
            className="hover:animate-bounce-custom mb-2 mr-2  box-border min-w-12 rounded-md border-2 border-primary-300 px-4 py-2  text-xl hover:border-none hover:bg-slate-200 hover:font-bold hover:text-slate-900 lg:mx-2 lg:my-4 lg:border-4 lg:text-3xl"
            key={index}
          >
            {name}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default AffiliateSection;
