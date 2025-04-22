import Navbar from "../Navbar";

// AboutPage.jsx
export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-12 py-16 space-y-20">
      <Navbar />
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-lg text-gray-600">
          To digitize automobile factory-floor insights without disrupting workflows — empowering supervisors with real-time, sensor-driven task tracking.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why We Built This</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">The Problem</h3>
            <p className="text-gray-700">
              Automobile factories often rely on outdated manual processes. Tracking worker activity and progress is inconsistent, inaccurate, or simply non-existent.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              Instead of changing how workers operate, we decided to meet them where they are. Our system uses passive sensors to collect rich, real-time data and empower decision-makers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
        <p className="text-gray-600 mb-8">
          Built with scalable, secure, and industrial-ready tech.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-100 p-4 rounded-xl shadow">UWB Sensors</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Torque Sensors</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">AWS IoT Core</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">AWS Lambda</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">API Gateway</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">DynamoDB</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">React + Tailwind</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Secure Dashboard</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
        <p className="text-gray-600">
          A passionate team of engineers and product thinkers, focused on bridging the digital gap for automotive manufacturing.
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <img src="/images/you.jpg" alt="You" className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
            <p className="font-semibold">Vatsal Mandaliya</p>
            <p className="text-sm text-gray-500">Founder & Engineer</p>
          </div>
          <div className="text-center">
            <img src="/images/alice.jpg" alt="Alice" className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
            <p className="font-semibold">Risheet Parmar</p>
            <p className="text-sm text-gray-500">Product Manager</p>
          </div>
          <div className="text-center">
            <img src="/images/bob.jpg" alt="Bob" className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
            <p className="font-semibold">Anand Thakur</p>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>
          <div className="text-center">
            <img src="/images/charlie.jpg" alt="Charlie" className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
            <p className="font-semibold">Gaurav Jadhav</p>
            <p className="text-sm text-gray-500">Backend Developer</p>
          </div>
          <div className="text-center">
            <img src="/images/dana.jpg" alt="Dana" className="w-20 h-20 rounded-full mx-auto mb-2 object-cover" />
            <p className="font-semibold">Soumyadeep Pahari</p>
            <p className="text-sm text-gray-500">QA Engineer</p>
          </div>
        </div>


      </section>

    </div>
  );
}
