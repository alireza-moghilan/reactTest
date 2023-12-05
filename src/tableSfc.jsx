import { useState } from "react"

export const TableSfc = ()=> {
    const [products,setProducts]= useState(
        [
            {id:1,name:"Mobile",price:5000,quantity:2},
            {id:3,name:"Laptop",price:5000,quantity:10},
            {id:1,name:"Pc",price:5000,quantity:5},
        ]
    )

    return(
        <>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product,index)=> {
                            return <tr key={product.id}>
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price*product.quantity}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}