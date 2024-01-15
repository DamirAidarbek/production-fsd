import { Currency } from 'entities/Currency/model/types/Currency';
import { Country } from 'entities/Country/model/types/Country';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AGE = 'INCORRECT_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
    id?: string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
    form?: Profile;
    validateErrors?: ValidateProfileErrors[];
}
