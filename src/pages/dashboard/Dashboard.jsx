/* eslint-disable react/no-children-prop */
import { Card } from 'antd';
import SearchButton from "../../components/SearchButton";
import Filter from "../../components/Filter";
import { LoadingOutlined } from '@ant-design/icons'
import useFetchProducts from "./useFetchProducts";
import usePayment from "./usePayment";
import PaymentReceipt from './PaymentReceipt';


const Dashboard = () => {
  const { handleSearch, loading, error, searchQuery, filteredProducts } = useFetchProducts();
  const { initializingProductId, handlePaymentInitialization } = usePayment();

  return (
    <div className=" mx-20 mt-10">
      <div className=" lg:flex md:flex lg:justify-between lg:items-center">
        <SearchButton
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search Products" />
        <Filter children="Filter" />
      </div>
      {error ? (<div>{error}</div>) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-6 mt-6 mb-6">
          {filteredProducts.map((product) => {
            const formattedProductCategory = product.category.toUpperCase()
            const formattedProductTitle = product.title.substring(0, 23)
            return (
              <div key={product.id}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    height: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'revert'
                  }}
                  cover={<img alt="example" src={product.image}
                    style={{
                      height: '100px',
                      objectFit: 'contain',
                      marginTop: '4rem'
                    }} />}
                  loading={loading}
                >
                  <h2 className=" font-medium">{formattedProductTitle}...</h2>
                  <p className=" text-2xl font-bold">NGN {product.price}</p>
                  <p className=" mt-1 font-semibold text-xs">{formattedProductCategory}</p>
                  <button
                    onClick={() => handlePaymentInitialization(product)}
                    className=" py-1 px-3 mt-3 font-semibold rounded-lg text-white bg-[#39CDCC] border hover:text-[#39CDCC] hover:bg-white"
                    type="primary"
                   >
                    {initializingProductId === product.id && <LoadingOutlined/> } BUY NOW
                  </button>
                </Card>
              </div>
            )
          })}
        </div>
      )
      }
      <PaymentReceipt />
    </div>
  )
}

export default Dashboard