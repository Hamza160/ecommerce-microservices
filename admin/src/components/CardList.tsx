import React from 'react';
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

const popularProducts = [
    {
        id: 1,
        name: "Adidas CoreFit T-Shirt",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
    },
    {
        id: 2,
        name: "Puma Ultra Warm Zip",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 59.9,
        sizes: ["s", "m", "l", "xl"],
        colors: ["gray", "green"],
        images: {gray: "/products/2g.png", green: "/products/2gr.png"},
    },
    {
        id: 3,
        name: "Nike Air Essentials Pullover",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 69.9,
        sizes: ["s", "m", "l"],
        colors: ["green", "blue", "black"],
        images: {
            green: "/products/3gr.png",
            blue: "/products/3b.png",
            black: "/products/3bl.png",
        },
    },
    {
        id: 4,
        name: "Nike Dri Flex T-Shirt",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 29.9,
        sizes: ["s", "m", "l"],
        colors: ["white", "pink"],
        images: {white: "/products/4w.png", pink: "/products/4p.png"},
    },
    {
        id: 5,
        name: "Under Armour StormFleece",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 49.9,
        sizes: ["s", "m", "l"],
        colors: ["red", "orange", "black"],
        images: {
            red: "/products/5r.png",
            orange: "/products/5o.png",
            black: "/products/5bl.png",
        },
    }
]

const latestTransactions = [
    {
        "id": "1",
        "title": "Order Payment",
        "badge": "New",
        "image": "https://example.com/images/product-launch.jpg",
        "count": 120
    },
    {
        "id": "2",
        "title": "Order Payment",
        "badge": "Hot",
        "image": "https://example.com/images/seasonal-sale.jpg",
        "count": 250
    },
    {
        "id": "3",
        "title": "Order Payment",
        "badge": "Limited",
        "image": "https://example.com/images/limited-edition.jpg",
        "count": 45
    },
    {
        "id": "4",
        "title": "Order Payment",
        "badge": "Top",
        "image": "https://example.com/images/best-seller.jpg",
        "count": 1000
    },
    {
        "id": "5",
        "title": "Order Payment",
        "badge": "Flash",
        "image": "https://example.com/images/flash-deal.jpg",
        "count": 300
    }
]

const CardList = ({title}: { title: string }) => {
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {title === "Popular Products" ? popularProducts.map((item, i) => (
                        <Card key={i} className="flex-row items-center justify-between gap-4 p-4">
                            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                                <Image src={Object.values(item.images)[0] || ""} alt={item.name} fill
                                       className="object-cover"/>
                            </div>
                            <CardContent className="flex-1 p-0">
                                <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                            </CardContent>
                            <CardFooter className="p-0">${item.price}</CardFooter>
                        </Card>
                    ))
                    : latestTransactions.map((item, i) => (
                        <Card key={i} className="flex-row items-center justify-between gap-4 p-4">
                            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                                <Image src={item.image} alt={item.title} fill
                                       className="object-cover"/>
                            </div>
                            <CardContent className="flex-1 p-0">
                                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                <Badge variant="secondary">{item.badge}</Badge>
                            </CardContent>
                            <CardFooter className="p-0">${item.count / 1000}k</CardFooter>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default CardList;
