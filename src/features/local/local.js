


export const setUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}


export const clearLocal = () => {
  localStorage.clear();
}

export const setCartsToLocal = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}

export const getCartsFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts ? JSON.parse(carts) : [];
}


export const removeCartsFromLocal = () => {
  localStorage.removeItem('carts');
}


//Review Section

export const setReviewsToLocal = (reviews) => {
  localStorage.setItem('reviews', JSON.stringify(reviews));
};

export const getReviewsFromLocal = () => {
  const reviews = localStorage.getItem('reviews');
  return reviews ? JSON.parse(reviews) : [];

};

export const addReviewToLocal = (review) => {
  const reviews = getReviewsFromLocal();
  reviews.push(review);
  setReviewsToLocal(reviews);
};

export const removeReviewFromLocal = (id) => {
  const reviews = getReviewsFromLocal();
  const updated = reviews.filter((item) => item.id !== id);
  setReviewsToLocal(updated);
};

export const clearReviewFromLocal = () => {
  localStorage.removeItem('reviews');
};

