
import classNames from 'classnames/bind';
import styles from './Trending.module.scss';

const cx = classNames.bind(styles);

export default function Trending() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        Xu hướng
      </div>
      <div className={cx("content")}>
        <span className={cx("item")}>
            #item 1 kjsdnfkjnds
        </span>
        <span className={cx("item")}>
            #item 2dfgdfg
        </span>
        <span className={cx("item")}>
            #item
        </span>
        <span className={cx("item")}>
            #item 4dsfgager
        </span>
        <span className={cx("item")}>
            #item 1dger
        </span>
        <span className={cx("item")}>
            #item 2
        </span>
        <span className={cx("item")}>
            #item 3
        </span>
        <span className={cx("item")}>
            #item 4
        </span>
      </div>
    </div>
  )
}
