import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { memo } from 'react';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currensy: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = memo(({
    className,
    error,
    data,
    isLoading,
    onChangeAvatar,
    onChangeAge,
    onChangeCountry,
    onChangeCurrency,
    onChangeFirstname,
    onChangeLastname,
    onChangeUsername,
    onChangeCity,
    readonly,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте перезагрузить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, { [cls.editable]: !readonly }, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                            className={cls.avatar}
                            size={150}
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возвраст')}
                    className={cls.input}
                    type="number"
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваша город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ваш URL аватара')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Ваш username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    value={data?.currency}
                />
                <CountrySelect
                    className={cls.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    value={data?.country}
                />
            </div>
        </div>
    );
});
