import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comment } from 'entities/Comment';

import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import {
    fetchCommentByArticleId,
} from '../fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'article/fetchCommentByArticleId',
    async (text, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;

        const article = getArticleDetailsData(getState());
        const user = getUserAuthData(getState());

        if (!text || !article || !user) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: user.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
