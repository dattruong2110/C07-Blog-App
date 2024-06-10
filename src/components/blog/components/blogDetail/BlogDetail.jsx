

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './BlogDetail.module.scss';
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
export default function BlogDetail({id}) {
    
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const fetchBlog = async ()=> {
            try {
                const response = await fetch(`http://localhost:8080/api/blog/${id}`);
                const data = await response.json();
                setBlog(data)
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchBlog();
    }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("category")}>
            <span className={cx("category-text")}>Diễn đàn</span>
            <span className={cx("category-icon")}>
                <FontAwesomeIcon icon={faCaretRight}/>
            </span>
            <span className={cx("category-text")}>{blog.category}</span>
      </div>
      <div className={cx("title")}>
        {blog.title}
      </div>
      <div className={cx("user")}>
        <div className={cx("user-avt")}>
            <img className={cx("img")} src="https://gauteddy.vn/wp-content/uploads/2020/11/gau-bong-teddy-3-2.jpg"/>
        </div>
        <div className={cx("user-des")}>
            <div className={cx("username")}>
                {blog.user?.fullName}

            </div>
            <div className={cx("posting-time")}>
                21/5/2024 12:35
            </div>
        </div>
      </div>
      <div className={cx("box-content")}>
        <div className={cx("picture")}>
            {blog.picture?<img src={blog.picture.url}/>:<span></span>}
            {blog.picture?<p className={cx("picture_des")}>
                {blog.picture.description}
            </p>:""}
        </div>
        <div className={cx("content")}>
            {blog.content}
        </div>
      </div>
    </div>
  )
}
