import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/Country';

interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Country) => void
    value?: string;
    readonly?: boolean;
}

const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
];

export const CountrySelect = memo(({
    className,
    onChange,
    readonly,
    value,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            options={options}
            label={t('Укажите страну')}
            onChange={onChangeHandler}
            disabled={readonly}
            value={value}
        />
    );
});
