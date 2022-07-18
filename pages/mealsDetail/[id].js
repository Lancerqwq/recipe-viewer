import MealDetails from '../../components/MealDetails';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { fetchData } from '../../helpers';
import procces from '../../next.config';

export default function mealsDetailPage({ mealData, cookie }) {
  return <MealDetails data={mealData} cookie={cookie} />;
}

export async function getServerSideProps({ query, res, req }) {
  try {
    const mealData = await fetchData(`${procces.env.API_URL}/lookup.php?i=`, query.id);

    if (!hasCookie('favoriteMeals', { req, res })) {
      setCookie('favoriteMeals', [], { req, res });
    }

    const resCookies = getCookie('favoriteMeals', { req, res });
    const cookie = JSON.parse(resCookies);

    if (!Boolean(...Object.values(mealData))) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        mealData,
        cookie,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
