// components/HowItWorks.jsx
export default function HowItWorks() {
    const steps = [
      "Employee activity is captured via UWB & torque sensors",
      "Data is sent to AWS IoT Core",
      "AWS Lambda processes the data",
      "Relevant data delivered to dashboard API",
      "Supervisors view task insights in real time"
    ];
  
    return (
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-xl shadow w-full md:w-1/5"
              >
                <div className="text-4xl font-bold text-blue-600">{index + 1}</div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  