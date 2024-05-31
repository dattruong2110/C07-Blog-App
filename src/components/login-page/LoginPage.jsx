import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Tên người dùng là bắt buộc"),
      password: Yup.string().required("Mật khẩu là bắt buộc"),
    }),
    onSubmit: async (values) => {
      const data = {
        username: values.username,
        password: values.password,
      };

      try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        console.log(result);

        if (result.status === "OK") {
          alert("Login successfully!");
          localStorage.setItem("user", JSON.stringify(result));
          if (values.rememberMe) {
            localStorage.setItem("user", JSON.stringify(result));
          }
          navigate("/");
        } else {
          alert("Login failed!");
        }

        formik.resetForm();
      } catch (error) {
        console.error("Error: ", error);
        alert("Login failed, please try again.");
      }
    },
  });

  return (
    <div className="h-screen min-h-screen max-h-screen bg-gray-200 flex justify-center items-center p-4">
      <div className="bg-white shadow w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96">
        <div className="flex justify-end">
          <img
            src="https://www.ns-logo.com/wp-content/uploads/2020/07/logo-icon-png-8.png"
            alt=""
            className="w-8"
          />
        </div>

        <p className="text-center pb-2 text-2xl">Đăng nhập tài khoản</p>

        <form onSubmit={formik.handleSubmit} className="my-5">
          <div className="pb-5 text-sm text-center">
            <p>
              Chưa có tài khoản?{" "}
              <a href="/register" className="text-blue-800 hover:underline">
                Đăng ký
              </a>
            </p>
          </div>

          <div className="pb-5">
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Tên người dùng"
              required
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            ) : null}
          </div>

          <div className="pb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Mật khẩu"
              required
            />
            <span
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-gray-600"
              />
            </span>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className="pb-5 flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
            <label htmlFor="rememberMe" className="ml-2">
              Ghi nhớ mật khẩu
            </label>
          </div>

          <div className="pb-5 text-right text-sm">
            <a href="#" className="font-semibold hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 p-2 w-full text-white rounded"
          >
            Đăng nhập
          </button>
        </form>

        <hr />

        <div className="mt-8 relative flex justify-around">
          <div className="bg-blue-800 h-12 w-12 flex justify-center items-center rounded-full text-white">
            <FontAwesomeIcon icon={faFacebook} />
          </div>

          <div className="bg-red-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          <div className="bg-blue-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
