import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Swal from "sweetalert2";
import axios from "axios";

const Row = ({
  id,
  progdi,
  nim,
  nama,
  alamat,
  umur,
  created_at,
  updated_at,
  deleted_at,
}) => {
  const navigate = useNavigate();

  const swalDeleteConfirm = async (id) => {
    Swal.fire({
      title: `Yakin mau hapus data dengan id ${id}?`,
      text: "Tidak bisa melakukan undo setelah menghapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`http://demo-api.syaifur.io/api/mahasiswa/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          Swal.fire(
            "Terhapus!",
            `Data dengan id ${id} berhasil terhapus.`,
            "success"
          );
        } catch (error) {
          Swal.fire("Error!", `Data dengan id ${id} gagal terhapus.`, "error");
        }
      } else {
        Swal.fire("Gagal", `Data dengan id ${id} tidak terhapus`, "error");
      }
    });
  };

  return (
    <tr className="border-collapse border-b border-slate-400 py-2 px-4">
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {id}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {progdi}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {nim}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {nama}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {alamat}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {umur}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {created_at}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {updated_at}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        {deleted_at}
      </td>
      <td className="border-collapse border-b border-slate-400 py-2 px-4">
        <div className="flex flex-wrap gap-2">
          <Button
            text={"Edit"}
            variant={"warning"}
            onClick={() => navigate("/admin/mahasiswa/edit/" + id)}
          />
          <Button
            text={"Delete"}
            variant={"danger"}
            onClick={() => swalDeleteConfirm(id)}
          />
        </div>
      </td>
    </tr>
  );
};

export const Table = ({ data }) => {
  return (
    <div className="overflow-auto  max-w-[80dvw] max-h-[70dvh]">
      <table className="table-auto w-full ">
        <thead className="text-left sticky top-0 bg-white shadow-md">
          <tr className="border-collapse border-b border-slate-400 py-2 px-4">
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              ID
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Prodi
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              NIM
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Nama
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Alamat
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Umur
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Created At
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Updated At
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Deleted At
            </th>
            <th className="border-collapse border-b border-slate-400 py-2 px-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((mhs) => (
              <Row
                key={mhs.id}
                id={mhs.id}
                progdi={mhs?.progdi?.nama}
                nim={mhs.nim}
                nama={mhs.nama}
                alamat={mhs.alamat}
                umur={mhs.umur}
                created_at={mhs.created_at}
                updated_at={mhs.updated_at}
                deleted_at={mhs.deleted_at || "Belum dihapus"}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
