import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments?: Array<Comment>
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => <CommentCard comment={comment} key={comment.id} />)
                : <div>{t('Комментарий отсутствует')}</div>}
        </div>
    );
});
