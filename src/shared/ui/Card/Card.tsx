import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    );
};
