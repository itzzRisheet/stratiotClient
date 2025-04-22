
// components/HeroSection.jsx
export default function HeroSection({ productImage }) {
    return (
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Smarter Task Tracking for Automobile Factories
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Monitor employee location and task progress in real time using sensor-driven insights.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            See How It Works
          </button>
        </div>
  
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={productImage}
            alt="Factory product overview"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </section>
    );
  }
  