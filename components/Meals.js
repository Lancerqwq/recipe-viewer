import classes from './Meals.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Meals({ meals }) {
  return (
    <section className={classes.container}>
      {meals.length ? (
        meals.map((meal) => (
          <Link key={meal.idMeal} href={`/mealsDetail/${meal.idMeal}`}>
            <a className={classes.meals}>
              <Image src={meal.strMealThumb} alt="Meal image" objectPosition={'center'} width={200} height={200} />
              <div className={classes.mealsTitle}>{meal.strMeal}</div>
            </a>
          </Link>
        ))
      ) : (
        <h1 className={classes.mealsListEmpty}>List of meals is empty</h1>
      )}
    </section>
  );
}
