export default function Services() {
    return (
      <section className="py-20 px-6 text-center" id="servicios">
        <h2 className="text-4xl font-bold text-blue-800 mb-10" data-aos="fade-up">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Consultoría IT", "Desarrollo de Software", "Seguridad Informática"].map((title, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay={idx * 200}>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
              <p className="text-gray-600">Ofrecemos soluciones personalizadas, adaptadas a tus necesidades empresariales.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }