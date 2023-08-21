import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { WrapperPopper } from '~/components/Popper';
import style from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(style);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {}, []);

    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok logo" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <WrapperPopper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-result-heading')}>Bạn có thể thích</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </div>
                        </WrapperPopper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="search account and video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
