import {z} from 'zod';

export type ProductType = {
    id: number | string;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[],
    colors: string[],
    images: Record<string, string>,
}

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedColor:string;
    selectedSize:string;
}

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
    name:z.string().min(1, "Name is required"),
    email:z.string().min(1, "Email is required"),
    phone:z.string()
        .min(7, "Phone number must b 7 or 10 digits!")
        .max(10, "Phone number must b 10 or 10 digits!")
        .regex(/^\d+$/, "Phone number must contain only numbers!"),
    address:z.string().min(1, "Address is required!"),
    city:z.string().min(1, "City is required")
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>