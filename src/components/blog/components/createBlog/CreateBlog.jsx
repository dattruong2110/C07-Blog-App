import classNames from "classnames/bind";

import styles from './CreateBlog.module.scss';
import { useRef, useState } from "react";


const cx = classNames.bind(styles);
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("")
  const handleChangeTitle = (e)=>{
    setTitle(e.target.value)
    console.log(title);
  };
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
            <input
              type="file"
              ref={imgInputRef}
              onChange={handleFileChange}
              className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
        </div>
    </div>
  )
}
