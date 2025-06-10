import { IProduct } from "@/types";


const Card: React.FC<IProduct> = ({name, image, price}) => {
  return (
    <div className="w-full max-w-[300px] h-[200px] flex items-center justify-center flex-col">
        <h1 className="color-invented">{name}</h1>
        <img className="w-full max-w-[200px] h-auto object-cover" src={image} alt="product image" />
        <p>Price {price}</p>
    </div>
  )
}

export default Card;