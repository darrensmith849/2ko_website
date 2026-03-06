import Image from "next/image";

const partners = [
  { name: "Anglo American", src: "/partners/anglo-american.png" },
  { name: "Worldnet Logistics", src: "/partners/worldnet-logistics.svg" },
  { name: "Transnet", src: "/partners/transnet.png" },
  { name: "Toyota", src: "/partners/toyota.png" },
  { name: "Standard Bank", src: "/partners/standard-bank.png" },
  { name: "South African Reserve Bank", src: "/partners/south-african-reserve-bank.png" },
  { name: "Nedbank", src: "/partners/nedbank.png" },
  { name: "John Deere", src: "/partners/john-deere.png" },
  { name: "Airports Company SA", src: "/partners/airports-company-sa.png" },
  { name: "Absa", src: "/partners/absa.png" },
  { name: "Valve", src: "/partners/valve.svg" },
];

export default function PartnerLogos() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-6 pb-14">
      <p className="text-center text-muted2 text-xs font-semibold uppercase tracking-widest mb-8">
        Trusted by leading organisations
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="relative h-10 w-full max-w-[120px] flex items-center justify-center"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              width={120}
              height={40}
              className="object-contain grayscale opacity-70 brightness-150 contrast-110 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              style={{ maxHeight: "40px", width: "auto" }}
            />
          </div>
        ))}
      </div>
      <p className="text-center text-muted2 text-xs mt-8">
        And many more across Africa and beyond.
      </p>
    </section>
  );
}
