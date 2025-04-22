import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TaskCompletion from "../TaskCompletion";

export default function EmployeeSelf() {
  const location = useLocation();
  const username = location.state?.username || "";

  const [employeeData, setEmployeeData] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://scfcws7abh.execute-api.eu-north-1.amazonaws.com/production/");
    ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        const data = payload.data;
        if (data.name?.toLowerCase() === username.toLowerCase()) {
          setEmployeeData({
            id: data.employee_id,
            name: data.name,
            x: parseFloat(data["uwb_x (m)"]),
            y: parseFloat(data["uwb_y (m)"]),
            position: "Operator",
            status: "active",
            img: "/api/placeholder/50/50"
          });

          // Sample task logic (can be dynamic)
          setTasks([
            { id: 1, employeeId: data.employee_id, title: "Daily Maintenance", status: "in-progress", completion: "40%", priority: "medium" }
          ]);
        }
      } catch (e) {
        console.error("Error parsing WebSocket data:", e);
      }
    };
    return () => ws.close();
  }, [username]);

  return (
    <div className="p-6 mt-8">
        <h1 className="text-4xl font-bold mb-4">Employee Self</h1>
      <h1 className="text-xl font-bold mb-4">Welcome {username}</h1>
      {employeeData && (
        <TaskCompletion
          employees={[employeeData]}
          tasks={tasks}
          setSelectedItem={() => {}}
          setSelectedSection={() => {}}
        />
      )}
    </div>
  );
}
