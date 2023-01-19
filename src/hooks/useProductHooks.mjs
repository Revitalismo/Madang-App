import { useQuery } from "react-query";

export function useProducts() {
    return useQuery("products", async function() {
        const request = new Request(`http://localhost:3000/food`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    }, {
       staleTime: 300000,
       refetchIntervalInBackground: true
    });
}
export function useProduct(productId) {
    return useQuery(["product", productId], async function() {
        const request = new Request(`http://localhost:3100/record/${productId}`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    }, {
        staleTime: 300000,
        refetchOnWindowFocus: false
    });
}

export function useSearchProduct(productName) {
    return useQuery(["product", productName], async function() {
        const request = new Request(`http://localhost:3100/record?q=${productName}`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    }, {
        enabled: false,
        refetchOnMount: false
    })
}