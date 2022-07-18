export const fetchAllCategories = async (url) => {
  const response = await fetch(`${url}/categories.php`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchData = async (url, query) => {
  const response = await fetch(`${url}${query}`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchAllFavoritesData = async (arr, url) => {
  try {
    const responses = await Promise.all(arr.map((id) => fetch(`${url}${id}`)));
    return await Promise.all(responses.map((r) => r.json()));
  } catch (err) {
    console.log(err);
  }
};

export const getArrayIngredients = ({ meals: [meal] }) => {
  return Object.entries(meal)
    .filter(([, v]) => v !== null && v !== '')
    .reduce((obj, curIng) => {
      let [k, v] = curIng;
      if (k.includes('strIngredient')) {
        let id = +k.slice('strIngredient'.length);

        obj[v] = Object.entries(meal).find(([mealKey]) => mealKey.includes(`strMeasure${id}`))[1];
      }
      return obj;
    }, {});
};
