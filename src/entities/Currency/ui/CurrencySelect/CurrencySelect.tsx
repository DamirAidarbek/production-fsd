import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Currency) => void
    value?: string;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.KZT, content: Currency.KZT },
];

export const CurrencySelect = memo(({
    className,
    onChange,
    readonly,
    value,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            options={options}
            label={t('Укажите валюту')}
            onChange={onChangeHandler}
            disabled={readonly}
            value={value}
        />
    );
});
