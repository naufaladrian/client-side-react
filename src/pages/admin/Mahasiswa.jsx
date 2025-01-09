import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Mahasiswa() {
  const [data, setData] = useState([]); // State untuk menyimpan data mahasiswa
  const [error, setError] = useState(null); // State untuk menyimpan pesan error
  const navigate = useNavigate();

  // Fungsi untuk mengambil data mahasiswa
  const fetchMahasiswa = async () => {
    try {
      const response = await axios.get(
        "http://demo-api.syaifur.io/api/mahasiswa",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ambil token dari localStorage
          },
        }
      );
      setData(response.data.data); // Update state dengan data mahasiswa
      setError(null); // Reset error jika berhasil mengambil data
    } catch (error) {
      setError("Data Tidak Dapat Diambil"); // Set pesan error jika gagal
      console.error("Error fetching mahasiswa data:", error);
    }
  };

  // Jalankan fetch data saat komponen di-mount
  useEffect(() => {
    fetchMahasiswa();
  }, []);

  return (
    <section>
      <div className="flex justify-between pb-4">
        <h2 className="text-2xl font-semibold">Daftar Mahasiswa</h2>
        <Button
          text={"Tambah Mahasiswa"}
          variant={"success"}
          onClick={() => navigate("/admin/mahasiswa/create")}
        />
      </div>
      {error ? (
        <p className="text-red-500">{error}</p> // Tampilkan pesan error jika ada
      ) : (
        <Table data={data} /> // Tampilkan tabel data mahasiswa
      )}
    </section>
  );
}
