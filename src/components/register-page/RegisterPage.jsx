import { useRef, useState } from "react";
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

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState("");
  const avatarInputRef = useRef(null);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Tên người dùng là bắt buộc")
      .test(
        "checkDuplicateUsername",
        "Tên người dùng đã tồn tại",
        async (value) => {
          const response = await fetch(
            `http://localhost:8080/api/user/check-username?username=${value}`
          );
          const result = await response.json();
          return !result;
        }
      ),
    fullName: Yup.string().required("Tên đầy đủ là bắt buộc"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc")
      .test("checkDuplicateEmail", "Email đã tồn tại", async (value) => {
        const response = await fetch(
          `http://localhost:8080/api/user/check-email?email=${value}`
        );
        const result = await response.json();
        return !result;
      }),
    password: Yup.string()
      .required("Mật khẩu là bắt buộc")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
      ),
    agreeTerms: Yup.bool()
      .oneOf([true], "Bạn phải đồng ý với điều khoản")
      .required("Bạn phải đồng ý với điều khoản"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      const data = { ...values, avatar };
      console.log(data);

      try {
        const response = await fetch(
          "http://localhost:8080/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);

        if (result.message === "Register success") {
          alert("Registration successfully!");
          navigate("/login");
        } else {
          alert("Registration failed!");
        }

        formik.resetForm();
        if (avatarInputRef.current) {
          avatarInputRef.current.value = "";
        }
        setAvatar("");
      } catch (error) {
        console.error("Error: ", error);
        alert("Registration failed, please try again.");
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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

        <p className="text-center pb-2 text-2xl">Tạo tài khoản mới</p>

        <form onSubmit={formik.handleSubmit} className="my-5">
          <div className="pb-5 text-sm text-center">
            <p>
              Đã có tài khoản?{" "}
              <a href="/login" className="text-blue-800 hover:underline">
                Đăng nhập
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
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            ) : null}
          </div>

          <div className="pb-5">
            <input
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Tên đầy đủ"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          <div className="pb-5">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
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

          <div className="pb-5">
            <input
              type="file"
              ref={avatarInputRef}
              onChange={handleFileChange}
              className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
          </div>

          <div className="pb-5 flex items-center">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="agreeTerms" className="ml-2">
              Tôi đồng ý với điều khoản
            </label>
            {formik.touched.agreeTerms && formik.errors.agreeTerms ? (
              <div className="text-red-500 text-sm">
                {formik.errors.agreeTerms}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 p-2 w-full text-white rounded"
          >
            Đăng ký
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

export default RegisterPage;
