import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

//  COMPONENT FOR TESTS
export const BugButton = () => {
    const { t } = useTranslation();
    const [hasError, setHasError] = useState(false);
    const newError = () => {
        setHasError(true);
    };

    useEffect(() => {
        if (hasError) throw new Error();
    }, [hasError]);

    return (
        <Button onClick={newError}>
            {t('throw new Error')}
        </Button>
    );
};
