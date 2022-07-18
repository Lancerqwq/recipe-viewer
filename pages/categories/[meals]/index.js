import Meals from '../../../components/Meals';
import procces from '../../../next.config';
import { fetchAllCategories, fetchData } from '../../../helpers';

export default function MealsPage({ meals }) {
  return <Meals meals={meals} />;
}

export async function getStaticPaths() {
  const { categories } = await fetchAllCategories(procces.env.API_URL);
  const paths = categories.map((category) => ({
    params: { meals: category.strCategory.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const mealsData = await fetchData(`${procces.env.API_URL}/filter.php?c=`, params.meals);
  if (!Boolean(...Object.values(mealsData))) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meals: mealsData.meals,
    },
    revalidate: 60,
  };
}
