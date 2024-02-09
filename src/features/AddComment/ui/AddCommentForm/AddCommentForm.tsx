import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/hooks/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import cls from './AddCommentForm.module.scss';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';
import { getAddCommentError, getAddCommentText } from '../../model/selectors/getAddComment';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducer: ReducersList = {
    addComment: addCommentReducer,
};

export const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentText);
    const error = useSelector(getAddCommentError);

    const onTextChange = useCallback((value: string) => {
        dispatch(addCommentActions.setText(value));
    }, [dispatch]);

    const onSend = useCallback(() => {
        onSendComment(text || '');
        onTextChange('');
    }, [onSendComment, onTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    onChange={onTextChange}
                    clForInput={cls.input}
                    placeholder={t('Введите комментарий')}
                    inputPlaceholder={t('Вводите сюда')}
                />
                <Button
                    className={cls.submitBtn}
                    onClick={onSend}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
