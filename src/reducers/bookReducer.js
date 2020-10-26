import uuid from "uuid/v1";

export const bookReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          price: action.book.price,
          imgUrl: action.book.imgUrl,
          id: uuid(),
        },
      ];

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
