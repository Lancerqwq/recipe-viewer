import Categories from '../../components/Categories';
import { fetchAllCategories } from '../../helpers/index';
import procces from '../../next.config';

export default function Index({ categories }) {
  return <Categories categories={categories} />;
}

export async function getStaticProps() {
  const { categories } = await fetchAllCategories(procces.env.API_URL);

  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}
