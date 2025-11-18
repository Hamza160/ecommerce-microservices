import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import {CartItemType, CartStoreActionsType, CartStoreStateType} from "@/types";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product: CartItemType) =>
                set((state) => ({
                    cart: [...state.cart, product],
                })),

            removeFromCart: (product: CartItemType) =>
                set((state) => ({
                    cart: state.cart.filter((p) => p.id !== product.id),
                })),

            clearCart: () => set({cart: []}),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export default useCartStore;
