import { create } from "zustand";
import { PRODUCTS } from "@/mock/products";

export const useCartStore = create((set) => ({
    items: {} as any,
    price: {
        total: 0,
        currency: "BRL",
        parcelTimes: 0,
        parcels: [] as Parcel[]
    },
    addCartItem: (id: string) => {
        set((state: any) => {
            if (state.items[id]) {
                return ({...state, items: {...state.items, [id]: {...state.items[id], quantity: state.items[id].quantity + 1}}});
            }
            return ({ ...state, items: {...state.items, [id]: PRODUCTS[id]}});
        });

        const event = new CustomEvent("minicart:open");
        document.dispatchEvent(event);
    },
    incrementCartItem: (id: string) => {
        set((state: any) => {
            if (state.items[id]) {
                return ({...state, items: {...state.items, [id]: {...state.items[id], quantity: state.items[id].quantity + 1}}});
            }
            return ({ ...state, items: {...state.items, [id]: PRODUCTS[id]}});
        });
    },
    decrementCartItem: (id: string) => {
        set((state: any) => {
            if (state.items[id]) {
                if (state.items[id].quantity - 1 < 1) {
                    const newState = {...state, items: {...state.items, [id]: {...state.items[id], quantity: 0}}}
                    if (Object.keys(newState.items).every((key:string) => (newState.items[key]?.quantity <= 0))) {
                        const event = new CustomEvent("minicart:close");
                        document.dispatchEvent(event);
                    }
                    return newState;
                }
                return ({...state, items: {...state.items, [id]: {...state.items[id], quantity: state.items[id].quantity - 1}}});
            }
            return ({...state, items: {...state.items}});
        });
    }
}))

type Product = {
    id: string,
    name: string,
    quantity: number,
    color: string,
    size: string,
    model: string
}

type Parcel = {
    parcelTime: number,
    price: number
}
