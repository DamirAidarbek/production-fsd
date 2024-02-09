import { Comment } from 'entities/Comment';

export interface ArticleDetailsPageSchema {
    isLoading: boolean;
    error?: string;
    data?: Comment[];
}
