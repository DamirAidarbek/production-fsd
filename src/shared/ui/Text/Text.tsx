import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            { title && <h3 className={cls.title}>{title}</h3> }
            { text && <p className={cls.text}>{text}</p> }
        </div>
    );
};
