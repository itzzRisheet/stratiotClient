import { Bell, ChevronRight } from 'lucide-react';

export default function AlertsCard({ alerts, setSelectedItem, setSelectedSection, getAlertIcon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Bell size={18} className="mr-2 text-yellow-500" />
          Alerts
        </h2>
      </div>

      <div className="space-y-3">
        {alerts.map(alert => (
          <div
            key={alert.id}
            className={`p-3 rounded-lg hover:bg-blue-50 cursor-pointer ${!alert.resolved ? 'bg-yellow-50 border-l-4 border-yellow-500' : 'bg-gray-50'}`}
            onClick={() => {
              setSelectedSection('alerts');
              setSelectedItem(alert.id);
            }}
          >
            <div className="flex justify-between">
              <div className="flex items-start">
                {getAlertIcon(alert.type)}
                <div className="ml-2">
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs ${alert.resolved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {alert.resolved ? 'Resolved' : 'Active'}
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
