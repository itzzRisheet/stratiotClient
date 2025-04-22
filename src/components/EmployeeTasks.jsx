import {React, useEffect} from 'react';

const EmployeeTasks = ({ employees, tasks }) => {

  useEffect(() => {
    console.log("Tasks retrieved from EmployeeTasks :  " , tasks);
    console.log("Employees :  " , employees);
  }, [tasks])

  const employeeTaskCounts = employees.map((employee) => {
    const assignedTasks = tasks.filter(
      (task) => task.employeeId === employee.id
    );
    console.log("Assigned tasks : " , assignedTasks[0]['units'] )
    return {
      ...employee,
      taskCount: assignedTasks.length,
      notStarted: assignedTasks.filter(
        (task) => task.status === 'not_started'
      ).length,
      inProgressCount: assignedTasks.filter(
        (task) => task.status === 'in_progress'
      ).length,
      // completedCount:typeof(assignedTasks[0] === 'object') ?  assignedTasks[0]['units'] : ""
    };
  });


  console.log("Employee task counts : " , employeeTaskCounts);
  return (
    <div className="employeeTasks p-4">
      <h2 className="text-xl font-semibold mb-4">Task assigned to each employees</h2>
      <h3 className="text-xl font-semibold mb-4">Tasks assigned: {tasks.taskCount}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employeeTaskCounts.map((employee) => (
          <div
            key={employee.id}
            className="bg-gray-100 p-4 rounded-md shadow-md"
          >
            <h3 className="font-medium">{employee.name}</h3>
            
            
            <p className="text-gray-600">
              {/* Tasks assigned: {employee.taskCount} */}
              {/* Tasks in_progress: {employee.taskCount} */}
              Units completed: {employeeTaskCounts.completedCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTasks;