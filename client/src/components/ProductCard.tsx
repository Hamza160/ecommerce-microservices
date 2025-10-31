"use client"
import React from 'react';
import {ProductType} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {ShoppingCartIcon} from "lucide-react";

const ProductCard = ({product}: { product: ProductType }) => {
    const [productTypes, setProductTypes] = React.useState({
        size: product.sizes[0],
        color: product.colors[0],
    });

    const handleProductType = (type: "size" | "color", value: string) => {
        setProductTypes({...productTypes, [type]: value});
    }

    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <Link href={`/products/${product.id}`}>
                <div className='relative aspect-[2/3]'>
                    <Image
                        src={product.images[productTypes.color]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-all duration-300"
                    />
                </div>
            </Link>
            {/*  Product Details */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-medium">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>
                {/*  PRODUCT TYPEs */}
                <div className="flex items-center gap-4 text-xs">
                    {/* Sizes */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select
                            name="size"
                            id="size"
                            className="ring ring-gray-300 rounded-md px-2 py-1"
                            onChange={e => handleProductType("size", e.target.value)}
                        >
                            {product.sizes.map((size) => (
                                <option key={size} value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/* Colors */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Color</span>
                        <div className="flex items-center gap-2">
                            {product.colors.map((color) => (
                                <div
                                    key={color}
                                    onClick={() => handleProductType('color', color)}
                                    className={`cursor-pointer border-1 ${productTypes.color === color ? 'border-gray-400' : 'border-gray-200'} rounded-full p-[1.2]`}
                                >
                                    <div className={`w-[14px] h-[14px] rounded-full`}
                                         style={{backgroundColor: color}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Price and Add To Cart   */}
                <div className="flex items-center justify-between">
                    <p className={"font-medium"}>${product.price.toFixed(2)}</p>
                    <button
                        className="flex items-center gap-2 ring ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300">
                        <ShoppingCartIcon size={16}/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
