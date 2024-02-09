import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./AddCommentForm'));
    }, 1000);
}));
