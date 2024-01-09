import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    useDynamicModuleLoader({ reducers, removeAfterUnmount: true });

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {t('Страница профиля')}
        </div>
    );
};

export default ProfilePage;
