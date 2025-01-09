import React from "react";
import { Link, Outlet } from "react-router";
import { useSelector } from "react-redux";

const Sidebar = () => {
  return (
    <aside className="bg-white p-4 space-y-4 w-60 border-r-2 border-blue-700">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <hr className="border-2 my-4 border-blue-700" />
      <nav>
        <ul className="space-y-1">
          <li>
            <Link to="/admin/" className="text-lg font-semibold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/mahasiswa" className="text-lg font-semibold">
              Mahasiswa
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="bg-white w-full text-right p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Welcome, {user.name}</h1>
        <button
          type="button"
          className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75"
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="py-2">
      &copy; 2024 - M Naufal Adrian Pratama Putra
    </footer>
  );
};

// komponen utama
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen  bg-slate-100">
      <Sidebar />
      <div className="flex flex-col flex-1 items-center">
        <Header />
        <main className="bg-white flex-grow w-[90%] max-w-[90%] overflow-x-auto my-4 p-4 rounded-lg space-y-4 shadow-lg">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
