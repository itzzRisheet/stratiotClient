// components/CallToAction.jsx
export default function CallToAction({ ctaImage }) {
    return (
      <section className="relative bg-blue-700 text-white py-20 px-6 md:px-12 overflow-hidden">
        <img
          src={ctaImage}
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Track Smarter?</h2>
          <p className="text-lg mb-8">
            Experience hands-free, real-time task tracking built specifically for your automobile factory.
          </p>
          <button className="bg-white text-blue-700 px-8 py-4 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
            Request a Demo
          </button>
        </div>
      </section>
    );
  }
  