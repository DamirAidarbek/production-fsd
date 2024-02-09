import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/hooks/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddComment';
import {
    addCommentForArticle,
} from '../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentByArticleId,
} from '../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import {
    getArticleDetailsComments, getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from '../model/selectors/getArticleDetailsPageComments';
import { articleDetailsPageReducer } from '../model/slice/articleDetailsPageSlice';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducer: ReducersList = {
    articleDetailsPageComments: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleDetailsComments);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentsError = useSelector(getArticleDetailsCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(fetchCommentByArticleId(id));
        }
    }, [dispatch, id]);

    if (!id) {
        return (
            <div>
                {t('Ошибка такой статьи нету')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <AddCommentForm onSendComment={onSendComment} />
                <Text title={t('Комментарий')} className={cls.commentTitle} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
