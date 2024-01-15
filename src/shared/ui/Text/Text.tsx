import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextTheme {
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = '',
        align = TextAlign.LEFT,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            { title && <h3 className={cls.title}>{title}</h3> }
            { text && <p className={cls.text}>{text}</p> }
        </div>
    );
});
