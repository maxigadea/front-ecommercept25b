import { IProduct } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getProductsDB(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${APIURL}/products`, {
            next: {revalidate: 360}
        })
        const products:IProduct[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
};

export async function getProductById(id: string): Promise<IProduct> {
    try {
        const response = await getProductsDB()
        const productFiltered = response.find((product) => product.id.toString() === id) 
        if(!productFiltered) throw new Error("Product not found")
        return productFiltered
    } catch (error: any) {
        throw new Error(error)
    }
};


export async function getProductsByCategoryOrName(categoryIdOrName: string): Promise<IProduct[]> {
   
    try {
        const response = await getProductsDB()
        
        //Filtrar por category
        let productFiltered = response.filter((product) => product.categoryId.toString() === categoryIdOrName)

        //Si no encuentra por categoryid, filtramos por nombre de prod.
        if(!productFiltered.length) {
            productFiltered = response.filter((product) => product.name.toLocaleLowerCase().includes(categoryIdOrName.toLocaleLowerCase()))

            if(!productFiltered.length) {
                productFiltered = []
            }
        }

        return productFiltered;
    } catch (error: any) {
        throw new Error(error)
    }
};