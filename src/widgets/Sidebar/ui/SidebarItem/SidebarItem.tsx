import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItems } from 'widgets/Sidebar/model/sidebarItems';
import { memo } from 'react';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    item: SidebarItems;
    collapsed: boolean;
}

export const SidebarItem = memo(({ className, item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}
            theme={AppLinkTheme.INVERTED}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.text}>{t(item.text)}</span>
        </AppLink>
    );
});
