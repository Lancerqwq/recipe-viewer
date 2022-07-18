import Favorites from '../components/Favorites';
import procces from '../next.config';
import { getCookie, hasCookie } from 'cookies-next';
import { fetchAllFavoritesData } from '../helpers';

export default function FavoritesPage({ meals }) {
  return <Favorites meals={meals} />;
}

export async function getServerSideProps({ req, res }) {
  let meals = [];
  if (hasCookie('favoriteMeals', { req, res })) {
    const resCookies = getCookie('favoriteMeals', { req, res });
    const cookies = JSON.parse(resCookies);
    meals = await fetchAllFavoritesData(cookies, `${procces.env.API_URL}/lookup.php?i=`);
  }

  return {
    props: {
      meals,
    },
  };
}
