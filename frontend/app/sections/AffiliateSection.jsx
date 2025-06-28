import Link from "next/link";

const affiliates = [
  {
    name: "DHL",
    url: "https://group.dhl.com/en/about-us/corporate-divisions/it-services.html",
  },
  { name: "Topdanmark", url: "https://www.topdanmark.com/en/" },
  { name: "INSCALE", url: "https://www.inscale.net/" },
  { name: "Naluri", url: "https://www.naluri.life/" },
  { name: "Intel", url: "https://www.intel.com/" },
  { name: "Top Glove", url: "https://www.topglove.com/" },
  { name: "East 101", url: "https://www.east101.com/" },
  { name: "EduNation", url: "https://www.bac.edu.my/" },
];

const AffiliateSection = () => {
  return (
    <section id="affiliates" className="pt-24 lg:pt-28">
      <h2 className="pb-6 text-center text-3xl font-bold text-white md:pb-12">
        Professional Affiliates
      </h2>
      <ul className="flex flex-wrap justify-center">
        {affiliates.map(({ name, url }, index) => (
          <Link
            href={url}
            target="_blank"
            className="hover:animate-bounce-custom mb-2 mr-2 box-border min-w-12 rounded-md border-2 border-primary-300 px-4 py-2  text-lg hover:border-none hover:bg-slate-200 hover:font-bold hover:text-slate-900 lg:mx-2 lg:my-4 lg:border-4 lg:text-2xl"
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
