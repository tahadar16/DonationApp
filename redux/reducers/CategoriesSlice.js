import { createSlice } from '@reduxjs/toolkit'

const categories = [
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryId: 5,
      name: 'Household goods',
    },
    {
      categoryId: 6,
      name: 'Electronics',
    },
    {
      categoryId: 7,
      name: 'Toys and Games',
    },
    {
      categoryId: 8,
      name: 'Sports Equipment',
    },
    {
      categoryId: 9,
      name: 'Books and Media',
    },
    {
      categoryId: 10,
      name: 'Health and Beauty Products',
    },
    {
      categoryId: 11,
      name: 'Office supplies',
    },
    {
      categoryId: 12,
      name: 'Tools and Hardware',
    },
    {
      categoryId: 13,
      name: 'Art and Craft Supplies',
    },
  ];


const initialCategoriesState = {
    categories : categories,
    selectedCategoryId : 1
}

export const CategoriesSlice = createSlice({
    name: "CategoriesSlice",
    initialState: initialCategoriesState,
    reducers: {
        updateSelectedCategoryId: (state, action) => {
            state.selectedCategoryId = action.payload.selectedCategoryId
        }
    }
})

export const { updateSelectedCategoryId } = CategoriesSlice.actions;
export default CategoriesSlice;