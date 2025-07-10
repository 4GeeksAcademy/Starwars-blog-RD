export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_favorites':
      const { name, uid, url } = action.payload
      return {
        ...store,
        favorites: [...store.favorites, { name, uid, url }]
      };
    case 'delete_favorites':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid != action.payload.removeuid)
      };
    case 'update_favorite':
      return {
        ...store,
        favorites: store.favorites.map(fav =>
          fav.uid === action.payload.uid
            ? { ...fav, ...action.payload }  // overwrite existing favorite with updated values
            : fav
        )
      };
    default:
      throw Error('Unknown action.');
  }
}
