// components/ImpactSection.jsx
export default function ImpactSection({ chartImage, testimonialImage }) {
    return (
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Real Impact in Real Factories</h2>
  
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="md:w-1/2">
              <img
                src={chartImage}
                alt="Performance Improvement Chart"
                className="rounded-xl shadow-lg object-contain w-full"
              />
            </div>
  
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-gray-700 text-lg">
                “We reduced manual supervision and improved task tracking by over 40% in just two weeks. Our factory finally feels like it's part of the 21st century.”
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonialImage}
                  alt="Supervisor Testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Rahul Verma</p>
                  <p className="text-sm text-gray-500">Assembly Supervisor, AutoWorks Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  