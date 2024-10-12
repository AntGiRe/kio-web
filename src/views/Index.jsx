import { products } from "../data/products"
import { CardProduct } from "../components/CardProduct"
import UseKio from "../hooks/useKio"

export default function Index() {

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(370px,1fr))]">
      {products.map(product => (
        <CardProduct
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}
