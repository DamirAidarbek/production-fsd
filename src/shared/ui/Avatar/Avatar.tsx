import { classNames } from 'shared/lib/classNames/classNames';
import {
    CSSProperties, HTMLAttributes, memo, useMemo,
} from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps extends HTMLAttributes<HTMLImageElement>{
    className?: string;
    size?: number;
    src?: string;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
        ...otherProps
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});
