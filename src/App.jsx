import "./App.css";

const Sidebar = () => {
  return (
    <aside className="bg-blue-200 p-4 space-y-4 w-60">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <nav className="ml-4">
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Mahasiswa</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="bg-white w-full text-right p-4">
      <div className="flex justify-end">
        <button type="button" className="btn-primary">
          Sign out
        </button>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main className="bg-white flex-grow w-[90%] my-4 p-4 rounded-lg space-y-4 shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Daftar Mahasiwa</h2>
        <button className="tombol-tambah btn-success">Tambah Mahasiswa</button>
      </div>
      <table className=" table-auto w-full ">
        <thead className=" text-left">
          <tr>
            <th>No.</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>A11.2022.14188</td>
            <td>Naufal</td>
            <td>
              <div className="flex flex-wrap gap-2">
                <button className="btn-warning tombol-edit">Edit</button>
                <button className="btn-danger tombol-delete">Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>A11.2022.12345</td>
            <td>Adrian</td>
            <td>
              <div className="flex flex-wrap gap-2">
                <button className="btn-warning tombol-edit">Edit</button>
                <button className="btn-danger tombol-delete">Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>A11.2022.67891</td>
            <td>Putra</td>
            <td>
              <div className="flex flex-wrap gap-2">
                <button className="btn-warning tombol-edit">Edit</button>
                <button className="btn-danger tombol-delete">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="py-2">
      &copy; 2024 - M Naufal Adrian Pratama Putra
    </footer>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// komponen utama
function App() {
  return (
    <div className="flex min-h-screen bg-slate-200">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
