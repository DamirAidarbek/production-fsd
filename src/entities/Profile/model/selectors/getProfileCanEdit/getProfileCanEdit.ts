import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileCanEdit = createSelector(
    getProfileData,
    getUserAuthData,
    (profile, user) => Boolean(profile?.id === user?.id),
);
