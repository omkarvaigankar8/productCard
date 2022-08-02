import { useEffect, useState } from 'react';
import { fetchData } from '../api';
import '../App.scss';
import ProductCard from '../components/Card/ProductCard';
import Form from '../components/Form';
import Dropdown from '../components/Form/Dropdown';
import Header from '../components/UIKit/Header';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loader from '../components/UIKit/Loader';

function App() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false)
  const methods = useForm();
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    fetchData((data) => {
      setProducts(data.data.products)
      setFilteredProducts(data.data.products)
      setLoading(false)
    }, 'products')
    fetchData((data) => {
      setCategories(data.data.categories)
      setLoading(false)
    }, 'categories')
  }, [])
  const filteredProductsHandler = (value) => {
    let content = products;
    content = products && products.filter(function (event) {
      return value && event.category === value;
    });
    setFilteredProducts(content)
  }
  return (
    <div className="App">
      <Header />
      {loading ? (
        <>
          <Loader loading={true} />
        </>
      ) : (
        <div className='container'>
          <div className="filter_container">
            <div className='product_name_container'>
                <div className='products_name'><p className='light'>Macbook, IPad, AppleWatch....</p></div>
            </div>
            <div className='filter_dropdown'>
              <FormProvider {...methods} >
                <Form>
                  {categories && (
                    <Dropdown name="category" placeholder={"Category"} data={categories} onChange={filteredProductsHandler} />

                  )}
                </Form>
              </FormProvider>
            </div>
          </div>
          <div className='products_wrapper'>
            {filteredProducts && filteredProducts.map((product) => {

              return (
                <ProductCard id={product._id} key={product._id} name={product.name} price={product.price} avatar={product.avatar} />
              )
            })}
          </div>
          <div className='product_add_button'>
            <Link to={'/create-product'}><button>+</button></Link>
            </div>
        </div>

      )}
    </div>
  );
}

export default App;
