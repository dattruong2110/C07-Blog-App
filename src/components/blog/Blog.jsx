
import classNames from "classnames/bind";

import styles from './Blog.module.scss';
import BlogDetail from "./components/blogDetail/BlogDetail";
import News from "./components/news/News";
import Trending from "./components/Trending/Trending";
import { useParams } from "react-router";

const cx = classNames.bind(styles);

export default function Blog() {
  const { id } = useParams();
  console.log("id in blog "+id);
  return (

    
    <div className="container mx-auto px-20 pb-5">
        <div className={cx("blog-container")}>
          <div className={cx("left-container")}>
            <BlogDetail id={id}/>
          </div>
          <div className={cx("right-container")}>
            <Trending/>
            <News/>
          </div>
        </div>
    </div>
  )
}
