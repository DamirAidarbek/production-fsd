import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsComments = (state: StateSchema) => state.articleDetailsPageComments?.data;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsPageComments?.error;
export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsPageComments?.isLoading;
