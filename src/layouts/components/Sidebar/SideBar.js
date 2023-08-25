import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeIconActve,
    GroupUserIcon,
    GroupUserIconActive,
    DirectionIcon,
    DirectionIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActve />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserIconActive />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<DirectionIcon />}
                    activeIcon={<DirectionIconActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
