import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchCommentByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { Comment } from 'entities/Comment';
import { ArticleDetailsPageSchema } from '../types/articleDetailsPageSchema';

const initialState: ArticleDetailsPageSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

const articleDetailsPageSlice = createSlice({
    name: 'articleDetailsPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCommentByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsPageActions } = articleDetailsPageSlice;
export const { reducer: articleDetailsPageReducer } = articleDetailsPageSlice;
