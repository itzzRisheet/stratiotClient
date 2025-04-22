import { useState } from 'react';
import {
    LayoutDashboard,
    CheckSquare,
    Users,
    BarChart2,
    Settings,
    Bell,
    User,
    LogOut,
    ChevronRight,
    MessageSquare,
    FileText,
    AlertTriangle
} from 'lucide-react';

export default function Sidebar({ activeSection, setActiveSection }) {
    const [expanded, setExpanded] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(section);
        if (section === expandedSection) {
            setExpandedSection(null);
        } else if (section === 'settings' || section === 'tasks' || section === 'reports') {
            setExpandedSection(section);
        }
    };

    const isSubSectionActive = (mainSection, subSection) => {
        return activeSection === `${mainSection}-${subSection}`;
    };

    return (
        <div className={`relative bg-gray-800 text-white h-screen ${expanded ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
            {/* Company Logo */}
            <div className="flex items-center justify-center h-16 bg-gray-900">
                {expanded ? (
                    <span className="font-bold text-xl">EmpTrack</span>
                ) : (
                    <span className="font-bold text-xl">ET</span>
                )}
            </div>

            {/* Toggle Expand Button */}
            <button
                className="absolute top-1/2 -translate-y-1/2 -right-3 bg-gray-700 rounded-full p-1 hover:bg-gray-600 z-20"
                onClick={() => setExpanded(!expanded)}
            >
                <ChevronRight className={`h-4 w-4 text-white transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </button>



            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-2 px-3">
                    {/* Dashboard (default view) */}
                    <li>
                        <button
                            onClick={() => handleSectionClick('dashboard')}
                            className={`flex items-center w-full p-3 rounded-lg hover:bg-gray-700 ${activeSection === 'dashboard' ? 'bg-blue-600' : ''}`}
                        >
                            <LayoutDashboard className="h-5 w-5" />
                            {expanded && <span className="ml-3">Dashboard</span>}
                        </button>
                    </li>

                    {/* Tasks Completion and further details */}
                    <li>
                        <button
                            onClick={() => handleSectionClick('tasks')}
                            className={`flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 ${activeSection === 'tasks' || activeSection.startsWith('tasks-') ? 'bg-blue-600' : ''}`}
                        >
                            <div className="flex items-center">
                                <CheckSquare className="h-5 w-5" />
                                {expanded && <span className="ml-3">Tasks</span>}
                            </div>
                            {expanded && (
                                <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedSection === 'tasks' ? 'rotate-90' : ''}`}
                                />
                            )}
                        </button>
                        {expanded && expandedSection === 'tasks' && (
                            <ul className="mt-2 space-y-1 pl-8">
                                <li>
                                    <button
                                        onClick={() => setActiveSection('tasks-assigned')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('tasks', 'assigned') ? 'bg-gray-700' : ''}`}
                                    >
                                        Assigned Tasks
                                        {/* data will come from cloud */}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('tasks-completed')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('tasks', 'completed') ? 'bg-gray-700' : ''}`}
                                    >
                                        Completed Tasks
                                        {/* data will come from cloud */}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('tasks-create')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('tasks', 'create') ? 'bg-gray-700' : ''}`}
                                    >
                                        Create Task
                                        {/* data will come from cloud */}
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Employees Data and further details (new will be added) */}
                    <li>
                        <button
                            onClick={() => handleSectionClick('employees')}
                            className={`flex items-center w-full p-3 rounded-lg hover:bg-gray-700 ${activeSection === 'employees' ? 'bg-blue-600' : ''}`}
                        >
                            <Users className="h-5 w-5" />
                            {expanded && <span className="ml-3">Employees</span>}
                        </button>
                    </li>

                    {/* Reports */}
                    <li>
                        <button
                            onClick={() => handleSectionClick('reports')}
                            className={`flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 ${activeSection === 'reports' || activeSection.startsWith('reports-') ? 'bg-blue-600' : ''}`}
                        >
                            <div className="flex items-center">
                                <BarChart2 className="h-5 w-5" />
                                {expanded && <span className="ml-3">Reports</span>}
                            </div>
                            {expanded && (
                                <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedSection === 'reports' ? 'rotate-90' : ''}`}
                                />
                            )}
                        </button>
                        {expanded && expandedSection === 'reports' && (
                            <ul className="mt-2 space-y-1 pl-8">
                                <li>
                                    <button
                                        onClick={() => setActiveSection('reports-weekly')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('reports', 'weekly') ? 'bg-gray-700' : ''}`}
                                    >
                                        Weekly Reports
                                        {/* data will come from cloud */}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('reports-monthly')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('reports', 'monthly') ? 'bg-gray-700' : ''}`}
                                    >
                                        Monthly Reports
                                        {/* data will come from cloud */}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('reports-alerts')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('reports', 'alerts') ? 'bg-gray-700' : ''}`}
                                    >
                                        <div className="flex items-center">
                                            <AlertTriangle className="h-4 w-4 mr-1" />
                                            Alerts
                                            {/* data will come from cloud */}
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Settings */}
                    <li>
                        <button
                            onClick={() => handleSectionClick('settings')}
                            className={`flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 ${activeSection === 'settings' || activeSection.startsWith('settings-') ? 'bg-blue-600' : ''}`}
                        >
                            <div className="flex items-center">
                                <Settings className="h-5 w-5" />
                                {expanded && <span className="ml-3">Settings</span>}
                            </div>
                            {expanded && (
                                <ChevronRight
                                    className={`h-4 w-4 transition-transform ${expandedSection === 'settings' ? 'rotate-90' : ''}`}
                                />
                            )}
                        </button>
                        {expanded && expandedSection === 'settings' && (
                            <ul className="mt-2 space-y-1 pl-8">
                                <li>
                                    <button
                                        onClick={() => setActiveSection('settings-notifications')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('settings', 'notifications') ? 'bg-gray-700' : ''}`}
                                    >
                                        <div className="flex items-center">
                                            <Bell className="h-4 w-4 mr-1" />
                                            Notifications
                                            {/* data will come from cloud */}
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('settings-profile')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('settings', 'profile') ? 'bg-gray-700' : ''}`}
                                    >
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            Profile
                                            {/* data will come from cloud */}
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('settings-feedback')}
                                        className={`w-full p-2 rounded-lg text-left text-sm hover:bg-gray-700 ${isSubSectionActive('settings', 'feedback') ? 'bg-gray-700' : ''}`}
                                    >
                                        <div className="flex items-center">
                                            <MessageSquare className="h-4 w-4 mr-1" />
                                            Feedback
                                            {/* data will come from cloud */}
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            {/* User Profile Section */}
            <div className={`border-t border-gray-700 p-4 ${expanded ? '' : 'flex justify-center'}`}>
                {expanded ? (
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                            <User className="h-4 w-4" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium">Mike Johnson</p>
                            <p className="text-xs text-gray-400">Supervisor</p>
                        </div>
                    </div>
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                        <User className="h-4 w-4" />
                    </div>
                )}
            </div>
        </div>
    );
}