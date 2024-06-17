import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import classNames from "classnames/bind";

import styles from "./CreateBlog.module.scss";

const cx = classNames.bind(styles);
export default function CreateBlog() {
  // const userId = useSelector((state) => {
  //   state.user.id;
  //   console.log(state);
  // });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      picture: {
        url: url,
        description,
      },
      category,
      userId: "a607524e-e833-4cd5-a1ed-c1d12fe9d9be",
    };

    console.log("postData: ", postData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/blog",
        postData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/blog/category")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const imgInputRef = useRef(null);
  return (
    <div className="container mx-auto px-20 pb-5">
      <div className={cx("input-title")}>
        <textarea
          onChange={handleChangeTitle}
          placeholder="Nhập tiêu đề bài viết..."
          value={title}
          maxLength="100"
        ></textarea>
        <span>{title.length}/100 ký tự</span>
      </div>

      <div className={cx("input-img")}>
        <p>Nhập vào hình ảnh</p>
        <input
          type="file"
          ref={imgInputRef}
          onChange={handleFileChange}
          className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
        />
        <div className={cx("input-img")}>
          <input
            placeholder="Nhập mô tả của hình ảnh"
            value={description}
            onChange={handleChangeDescription}
          />
        </div>
      </div>
      <div className={cx("input-content")}>
        <textarea
          onChange={handleChangeContent}
          placeholder="Nhập nội dung bài viết..."
          value={content}
        ></textarea>
        <span>{content.length} ký tự</span>
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className={cx("submit-btn")}>
        <button className={cx("btn")} onClick={handleSubmit}>
          Đăng bài viết
        </button>
      </div>
    </div>
  );
}
