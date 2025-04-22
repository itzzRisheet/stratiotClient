import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock } from 'lucide-react';
import LiveEmployeeTracking from './LiveEmployeeTracking';
import TaskCompletion from './TaskCompletion';
import AlertsCard from './AlertsCard';
import EmployeeConcerns from './EmployeeConcerns';
import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';
import IdCardWebSocketDashboard from './RFID';
import EmployeeTasks from './EmployeeTasks';

export default function Supervisor({ activeSection, setActiveSection }) {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dynamicEmployees, setDynamicEmployees] = useState([]);
  const [liveTasks, setLiveTasks] = useState([]);
  // const taskBufferRef = useRef([])
  const [taskBuffer, setTaskBuffer] = useState([]);
  const livePositionsRef = useRef([]);

  

  const employees = [
    { id: 1, name: "John Doe", position: "Technician", location: "Zone A", status: "active", img: "/api/placeholder/50/50" },
    { id: 2, name: "Jane Smith", position: "Engineer", location: "Zone B", status: "active", img: "/api/placeholder/50/50" },
    { id: 3, name: "Mike Johnson", position: "Supervisor", location: "Zone C", status: "break", img: "/api/placeholder/50/50" },
    { id: 4, name: "Lisa Brown", position: "Technician", location: "Zone A", status: "inactive", img: "/api/placeholder/50/50" },
    { id: 5, name: "Mike Ross", position: "Engineer", location: "Zone D", status: "inactive", img: "/api/placeholder/50/50" },
  ];

  const tasks = [
    { id: 1, employeeId: 1, title: "Equipment Maintenance", status: "completed", completion: "100%", priority: "high" },
    { id: 2, employeeId: 1, title: "Safety Inspection", status: "in-progress", completion: "60%", priority: "medium" },
    { id: 3, employeeId: 2, title: "System Calibration", status: "completed", completion: "100%", priority: "high" },
    { id: 4, employeeId: 3, title: "Inventory Check", status: "pending", completion: "0%", priority: "low" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Zone B temperature above threshold", time: "09:45 AM", resolved: false },
    { id: 2, type: "critical", message: "Employee #4 inactive for 30+ mins", time: "10:30 AM", resolved: false },
    { id: 3, type: "info", message: "Scheduled maintenance in Zone C", time: "08:15 AM", resolved: true },
  ];

  const concerns = [
    { id: 1, employeeId: 2, type: "complaint", title: "Equipment malfunction", status: "pending", time: "Yesterday" },
    { id: 2, employeeId: 1, type: "request", title: "Schedule adjustment", status: "resolved", time: "2 days ago" },
    { id: 3, employeeId: 4, type: "doubt", title: "Protocol clarification", status: "in-review", time: "Today" },
  ];

  const zones = {
    "workstation1": { x: [0, 15], y: [0, 15] },
    "workstation2": { x: [20, 35], y: [0, 15] },
    "workstation3": { x: [40, 55], y: [0, 15] },
    "workstation4": { x: [60, 75], y: [0, 15] },
    "workstation5": { x: [80, 95], y: [0, 15] },
    "supervisor_office": { x: [0, 10], y: [20, 30] },
    "canteen": { x: [20, 50], y: [20, 50] },
    "restroom": { x: [60, 80], y: [20, 40] },
  };

  const detectZone = (x, y) => {
    for (let zone in zones) {
      const { x: xRange, y: yRange } = zones[zone];
      if (x >= xRange[0] && x <= xRange[1] && y >= yRange[0] && y <= yRange[1]) {
        return zone;
      }
    }
    return "unknown";
  };

  // const [livePositions, setLivePositions] = useState([
  //   { id: "EMP001", name: "John Doe", x: 5, y: 5 },
  //   { id: "EMP002", name: "Jane Smith", x: 25, y: 5 },
  //   { id: "EMP003", name: "Mike Johnson", x: 45, y: 10 },
  //   { id: "EMP004", name: "Lisa Brown", x: 65, y: 5 },
  //   { id: "EMP005", name: "Alex King", x: 85, y: 10 },
  // ]);

  const [livePositions, setLivePositions] = useState([])
  useEffect(() => {
    livePositionsRef.current = livePositions;
  }, [livePositions])
  useEffect(() => {
    const ws = new WebSocket("wss://scfcws7abh.execute-api.eu-north-1.amazonaws.com/production/");

    ws.onopen = () => {
      console.log("✅ Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      setTimeout(() => {
        try {
          const payload = JSON.parse(event.data);
          const data = payload.data;
          console.log("Delayed Location Data:", data);
    
          if (data && data.employee_id && data["uwb_x (m)"] && data["uwb_y (m)"]) {
            const empData = {
              id: data.employee_id,
              name: data.name,
              x: parseFloat(data["uwb_x (m)"]),
              y: parseFloat(data["uwb_y (m)"]),
              zone: data.workstation,
            };
            console.log("empData: ", empData)
            setLivePositions(prev => {
              const updated = [...prev];
              const index = updated.findIndex(emp => emp.id === empData.id);
    
              if (index !== -1) {
                updated[index] = { ...updated[index], ...empData };
              } else {
                updated.push(empData);
              }
    
              return updated;
            });
    
            setDynamicEmployees(prev => {
              const updated = [...prev];
              const index = updated.findIndex(emp => emp.id === empData.id);
    
              if (index !== -1) {
                updated[index] = { ...updated[index], name: empData.name, workstation: empData.workstation };
                console.log("updated correctly", updated[index]);
              } else {
                updated.push({ id: empData.id, name: empData.name, position: "Operator", status: "active", img: "/api/placeholder/50/50" });
                console.log("updated");
              }
    
              return updated;
            });
          }
        } catch (err) {
          console.error("WebSocket message parse error:", err);
        }
      }, 5000); // 5 seconds delay
    };
    

    ws.onclose = () => {
      console.log("❌ WebSocket closed");
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      ws.close(); // cleanup
    };
  }, []);

  useEffect(() => {
    if (taskBuffer.length === 0) return;
  
    setTaskBuffer(prevBuffer => {
      const remainingBuffer = [];
  
      prevBuffer.forEach(task => {
        const employeeExists = livePositions.some(emp => emp.id === task.employeeId);
  
        if (employeeExists) {
          setLiveTasks(prev => {
            const updated = [...prev];
            const index = updated.findIndex(t => t.id === task.id);
            if (index !== -1) {
              updated[index] = { ...updated[index], ...task };
            } else {
              updated.push(task);
            }
            return updated;
          });
        } else {
          remainingBuffer.push(task); // keep waiting for this employee
        }
      });
  
      return remainingBuffer;
    });
  }, [livePositions]);
  

  useEffect(() => {
    const taskWS = new WebSocket("wss://q6mw1oj3z7.execute-api.eu-north-1.amazonaws.com/production");
  
    taskWS.onopen = () => {
      console.log("✅ Task WebSocket connected");
    };
  
    // taskWS.onmessage = (event) => {
    //   try {
    //     const payload = JSON.parse(event.data);
    //     const data = payload.data;
    //     console.log("Task Data:", data);
  
    //     if (data && data.task_id && data.employee_id && data.stage) {
    //       const newTask = {
    //         id: data.task_id,
    //         employeeId: data.employee_id,
    //         title: data.stage,
    //         status: data.task_status,
    //         completion: `${data.progress_percentage}%`,
    //         startTime: data.timestamp,
    //         units : data.unit_completed
    //       };
          
  
    //       setLiveTasks(prev => {
    //         const updated = [...prev];
    //         const index = updated.findIndex(task => task.id === newTask.id);
  
    //         if (index !== -1) {
    //           updated[index] = { ...updated[index], ...newTask };
    //         } else {
    //           updated.push(newTask);
    //         }
  
    //         return updated;
    //       });
    //     }
  
    //   } catch (err) {
    //     console.error("Task WebSocket parse error:", err);
    //   }
    // };
    taskWS.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        const data = payload.data;
        console.log("Task Data:", data);
    
        if (data && data.task_id && data.employee_id && data.stage) {
          const newTask = {
            id: data.task_id,
            employeeId: data.employee_id,
            title: data.stage,
            status: data.task_status,
            completion: `${data.progress_percentage}%`,
            startTime: data.timestamp,
            units: data.unit_completed
          };
    
          const employeeExists = livePositionsRef.current.some(
            emp => emp.id === newTask.employeeId
          );
    
          if (employeeExists) {
            setLiveTasks(prev => {
              const updated = [...prev];
              const index = updated.findIndex(task => task.id === newTask.id);
    
              if (index !== -1) {
                updated[index] = { ...updated[index], ...newTask };
              } else {
                updated.push(newTask);
              }
    
              return updated;
            });
          } else {
            // Buffer the task until employee arrives
            setTaskBuffer(prev => [...prev, newTask]);
            console.log(`Buffered task for employee ${newTask.employeeId}`);
          }
        }
      } catch (err) {
        console.error("Task WebSocket parse error:", err);
      }
    };
    
    
    taskWS.onclose = () => {
      console.log("❌ Task WebSocket disconnected");
    };
  
    taskWS.onerror = (err) => {
      console.error("Task WebSocket error:", err);
    };
  
    return () => {
      taskWS.close();
    };
  }, []);
  



  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'break': return 'bg-yellow-500';
      case 'inactive': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return <span className="text-yellow-500">⚠️</span>;
      case 'critical': return <span className="text-red-500">❗</span>;
      case 'info': return <span className="text-blue-500">ℹ️</span>;
      default: return <span className="text-gray-500">🔔</span>;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-y-auto w-full">
        <Navbar />
        <div className="p-4 md:p-6 w-full max-w-full">
          {activeSection === 'dashboard' ? (
            // <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-8">
            <div className="dashboard grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-8">
              {/* The LiveEmployeeTracking component takes up 2 columns on xl screens */}
              <div className="xl:col-span-2">
                <LiveEmployeeTracking
                  employees={dynamicEmployees}
                  livePositions={livePositions}
                  detectZone={detectZone}
                  getStatusColor={getStatusColor}
                />
              </div>
              <div className="xl:col-span-2">
                <TaskCompletion
                  employees={dynamicEmployees}
                  tasks={liveTasks}
                  // current_status={status}
                  // progress={completion}
                  setSelectedItem={setLiveTasks}
                  setSelectedSection={setSelectedSection}
                />
              </div>
              {/* <div className="xl:col-span-1"> */}
              <div className="md:col-span-2 xl:col-span-4">
                <AlertsCard
                  alerts={alerts}
                  setSelectedItem={setSelectedItem}
                  setSelectedSection={setSelectedSection}
                  getAlertIcon={getAlertIcon}
                />
              </div>
              {/* EmployeeConcerns takes up full width on smaller screens but fits into the grid on xl */}
              <div className="md:col-span-2 xl:col-span-4">
                <EmployeeConcerns
                  concerns={concerns}
                  employees={dynamicEmployees}
                  setSelectedItem={setSelectedItem}
                  setSelectedSection={setSelectedSection}
                />
              </div>
              <div>
                <IdCardWebSocketDashboard/>
              </div>
            </div>
          ) : (
            <div className="w-full mt-8">
              
              {activeSection === "tasks" && (
                <TaskCompletion
                  employees={dynamicEmployees}
                  tasks={liveTasks}
                  activeSection={activeSection}
                  setSelectedItem={setSelectedItem}
                  setSelectedSection={setSelectedSection}
                />
              )}

              {activeSection === "reports  " && (
                <AlertsCard
                  alerts={alerts}
                  setSelectedItem={setSelectedItem}
                  setSelectedSection={setSelectedSection}
                  getAlertIcon={getAlertIcon}
                />
              )}

              {activeSection === "settings-feedback" && (
                <EmployeeConcerns
                  concerns={concerns}
                  employees={dynamicEmployees}
                  setSelectedItem={setSelectedItem}
                  setSelectedSection={setSelectedSection}
                />
              )}
              {activeSection === "employees" &&
                <EmployeeTasks
                  employees={dynamicEmployees}
                  tasks={liveTasks}
                />
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}