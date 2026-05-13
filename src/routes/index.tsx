import { createFileRoute } from "@tanstack/react-router";
import clinicRoom from "@/assets/clinic-room.jpg";
import drChen from "@/assets/dr-chen.jpg";
import drThorne from "@/assets/dr-thorne.jpg";
import drRodriguez from "@/assets/dr-rodriguez.jpg";
import patientsPark from "@/assets/patients-park.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Diabetes — Modern care for a balanced life" },
      {
        name: "description",
        content:
          "ABC Diabetes is a specialist endocrinology clinic offering personalized metabolic care, advanced Type 1 & Type 2 management, and compassionate patient support.",
      },
      { property: "og:title", content: "ABC Diabetes — Modern care for a balanced life" },
      {
        property: "og:description",
        content:
          "Board-certified endocrinologists delivering personalized diabetes care. 98% success rate, 15k+ lives managed.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: clinicRoom },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: clinicRoom },
    ],
  }),
  component: Index,
});

const doctors = [
  {
    name: "Dr. Sarah Chen, MD",
    role: "Chief of Endocrinology",
    quote:
      "We don't just treat numbers; we treat people. Your lifestyle is as important as your labs.",
    img: drChen,
  },
  {
    name: "Dr. Marcus Thorne, PhD",
    role: "Type 1 Specialist",
    quote:
      "Leveraging the latest in CGM technology to give patients total control over their day.",
    img: drThorne,
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Gestational Care",
    quote:
      "Ensuring healthy futures for mothers and babies through precise nutritional guidance.",
    img: drRodriguez,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-clinic-cream font-sans text-clinic-teal">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
        <a href="#top" className="text-2xl font-serif font-bold tracking-tight">
          ABC <span className="text-clinic-accent">Diabetes</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-wider">
          <a href="#doctors" className="hover:text-clinic-accent transition-colors">
            Our Doctors
          </a>
          <a href="#stories" className="hover:text-clinic-accent transition-colors">
            Success Stories
          </a>
          <a
            href="#contact"
            className="bg-clinic-teal text-clinic-cream px-6 py-2.5 rounded-full hover:bg-clinic-teal/90 transition-colors"
          >
            Book Consultation
          </a>
        </div>
        <a
          href="#contact"
          className="md:hidden bg-clinic-teal text-clinic-cream px-4 py-2 rounded-full text-xs uppercase tracking-wider"
        >
          Book
        </a>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-12 gap-10 items-center max-w-[1400px] mx-auto">
          <div className="lg:col-span-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-balance">
              Modern care for a <span className="italic font-light">balanced</span> life.
            </h1>
            <p className="text-lg md:text-xl text-clinic-teal/75 max-w-lg mb-10 leading-relaxed">
              Expert endocrinology focused on personalized metabolic health. We combine clinical
              excellence with empathetic care to help you thrive.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold">98%</div>
                <div className="text-xs uppercase tracking-widest text-clinic-teal/60 mt-2">
                  Success Rate
                </div>
              </div>
              <div className="w-px bg-clinic-teal/15" />
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold">15k+</div>
                <div className="text-xs uppercase tracking-widest text-clinic-teal/60 mt-2">
                  Lives Managed
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={clinicRoom}
              alt="A bright, modern ABC Diabetes consultation room with natural light"
              width={1440}
              height={1088}
              className="w-full aspect-[4/3] object-cover rounded-2xl ring-1 ring-clinic-teal/10"
            />
          </div>
        </section>

        {/* Doctors */}
        <section id="doctors" className="px-6 md:px-12 py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl mb-14 md:mb-20">
              <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
                Our Specialists
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-5 text-balance">
                Leading the way in endocrinology.
              </h2>
              <p className="text-lg text-clinic-teal/70 leading-relaxed">
                Our board-certified specialists bring decades of research from the world's top
                medical institutions directly to your care plan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {doctors.map((d) => (
                <article key={d.name} className="group">
                  <div className="overflow-hidden rounded-xl mb-6 ring-1 ring-clinic-teal/10 group-hover:ring-clinic-accent/30 transition-all">
                    <img
                      src={d.img}
                      alt={`Portrait of ${d.name}`}
                      width={800}
                      height={1024}
                      loading="lazy"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-2xl">{d.name}</h3>
                  <p className="text-xs text-clinic-accent font-bold uppercase tracking-widest mt-1 mb-3">
                    {d.role}
                  </p>
                  <p className="text-clinic-teal/70 leading-relaxed italic">"{d.quote}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="stories" className="px-6 md:px-12 py-20 md:py-28 bg-clinic-teal text-clinic-cream">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
                Patient Stories
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 italic font-light">
                Voices of Recovery
              </h2>
              <p className="text-clinic-cream/60 mb-8 leading-relaxed">
                Real outcomes from patients who chose a proactive path toward metabolic freedom.
              </p>
              <div className="p-8 bg-clinic-cream/5 border border-clinic-cream/10 rounded-2xl">
                <p className="text-xl font-serif mb-6 italic leading-relaxed">
                  "I spent years feeling like my diagnosis was a life sentence. ABC Diabetes gave
                  me the tools to feel like myself again. My A1C is at its lowest in a decade."
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-clinic-accent grid place-items-center font-serif text-clinic-teal font-bold">
                    D
                  </div>
                  <div>
                    <div className="font-bold">David L.</div>
                    <div className="text-xs text-clinic-cream/50">Patient since 2021</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 bg-clinic-mint text-clinic-teal rounded-2xl">
                <div className="text-clinic-accent text-2xl mb-4 tracking-tighter">★★★★★</div>
                <p className="font-medium mb-6 leading-relaxed">
                  "The level of detail in my treatment plan was staggering. They caught things my
                  previous GP completely missed."
                </p>
                <div className="text-sm font-bold uppercase tracking-wider">Rebecca M.</div>
              </div>
              <div className="p-8 bg-clinic-mint text-clinic-teal rounded-2xl">
                <div className="text-clinic-accent text-2xl mb-4 tracking-tighter">★★★★★</div>
                <p className="font-medium mb-6 leading-relaxed">
                  "Telehealth that actually works. I feel connected to Dr. Chen even when I'm
                  traveling for work."
                </p>
                <div className="text-sm font-bold uppercase tracking-wider">James T.</div>
              </div>
              <div className="sm:col-span-2 overflow-hidden rounded-2xl ring-1 ring-clinic-cream/10">
                <img
                  src={patientsPark}
                  alt="A couple walking together in a sunlit park, representing healthy living"
                  width={1440}
                  height={512}
                  loading="lazy"
                  className="w-full aspect-[3/1] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section id="contact" className="px-6 md:px-12 py-20 md:py-28 text-center">
          <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
            Begin Today
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-balance max-w-3xl mx-auto">
            Ready to start your journey?
          </h2>
          <a
            href="mailto:hello@abcdiabetes.clinic"
            className="inline-block bg-clinic-teal text-clinic-cream px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-clinic-accent transition-colors"
          >
            Schedule your initial screening
          </a>
          <p className="mt-10 text-clinic-teal/50 text-sm">
            Located in the heart of the Medical District · hello@abcdiabetes.clinic · (503) 555-0192
          </p>
        </section>
      </main>

      <footer className="border-t border-clinic-teal/10 px-6 md:px-12 py-8 text-xs text-clinic-teal/50 flex flex-wrap justify-between gap-4">
        <span>© {new Date().getFullYear()} ABC Diabetes Clinic. All rights reserved.</span>
        <span>Licensed Clinical Facility</span>
      </footer>
    </div>
  );
}
