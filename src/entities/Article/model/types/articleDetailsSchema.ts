import { Article } from './articleDetails';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
