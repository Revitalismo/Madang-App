import { useMutation, useQuery } from "react-query";

function useProducts() {
    return useQuery("products-cart", async function() {
        const request = new Request(`http://localhost:3200/cart`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useAddProduct(product) {
    return useQuery("product", async function() {
        const request = new Request(`http://localhost:3200/cart`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const response = await fetch(request);
        return response.json();
    }, {
        enabled: false
    });
}

function useDeleteProduct() {
    return useMutation(async function(productId) {
        const request = new Request(`http://localhost:3200/cart/${productId}`, {
            method: "DELETE"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useChangeQuantity() {
    return useMutation(async function(dataQuantity) {
        const request = new Request(`http://localhost:3200/cart/${dataQuantity.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quantity": dataQuantity.value
            })
        });

        const response = await fetch(request);
        return response.json();
    })
}

export {useProducts, useAddProduct, useDeleteProduct, useChangeQuantity};