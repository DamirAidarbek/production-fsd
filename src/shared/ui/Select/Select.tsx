import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    options?: Array<SelectOptions>;
    disabled?: boolean;
    label?: string;
    onChange?: (value: string) => void;
    value?: string;
}

export const Select = memo(({
    className,
    options,
    label,
    disabled,
    value,
    onChange,
}: SelectProps) => {
    const optionList = useMemo(
        () => options?.map((option) => (
            <option
                key={option.value}
                value={option.value}
                className={cls.option}
            >
                {option.content}
            </option>
        )),
        [options],
    );

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={classNames(cls.selectWrapper, {}, [className])}>
            { label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                disabled={disabled}
                onChange={onChangeHandler}
                value={value}
            >
                {optionList}
            </select>
        </div>
    );
});
