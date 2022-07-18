import classes from './MealDetails.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import Ingredients from './Ingredients';
import { getArrayIngredients } from '../helpers';

export default function MealDetails({ data, cookie }) {
  const router = useRouter();
  const [favIds, setFavIds] = useState(cookie);
  const [isFavorite, setIsFavorite] = useState(() => {
    return favIds?.includes(data.meals[0].idMeal);
  });

  let ingredients = Object.entries(getArrayIngredients(data));

  const onAddToFavorites = (id) => {
    setIsFavorite((prevState) => !prevState);
    if (!favIds.includes(id)) {
      setFavIds((prevState) => [...prevState, id]);
    } else {
      setFavIds((prevState) => prevState.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    setCookie('favoriteMeals', favIds);
  }, [favIds]);

  return (
    <section className={classes.container}>
      {data.meals.map((meal) => (
        <div key={meal.idMeal} className={classes.mealDetails}>
          <div className={classes.mealDetailsPreview}>
            <h1>{meal.strMeal}</h1>
            <Image src={meal.strMealThumb} alt="Meal image" objectPosition={'center'} width={600} height={400} />
            <div className={classes.btnWrapper}>
              <button
                className={classes.goBackButton}
                onClick={() => {
                  router.back();
                }}
              >
                Go back
              </button>
              <button className={classes.addToFavorite} onClick={() => onAddToFavorites(meal.idMeal)}>
                {!isFavorite ? `Add to favorite` : 'Remove from favorite'}
              </button>
            </div>
          </div>
          <Ingredients ingredients={ingredients} />
          <div className={classes.mealDetailsInstruction}>
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
