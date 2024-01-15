import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    type?: string;
    value?: string | number,
    onChange?: (e: string) => void
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        autofocus = false,
        readonly,
        ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            { placeholder && <span className={cls.placeholder}>{placeholder}</span> }
            <input
                className={cls.inputItem}
                type={type}
                value={value}
                onChange={onChangeHandler}
                ref={inputRef}
                disabled={readonly}
                {...otherProps}
            />
        </div>
    );
});
