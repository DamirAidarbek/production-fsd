import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlock, ArticleBlockText, ArticleBlockType, ArticleView,
} from '../../model/types/articleDetails';

interface ArticleListItemProps {
    className?: string;
    view: ArticleView;
    article: Article
}

export const ArticleListItem = memo(
    ({ className, article, view }: ArticleListItemProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
        const onClick = useCallback(() => {
            navigate(RoutePath.articles_details + article.id);
        }, [article.id, navigate]);

        const types = <Text text={article.type.join(', ')} className={cls.types} />;
        const views = (
            <>
                <Icon Svg={EyeIcon} className={cls.icon} />
                <Text text={String(article.views)} />
            </>
        );

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleBlockText;

            return (
                <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                    <Card>
                        <div className={cls.userInfo}>
                            <Avatar src={article.user.avatar} size={30} />
                            <Text text={article.user.username} />
                        </div>
                        {types}
                        <Text title={article.title} className={cls.title} />
                        <img src={article.img} alt={article.title} className={cls.img} />
                        {textBlock && <ArticleTextComponent block={textBlock} className={cls.block} />}
                        <div className={cls.footer}>
                            <AppLink
                                to={RoutePath.articles_details + article.id}
                            >
                                <Button>
                                    {t('Читать далее')}
                                </Button>
                            </AppLink>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                onClick={onClick}
            >
                <Card>
                    <div className={cls.imgWrapper}>
                        <img src={article.img} alt={article.title} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.info}>
                        {types}
                        {views}
                    </div>
                    <Text title={article.title} />
                </Card>
            </div>
        );
    },
);
