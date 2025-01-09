import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(form);

      const response = await axios.post(
        "http://demo-api.syaifur.io/api/login/",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 200) {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: response.data.message,
        });

        const { user, token } = response.data.data;
        setForm({ email: "", password: "" });
        dispatch(login({ user, token }));

        localStorage.setItem("token", token);
      }
      navigate("/admin");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message,
      });
    } finally {
      e.target.reset();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            text="Login"
            variant="primary"
            className="w-full mt-6"
          />
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Belum Punya Akun?{" "}
          <Link to={"/register"} className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
