export function DataApi(Data) {
    if (Data == 1) {
        return [
            { id: 1, name: "Laptop", price: 3000, quantity: 3 },
            { id: 2, name: "Mobile", price: 1000, quantity: 5 },
        ];
    }
    if (Data == 2) {
        return [
            { id: 3, name: "Pc", price: 2000, quantity: 10 },
            { id: 4, name: "Flash", price: 5, quantity: 100 },
        ]
    }
    if (Data == 3) {
        return [
            { id: 5, name: "Test", price: 100, quantity: 10 },
        ]
    }
}

export function totalPageFun() {
    return 3;
}