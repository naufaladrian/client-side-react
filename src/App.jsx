import "./App.css";
import Swal from "sweetalert2";

const swalDeleteConfirm = (nim) => {
  Swal.fire({
    title: `Yakin mau hapus mahasiswa dengan nim ${nim}?`,
    text: "Tidak bisa melakukan undo setelah menghapus!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Terhapus!",
        `mahasiswa dengan nim ${nim} berhasil terhapus.`,
        "success"
      );
    } else {
      Swal.fire(
        "Gagal",
        `mahasiswa dengan nim ${nim} :) tidak terhapus`,
        "error"
      );
    }
  });
};

const swallEdit = async (nim) => {
  try {
    const { value: formValue } = await Swal.fire({
      title: "Ganti Nama mahasiswa dengan nim " + nim,
      html: `
        <label for="swal-input-nama">Nama</label>
        <input id="swal-input-nama" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return document.getElementById("swal-input-nama").value;
      },
    });

    if (formValue) {
      Swal.fire(`Nama: ${formValue}`);
    }
  } catch (error) {
    console.error("Error during Swal.fire:", error);
  }
};

const swallAddStudent = async () => {
  try {
    const { value: formValues } = await Swal.fire({
      title: "Tambah Mahasiswa",
      html: `
        <label for="swal-input-nim">NIM</label>
        <input id="swal-input-nim" class="swal2-input">
        <label for="swal-input-nama">Nama</label>
        <input id="swal-input-nama" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nim: document.getElementById("swal-input-nim").value,
          nama: document.getElementById("swal-input-nama").value,
        };
      },
    });

    if (formValues) {
      const confirmation = await Swal.fire({
        title: "Konfirmasi",
        text: `Apakah Anda yakin ingin menambah mahasiswa dengan NIM: ${formValues.nim} dan Nama: ${formValues.nama}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, tambah!",
        cancelButtonText: "Batal",
      });

      if (confirmation.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          icon: "success",
        });
      }
    }
  } catch (error) {
    console.error("Error during Swal.fire:", error);
  }
};
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

const Row = ({ no, nim, nama }) => {
  return (
    <tr className="border-collapse border-b border-slate-400 py-2 px-4">
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {no}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {nim}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {nama}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        <div className="flex flex-wrap gap-2">
          <button
            className="py-2 px-5 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-75"
            onClick={() => swallEdit(nim)}
          >
            Edit
          </button>
          <button
            className="py-2 px-5 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75 "
            onClick={() => swalDeleteConfirm(nim)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <table className=" table-auto w-full ">
      <thead className=" text-left">
        <tr className="border-collapse border-b border-slate-400 py-2 px-4">
          <th className="border-collapse border-b border-slate-400 py-2 px-4">
            No.
          </th>
          <th className="border-collapse border-b border-slate-400 py-2 px-4">
            NIM
          </th>
          <th className="border-collapse border-b border-slate-400 py-2 px-4">
            Nama
          </th>
          <th className="border-collapse border-b border-slate-400 py-2 px-4">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <Row no="1" nim="A11.2022.14188" nama="Naufal" />
        <Row no="2" nim="A11.2022.12345" nama="Adrian" />
        <Row no="3" nim="A11.2022.67891" nama="Putra" />
      </tbody>
    </table>
  );
};

const Main = () => {
  return (
    <main className="bg-white flex-grow w-[90%] my-4 p-4 rounded-lg space-y-4 shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Daftar Mahasiwa</h2>
        <button
          onClick={swallAddStudent}
          className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-75"
        >
          Tambah Mahasiswa
        </button>
      </div>
      <Table />
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
