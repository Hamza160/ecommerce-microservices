import React from 'react';
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

const popularContent = [
    {
        "id": "1",
        "title": "Product Launch",
        "badge": "New",
        "image": "https://example.com/images/product-launch.jpg",
        "count": 120
    },
    {
        "id": "2",
        "title": "Seasonal Sale",
        "badge": "Hot",
        "image": "https://example.com/images/seasonal-sale.jpg",
        "count": 250
    },
    {
        "id": "3",
        "title": "Limited Edition",
        "badge": "Limited",
        "image": "https://example.com/images/limited-edition.jpg",
        "count": 45
    },
    {
        "id": "4",
        "title": "Best Seller",
        "badge": "Top",
        "image": "https://example.com/images/best-seller.jpg",
        "count": 1000
    },
    {
        "id": "5",
        "title": "Flash Deal",
        "badge": "Flash",
        "image": "https://example.com/images/flash-deal.jpg",
        "count": 300
    }
]

const latestTransactions = [
    {
        "id": "1",
        "title": "Product Launch",
        "badge": "New",
        "image": "https://example.com/images/product-launch.jpg",
        "count": 120
    },
    {
        "id": "2",
        "title": "Seasonal Sale",
        "badge": "Hot",
        "image": "https://example.com/images/seasonal-sale.jpg",
        "count": 250
    },
    {
        "id": "3",
        "title": "Limited Edition",
        "badge": "Limited",
        "image": "https://example.com/images/limited-edition.jpg",
        "count": 45
    },
    {
        "id": "4",
        "title": "Best Seller",
        "badge": "Top",
        "image": "https://example.com/images/best-seller.jpg",
        "count": 1000
    },
    {
        "id": "5",
        "title": "Flash Deal",
        "badge": "Flash",
        "image": "https://example.com/images/flash-deal.jpg",
        "count": 300
    }
]

const CardList = ({title}: { title: string }) => {
    const list = title === 'Popular Content' ? popularContent : latestTransactions;
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map((item, i) => (
                    <Card key={i} className="flex-row items-center justify-between gap-4 p-4">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover"/>
                        </div>
                        <CardContent className="flex-1 p-0">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">{item.count / 1000}k</CardFooter>
                    </Card>

                ))}
            </div>
        </div>
    );
}

export default CardList;
