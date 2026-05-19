import { createFileRoute } from "@tanstack/react-router";
import clinicRoom from "@/assets/clinic-room.jpg";
import drPalacio from "@/assets/dr-palacio.jpg";
import drBotero from "@/assets/dr-botero.jpg";
import patientsPark from "@/assets/patients-park.jpg";
import logoMono from "@/assets/logo-abc-mono.png";
import logoNavy from "@/assets/logo-abc-navy.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Diabetes — Atención moderna para una vida en equilibrio" },
      {
        name: "description",
        content:
          "Clínica virtual y presencial especializada en diabetes, embarazo y obesidad. Endocrinología personalizada con un enfoque humano.",
      },
      { property: "og:title", content: "ABC Diabetes — Atención moderna para una vida en equilibrio" },
      {
        property: "og:description",
        content:
          "Especialistas certificados en diabetes, embarazo y obesidad. Atención virtual y presencial con un enfoque humano.",
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
    name: "Dr. Andrés Palacio",
    role: "Director Médico · Endocrinología",
    quote:
      "No tratamos números; tratamos personas. Tu estilo de vida es tan importante como tus análisis.",
    img: drPalacio,
  },
  {
    name: "Dr. José Fernando Botero Arango",
    role: "Director Médico · Endocrinología",
    quote:
      "Acompañamos a cada paciente con planes metabólicos a la medida y educación terapéutica continua.",
    img: drBotero,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-clinic-cream font-sans text-clinic-teal">
      {/* Navegación */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
        <a href="#top" className="flex items-center">
          <img src={logoMono} alt="ABC Diabetes" className="h-14 md:h-16 w-auto" />
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-wider">
          <a href="#about" className="hover:text-clinic-accent transition-colors">
            Quiénes somos
          </a>
          <a href="#doctors" className="hover:text-clinic-accent transition-colors">
            Especialistas
          </a>
          <a href="#stories" className="hover:text-clinic-accent transition-colors">
            Historias
          </a>
          <a
            href="#contact"
            className="bg-clinic-teal text-clinic-cream px-6 py-2.5 rounded-full hover:bg-clinic-teal/90 transition-colors"
          >
            Agendar consulta
          </a>
        </div>
        <a
          href="#contact"
          className="md:hidden bg-clinic-teal text-clinic-cream px-4 py-2 rounded-full text-xs uppercase tracking-wider"
        >
          Agendar
        </a>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-12 gap-10 items-center max-w-[1400px] mx-auto">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-5">
              Clínica virtual y presencial
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-balance">
              Atención moderna para una vida en <span className="italic font-light">equilibrio</span>.
            </h1>
            <p className="text-lg md:text-xl text-clinic-teal/75 max-w-lg mb-8 leading-relaxed">
              Especialistas en <strong className="font-semibold">diabetes</strong>,{" "}
              <strong className="font-semibold">embarazo</strong> y{" "}
              <strong className="font-semibold">obesidad</strong>. Combinamos excelencia clínica con
              un acompañamiento cercano, en consultorio o por telemedicina.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold">98%</div>
                <div className="text-xs uppercase tracking-widest text-clinic-teal/60 mt-2">
                  Tasa de éxito
                </div>
              </div>
              <div className="w-px bg-clinic-teal/15" />
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold">15k+</div>
                <div className="text-xs uppercase tracking-widest text-clinic-teal/60 mt-2">
                  Pacientes acompañados
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={clinicRoom}
              alt="Consultorio luminoso de la clínica ABC Diabetes con luz natural"
              width={1440}
              height={1088}
              className="w-full aspect-[4/3] object-cover rounded-2xl ring-1 ring-clinic-teal/10"
            />
          </div>
        </section>

        {/* Áreas de enfoque */}
        <section className="px-6 md:px-12 pb-12 md:pb-20 max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Diabetes",
                desc: "Manejo integral de Tipo 1, Tipo 2 y prediabetes con tecnología de monitoreo continuo.",
              },
              {
                title: "Embarazo",
                desc: "Diabetes gestacional y control metabólico para un embarazo seguro, paso a paso.",
              },
              {
                title: "Obesidad",
                desc: "Programas personalizados de salud metabólica, nutrición y seguimiento médico.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-7 rounded-2xl bg-white ring-1 ring-clinic-teal/10 hover:ring-clinic-accent/30 transition-all"
              >
                <h3 className="font-serif text-2xl mb-2">{f.title}</h3>
                <p className="text-clinic-teal/70 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quiénes Somos */}
        <section id="about" className="px-6 md:px-12 py-20 md:py-28 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
                ABC Diabetes SAS
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
                ¿Quiénes <span className="italic font-light">somos</span>?
              </h2>
              <p className="text-clinic-teal/70 leading-relaxed">
                Empresa colombiana con sede en Medellín, dedicada a la educación terapéutica y a la
                atención integral de la enfermedad crónica.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-clinic-teal/85 italic border-l-2 border-clinic-accent pl-6">
                Nuestro programa de atención está centrado en el cuidado del paciente y su familia con un equipo dedicado a la atención, acompañamiento y educación. En cada consulta serás acompañado por un endocrinólogo, un médico general entrenado, una nutricionista, un químico farmacéutico, una enfermera profesional y un psicólogo que te ayudarán, a ti y a tu grupo familiar, a entender como es vivir con diabetes y a alcanzar las metas del tratamiento para que mejorar tu calidad de vida.
              </p>
              <ul className="space-y-5 text-base md:text-lg leading-relaxed">
                {[
                  { k: "Origen", v: "Empresa colombiana con sede en Medellín, constituida en 2022." },
                  { k: "Especialidad", v: "Educación terapéutica y atención de enfermedad crónica." },
                  { k: "Programa oficial", v: "Entrenamiento en bombas de insulina Medtronic (Diabetes Tipo 1)." },
                  { k: "Comunidad", v: "Fundadores y socios de CLID Medellín." },
                  { k: "Directores médicos", v: "Dr. Andrés Palacio y Dr. José Fernando Botero Arango." },
                  { k: "Consulta presencial", v: "Cl 7 39 197, Edificio intermedica, Consultorio 1112, Medellín, Antioquia." },
                ].map((item) => (
                  <li key={item.k} className="flex gap-5 pb-5 border-b border-clinic-teal/10 last:border-0">
                    <span className="text-clinic-accent font-serif text-2xl leading-none mt-1">·</span>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-clinic-accent font-bold block mb-1">
                        {item.k}
                      </span>
                      <span className="text-clinic-teal/85">{item.v}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Doctores */}
        <section id="doctors" className="px-6 md:px-12 py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl mb-14 md:mb-20">
              <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
                Nuestros especialistas
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-5 text-balance">
                Liderando la endocrinología moderna.
              </h2>
              <p className="text-lg text-clinic-teal/70 leading-relaxed">
                Un equipo certificado por consejo, con décadas de experiencia clínica e
                investigación, dedicado a tu plan de tratamiento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-5xl">
              {doctors.map((d) => (
                <article key={d.name} className="group">
                  <div className="overflow-hidden rounded-xl mb-6 ring-1 ring-clinic-teal/10 group-hover:ring-clinic-accent/30 transition-all">
                    <img
                      src={d.img}
                      alt={`Retrato de ${d.name}`}
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

        {/* Reseñas */}
        <section id="stories" className="px-6 md:px-12 py-20 md:py-28 bg-clinic-teal text-clinic-cream">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
                Historias de pacientes
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 italic font-light">
                Voces que inspiran.
              </h2>
              <p className="text-clinic-cream/60 mb-8 leading-relaxed">
                Resultados reales de personas que eligieron un camino activo hacia su salud
                metabólica.
              </p>
              <div className="p-8 bg-clinic-cream/5 border border-clinic-cream/10 rounded-2xl">
                <p className="text-xl font-serif mb-6 italic leading-relaxed">
                  "Pasé años sintiendo que mi diagnóstico era una sentencia. ABC Diabetes me dio las
                  herramientas para volver a sentirme yo. Mi A1C está en su mejor nivel en una
                  década."
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-clinic-accent grid place-items-center font-serif text-clinic-teal font-bold">
                    D
                  </div>
                  <div>
                    <div className="font-bold">David L.</div>
                    <div className="text-xs text-clinic-cream/50">Paciente desde 2021</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 bg-clinic-mint text-clinic-teal rounded-2xl">
                <div className="text-clinic-accent text-2xl mb-4 tracking-tighter">★★★★★</div>
                <p className="font-medium mb-6 leading-relaxed">
                  "El detalle de mi plan de tratamiento fue impresionante. Detectaron cosas que mi
                  médico anterior nunca vio."
                </p>
                <div className="text-sm font-bold uppercase tracking-wider">Rebecca M.</div>
              </div>
              <div className="p-8 bg-clinic-mint text-clinic-teal rounded-2xl">
                <div className="text-clinic-accent text-2xl mb-4 tracking-tighter">★★★★★</div>
                <p className="font-medium mb-6 leading-relaxed">
                  "La telemedicina realmente funciona. Me siento acompañada por el equipo de ABC Diabetes incluso
                  cuando viajo por trabajo."
                </p>
                <div className="text-sm font-bold uppercase tracking-wider">Jaime T.</div>
              </div>
              <div className="sm:col-span-2 overflow-hidden rounded-2xl ring-1 ring-clinic-cream/10">
                <img
                  src={patientsPark}
                  alt="Una pareja caminando en un parque soleado, representando una vida saludable"
                  width={1440}
                  height={512}
                  loading="lazy"
                  className="w-full aspect-[3/1] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-6 md:px-12 py-20 md:py-28 text-center">
          <p className="text-xs uppercase tracking-widest text-clinic-accent font-bold mb-4">
            Da el primer paso
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-balance max-w-3xl mx-auto">
            ¿Listo para comenzar tu camino?
          </h2>
          <a
            href="https://wa.me/573206816213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-clinic-teal text-clinic-cream px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-clinic-accent transition-colors"
          >
            Agenda tu valoración inicial
          </a>
          <p className="mt-10 text-clinic-teal/50 text-sm leading-relaxed">
            (+57) 320 681 6213
            <br />
            Cl 7 39 197, Edificio intermedica, Consultorio 1112, Medellín, Antioquia
          </p>
        </section>
      </main>

      <footer className="border-t border-clinic-teal/10 px-6 md:px-12 py-8 text-xs text-clinic-teal/50 flex flex-wrap justify-between gap-4">
        <span>ABC Diabetes S.A.S · NIT 901655498-6</span>
        <span>© {new Date().getFullYear()} Clínica ABC Diabetes. Todos los derechos reservados.</span>
      </footer>
    </div>
  );
}
