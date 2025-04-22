import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        // <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        //   <div className="text-xl font-bold">EmpTrack</div>
        //   <div className="space-x-4">
        //     <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
        //     <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        //     <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        //   </div>
        // </nav>
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">EmpTrack</h1>
                <div className="flex space-x-6 text-sm">
                    {/* <a href="/" className="hover:text-blue-600">Home</a>
                    <a href="/about" className="hover:text-blue-600">About</a>
                    <a href="/dashboard" className="hover:text-blue-600">Dashboard</a> */}
                    <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
             <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                </div>
            </div>
        </nav>

    );
}
