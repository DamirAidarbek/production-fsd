import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getProfileCanEdit } from '../../model/selectors/getProfileCanEdit/getProfileCanEdit';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './ProfileHeader.module.scss';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface ProfileHeaderProps {
    className?: string;
    error?: boolean;
    profileId?: string;
}

export const ProfileHeader = memo(({ className, error, profileId }: ProfileHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const canEdit = useSelector(getProfileCanEdit);

    const setReadonly = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelUpdate = useCallback(() => {
        dispatch(profileActions.onCancelUpdate());
    }, [dispatch]);

    const updateProfileHandler = useCallback(() => {
        if (profileId) {
            dispatch(updateProfileData(profileId));
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfileHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.btns}>
                    {readonly || error
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={setReadonly}
                                disabled={error}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={cls.cancelBtn}
                                    onClick={onCancelUpdate}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={updateProfileHandler}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
});
