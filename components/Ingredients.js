import classes from './Ingredients.module.scss';

export default function Ingredients({ ingredients }) {
  return (
    <div className={classes.ingredients}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(([name, value]) => {
          return (
            <li key={name}>
              {name} : {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
