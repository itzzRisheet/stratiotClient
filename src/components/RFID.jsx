import { useEffect, useState } from "react";

const getTasks = (empid) => {
  if (empid === 'EMP0001') {
    return 'TASK0001'
  } else if (empid === 'EMP0002') {
    return 'TASK0002'
  } else if (empid === 'EMP0003') {
    return 'TASK0003'
  } else if (empid === 'EMP0004') {
    return 'TASK0004'
  } else if (empid === 'EMP0005') {
    return 'TASK0005'
  }else { 
    return '';
  }
}

export default function IdCardWebSocketDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("Employee just tapped : ", employees)
  }, [employees])

  useEffect(() => {
    // Replace with your WebSocket URL
    const socket = new WebSocket("wss://ea30iv3apl.execute-api.eu-north-1.amazonaws.com/production");

    socket.onmessage = (event) => {
      console.log(event);
      try {
        const data = JSON.parse(event.data);
        if (data && data.data && data.data.employee_id) {
          const newEmployee = data.data;
          setEmployees((prevEmployees) => {
            if (prevEmployees.some(e => e.employee_id === newEmployee.employee_id)) {
              return prevEmployees;
            } else {
              return [...prevEmployees, newEmployee];
            }
          });
        }
      } catch (err){
        console.error("Failed to parse WebSocket message:", err);
      }
    };

    socket.onopen = () => console.log("IDcard WebSocket connected");
    socket.onclose = () => console.log("IDCard WebSocket disconnected");

    return () => socket.close();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      {employees.map((employee) => {
         return (
          <div key={employee.employee_id} className="bg-white rounded-xl shadow-md p-6 max-w-md border border-gray-200 mb-4">
            <h2 className="text-xl font-semibold mb-2">Employee Details</h2>
            <p><span className="font-medium">ID:</span> {employee.employee_id}</p>
            <p><span className="font-medium">Name:</span> {employee.name}</p>
            <p><span className="font-medium">Current Task:</span> {getTasks(employee.employee_id)}</p>
          </div>
        );
      })}
    </div>
  );
}


