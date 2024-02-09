import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleBlockCode } from '../../model/types/articleDetails';
import cls from './ArticleCodeComponent.module.scss';

interface ArticleCodeComponentProps {
    className?: string;
    block: ArticleBlockCode
}

export const ArticleCodeComponent = (props: ArticleCodeComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeComponent, {}, [className])}>
            <Code codeText={block.code} />
        </div>
    );
};
