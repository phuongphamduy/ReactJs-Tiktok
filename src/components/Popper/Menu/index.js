import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { WrapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    function renderMenu() {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    }

    return (
        <Tippy
            delay={[0, 700]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <WrapperPopper className={cx('menu-popper')}>
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        {renderMenu()}
                    </div>
                </WrapperPopper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
