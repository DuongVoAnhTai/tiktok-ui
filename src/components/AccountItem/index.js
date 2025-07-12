import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14ed4f8716cdf2f8674b72c6af96d6ad~tplv-tiktokx-cropcenter:100:100.webp?dr=14579&refresh_token=6140e304&x-expires=1752483600&x-signature=UtTfEe%2BzUsPvaOGczq6siiczsjI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=my"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
