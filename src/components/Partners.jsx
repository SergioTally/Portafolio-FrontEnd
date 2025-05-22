export default function Partners() {
    return (
      <section className="py-20 px-6 bg-gray-100 text-center" id="partners">
        <h2 className="text-4xl font-bold text-blue-800 mb-10" data-aos="fade-up">Nuestros Partners</h2>
        <div className="flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay="200">
          {["Microsoft", "AWS", "Cisco", "Google Cloud"].map((partner, idx) => (
            <div key={idx} className="bg-white px-6 py-3 rounded-md shadow text-gray-700 font-medium">
              {partner}
            </div>
          ))}
        </div>
      </section>
    );
  }