import { createSelector } from 'reselect';
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';
import { RootState } from '../store';

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories;


export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesReducer) => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category): CategoryMap => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesReducer) => categoriesReducer.isLoading
)