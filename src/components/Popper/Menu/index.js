import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { WrapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    function renderMenu() {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    }

    return (
        <Tippy
            delay={[0, 700]}
            offset={[16, 8]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <WrapperPopper className={cx('menu-popper')}>
                    {history.length > 1 && (
                        <Header
                            title={current.title}
                            onBack={() => {
                                setHistory((prev) => prev.slice(0, prev.length - 1));
                            }}
                        />
                    )}
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        {renderMenu()}
                    </div>
                </WrapperPopper>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
