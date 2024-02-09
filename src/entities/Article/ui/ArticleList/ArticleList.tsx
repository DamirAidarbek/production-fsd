import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/articleDetails';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view: ArticleView
}

export const ArticleList = memo(
    ({ className, articles, view }: ArticleListProps) => {
        const { t } = useTranslation();

        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {articles.map((artcle) => (
                    <ArticleListItem
                        article={artcle}
                        key={artcle.id}
                        view={view}
                    />
                ))}
            </div>
        );
    },
);
