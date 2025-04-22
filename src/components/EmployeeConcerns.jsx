import { MessageCircle, ChevronRight } from 'lucide-react';

export default function EmployeeConcerns({ concerns, employees, setSelectedItem, setSelectedSection }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <MessageCircle size={18} className="mr-2 text-purple-500" />
          Employee Concerns
        </h2>
      </div>

      <div className="space-y-3">
        {concerns.map(concern => (
          <div
            key={concern.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer"
            onClick={() => {
              setSelectedSection('concerns');
              setSelectedItem(concern.id);
            }}
          >
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs mr-2 ${concern.type === 'complaint' ? 'bg-red-100 text-red-800' :
                    concern.type === 'request' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'}`}>
                    {concern.type}
                  </span>
                  <h4 className="font-medium">{concern.title}</h4>
                </div>
                <p className="text-sm text-gray-500">
                  {employees.find(e => e.id === concern.employeeId)?.name} • {concern.time}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`px-2 py-1 text-xs rounded-full ${concern.status === 'resolved' ? 'bg-green-100 text-green-800' :
                  concern.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'}`}>
                  {concern.status}
                </span>
                <ChevronRight size={16} className="ml-2 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
