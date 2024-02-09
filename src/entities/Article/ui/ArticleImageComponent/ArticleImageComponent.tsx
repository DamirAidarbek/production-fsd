import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleBlockImage } from '../../model/types/articleDetails';
import cls from './ArticleImageComponent.module.scss';

interface ArticleImageComponentProps {
    className?: string;
    block: ArticleBlockImage
}

export const ArticleImageComponent = ({ className, block }: ArticleImageComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageComponent, {}, [className])}>
            <img
                src={block.src}
                alt={t('Изображение статьи')}
                className={cls.image}
            />
            {block.title && <Text title={block.title} align={TextAlign.CENTER} />}
        </div>
    );
};
