import './productList.css';
import Product from '../product/Product'
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-desc">
                I have made some projects in MERN stack.
            </p>
        </div>
        <div className="pl-list">
          {products.map(item => (
              <Product key={item.id} img={item.img} live={item.live} title={item.title} codelink={item.codelink}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList