import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText: string
}

export const Code = memo(({ className, codeText }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText || '');
    }, [codeText]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <code>
                {codeText}
            </code>
        </pre>
    );
});
