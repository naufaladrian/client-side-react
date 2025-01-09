import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateMahasiswa = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    nim: "",
    nama: "",
    alamat: "",
    umur: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.put(
        `http://demo-api.syaifur.io/api/mahasiswa/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage("Mahasiswa berhasil diupdate!");
      setFormData({
        progdi_id: "",
        nim: "",
        nama: "",
        alamat: "",
        umur: "",
      });
      console.log(response.data.data);
    } catch (error) {
      setMessage("Terjadi kesalahan saat mengirim data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Formulir Update Mahasiswa ID: {id}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">NIM</label>
          <input
            type="text"
            name="nim"
            value={formData.nim}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Alamat
          </label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Umur
          </label>
          <input
            type="number"
            name="umur"
            value={formData.umur}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Ubah Mahasiswa"}
        </button>
      </form>
      {message && (
        <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default UpdateMahasiswa;
