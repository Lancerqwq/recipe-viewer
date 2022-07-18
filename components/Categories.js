import classes from './Category.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Categories({ categories }) {
  const splitText = (text) => {
    let sliced = text.slice(0, 200);
    if (sliced.length < text.length) {
      sliced += '...';
    }
    return <p>{sliced}</p>;
  };

  return (
    <section className={classes.categories}>
      {categories.map((item) => (
        <div key={item.idCategory} className={classes.category}>
          <Link href={`/categories/${item.strCategory.toLowerCase()}`}>
            <a>
              <div className={classes.categoryWrap}>
                <Image
                  src={item.strCategoryThumb}
                  alt="Category picture"
                  objectPosition={'center'}
                  width={300}
                  height={200}
                />
                <div className={classes.categoryTitle}>{item.strCategory}</div>
              </div>
            </a>
          </Link>
          <div className={classes.categoryDescription}>{splitText(item.strCategoryDescription)}</div>
        </div>
      ))}
    </section>
  );
}
