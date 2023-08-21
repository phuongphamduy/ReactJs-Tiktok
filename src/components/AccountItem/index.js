import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Account.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a730d2852090986fc22782dbae7efdb1~c5_100x100.jpeg?x-expires=1692784800&x-signature=%2FUXEXMWyuU5fLm0cFct%2B%2B092X94%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
