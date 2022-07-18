import classes from './Favorites.module.scss';
import { useState } from 'react';
import Meals from './Meals';

export default function Favorites({ meals }) {
  const [state, setState] = useState(() => {
    return meals.map((item) => item.meals[0]);
  });

  return (
    <>
      {state.length ? (
        <Meals meals={state} />
      ) : (
        <h1 className={classes.favoriteEmpty}>List of favorite meals is empty</h1>
      )}
    </>
  );
}
