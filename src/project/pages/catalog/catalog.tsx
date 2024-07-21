import { useState } from 'react';
import { Header } from '../../components/header/header';
import { Banner } from '../../components/banner/banner';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sort } from '../../components/sort/sort';
import { Pagination } from '../../components/pagination/pagination';
import { Footer } from '../../components/footer/footer';
import { ProductList } from '../../components/product-list/product-list';
import { api } from '../../services/services';
import { ReqRoutes } from '../../const/const';
import { TCamera } from '../../types/product.types'


function Catalog() {
  const [getCameras, setGetCameras] = useState<TCamera[]>([]);

  api
    .get<TCamera[]>(`${ReqRoutes.Cameras}`)
    .then((response) => setGetCameras(response.data));

  console.log(getCameras);


  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <Filter />
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <Sort />
                  </div>
                  <ProductList getCameras={getCameras} />
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { Catalog };
