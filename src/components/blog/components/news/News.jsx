import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

export default function News() {
  return (
    <div className={cx("wrapper")}> 
      <div className={cx("header")}>
        Bài mới
      </div>
    </div>
  )
}
