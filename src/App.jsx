import { useState } from 'react'
import './App.css'
import ProductItem from './productItem';
import ProductList from './productList';

function App() {
  const [products] = useState([
    {id: 1,catagory: "Wash" , name: "Waterless Car Wash" , price:"$43" , discription:"No rinse wash and shine! Conscentrate only requires 1oz per gallon of water"},
    {id: 2,catagory: "Wax" ,  name: "Buffing Kit", price:"$210" , discription:"Random orbital poisher, pads, polishes andcompound kit"},
    {id: 3,catagory: "Protect" , name: "Ceramic Coating Kit" , price:"$70" , discription:" Graphene ceramic coating 70ml bottle everything you need to apply, 10+ years of protection, ultra high gloss"},

  ]);

  return (
    <>
      <div>
      <h1>Product List</h1>
      <ProductList products= {products}/>
      </div>
   </>
  )
}

export default App
