import { MapPin } from 'lucide-react';

export default function LiveEmployeeTracking({ employees, livePositions, detectZone, getStatusColor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <MapPin size={18} className="mr-2 text-blue-500" />
          Live Employee Tracking
        </h2>
      </div>

      {/* Map area showing pulse indicators
      <div className="relative bg-gray-200 rounded-lg h-125 mb-4 overflow-hidden">
        {livePositions.map((emp, index) => (
          <div
            key={emp.id}
            className="absolute w-4 h-4 rounded-full animate-pulse"
            style={{
              left: `${emp.x}%`,
              top: `${emp.y}%`,
              backgroundColor: ["#3b82f6", "#10b981", "#facc15", "#ef4444", "#8b5cf6"][index % 5],
            }}
            title={`${emp.name} ${emp.zone}`}
          />
        ))}
      </div> */}
      {/* Map area with background image and pulse indicators */}
      <div className="relative rounded-lg h-125 mb-4 overflow-hidden">
        <img
          src="src/Images/floor_plan.jpg"  // Replace with your actual image path
          alt="Map Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {livePositions.map((emp, index) => (
          <div
            key={emp.id}
            className="absolute w-4 h-4 rounded-full animate-pulse"
            style={{
              left: `${emp.x}%`,
              top: `${emp.y}%`,
              backgroundColor: ["#3b82f6", "#10b981", "#facc15", "#ef4444", "#8b5cf6"][index % 5],
            }}
            title={`${emp.name} ${emp.zone}`}
          />
        ))}
      </div>


      {/* Employee list with live zone info */}
      <div className="space-y-2">
        {employees.map(employee => {
          const liveData = livePositions.find(pos => pos.id === employee.id);

          return (
            <div key={employee.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <img src={employee.img} alt={employee.name} className="w-8 h-8 rounded-full mr-3" />
                <div>
                  <p className="font-medium">{employee.name}</p>
                  <p className="text-sm text-gray-500">{liveData?.zone || "Unknown Zone"}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">{employee.location}</span>
                <span className={`w-3 h-3 rounded-full ${getStatusColor(employee.status)}`}></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
