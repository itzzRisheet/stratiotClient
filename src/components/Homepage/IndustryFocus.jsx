// components/IndustryFocus.jsx
export default function IndustryFocus({ comparisonImage }) {
    return (
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Focus on the Automobile Industry?</h2>
  
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">The Problem:</h3>
              <p className="text-gray-700">
                Many automobile factories rely on outdated, manual methods to monitor employees. Real-time tracking is often nonexistent, and workers rarely use digital tools.
              </p>
  
              <h3 className="text-xl font-semibold mt-6">Our Approach:</h3>
              <p className="text-gray-700">
                We integrate directly with the way automobile workers operate using UWB and torque sensors. No behavior changes, just passive tracking that delivers meaningful insights to supervisors.
              </p>
            </div>
  
            <div className="md:w-1/2">
              <img
                src={comparisonImage}
                alt="Traditional vs Smart Factory Comparison"
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  