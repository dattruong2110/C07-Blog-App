import classNames from "classnames/bind";

import styles from './CreateBlog.module.scss';
import { useRef, useState } from "react";


const cx = classNames.bind(styles);
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("")
  const [blog, setBlog] =useState({
    title: title,
    content: content,
    picture:{
      url: img,
      description: description
    },
    category: "ca",
    userId: "id"
  });
  const handleChangeTitle = (e)=>{
    setTitle(e.target.value)
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }
  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result)
        console.log(img);
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
            maxLength="100">
          </textarea>
          <span>
            {title.length}/100 ký tự
          </span>
        </div>

        <div className={cx("input-img")}>
          <p>
            Nhập vào hình ảnh
          </p>
            <input
              type="file"
              ref={imgInputRef}
              onChange={handleFileChange}
              className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
        </div>
        <div>
          <p>
            Nhập vào mô tả của hình ảnh
          </p>
          <input value={description} onChange={handleChangeDescription}/>
        </div>
        <div className={cx("input-content")}>
          <textarea 
            onChange={handleChangeContent} 
            placeholder="Nhập nội dung bài viết..." 
            value={content}
            >
          </textarea>
          <span>
            {content.length} ký tự
          </span>
        </div>
    </div>
  )
}
