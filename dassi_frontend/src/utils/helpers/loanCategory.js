import { loanCategories } from "../json/loanCategories";

export const getLoanCategoryFromId = (categoryId) => {
  for (let i = 0; i < loanCategories.length; i++) {
    if (loanCategories[i].value === categoryId) {
      return loanCategories[i].label;
    }
  }
  return "";
};
