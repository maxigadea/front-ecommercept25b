import Card from '@/components/Card';
import { getProductsByCategoryOrName } from '@/utils/products.helper';
import Link from 'next/link';
import React from 'react'

const CategoryOrNamePage = async ({params}: { params: Promise<{ categoryorname: string }> }) => {
    const { categoryorname } = await params;
    const products = await getProductsByCategoryOrName(categoryorname)
  return (
    <div className="w-full flex items-center justify-center gap-6 flex-wrap">
         {
          products.length ?
           (products.map((product) => {
            return (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card key={product.id} {...product} />
              </Link>
            )
        })) : (
            <div>Products not found</div>
        )
      }
    </div>
  )
}

export default CategoryOrNamePage