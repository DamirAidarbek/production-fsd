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

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = '',
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const additional: Array<string | undefined> = [
        className,
        cls[theme],
        cls[align],
        cls[size],
    ];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            { title && <h3 className={cls.title}>{title}</h3> }
            { text && <p className={cls.text}>{text}</p> }
        </div>
    );
});
