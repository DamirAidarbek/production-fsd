import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextComponent.module.scss';
import { ArticleBlockText } from '../../model/types/articleDetails';

interface ArticleTextComponentProps {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleTextComponent = memo((props: ArticleTextComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => <Text text={paragraph} key={paragraph} className={cls.paragraph} />)}
        </div>
    );
});
