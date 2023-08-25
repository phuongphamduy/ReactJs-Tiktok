import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreviews/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    function renderPreview(props) {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    }

    return (
        <Tippy interactive delay={[800, 0]} offset={[-20, 10]} render={renderPreview} placement="bottom">
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2f19089323dbb3ce0e6ae9d9a1f40006~c5_100x100.jpeg?x-expires=1693123200&x-signature=%2BT5Px%2F%2F2wijM0lU8iK%2FE6ChGcEQ%3D"
                    alt="anh loi"
                />
                <div className={cx('account-info')}>
                    <p className={cx('nickname')}>
                        <strong>thutran0511</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Trần Vũ Anh Thư</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
