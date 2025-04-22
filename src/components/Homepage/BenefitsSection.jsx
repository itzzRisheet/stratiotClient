// components/BenefitsSection.jsx
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Real-Time Visibility",
    description: "Instant updates on employee locations and task completion.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Sensor-Based Intelligence",
    description: "Track actions like bolt fitting using torque sensors.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Automobile-First Design",
    description: "Built specifically for the factory floor, not generalized tools.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Supervisor Dashboard",
    description: "Insights delivered clearly to those who manage operations.",
    icon: <CheckCircle className="text-green-500 w-6 h-6" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div>{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
