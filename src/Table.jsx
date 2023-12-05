import { Component } from "react";
import * as Data from "./data";

export class Table extends Component {

    state = {
        page: 1,
        pageTotal: 1,
        pageSize: 2,
        products: [],
    }

    componentDidMount() {
        const apiData = Data.DataApi(this.state.page);
        const pageTotal = Data.totalPageFun();
        this.setState({ products: apiData, pageTotal})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page != this.state.page) {
            const apiData = Data.DataApi(this.state.page);
            this.setState({ products: apiData})
        }
    }

    getPages = () => {
        const arrPage = [];
        let pageTotal = this.state.pageTotal;
        for (let index = 0; index < pageTotal; index++) {
            arrPage.push(index)
        }


        // console.log(this.state.page)
        return arrPage.map(index =>
            <li className={"page-item " + (index + 1 === this.state.page ? "active" : "")} onClick={ev => this.setState({ page: index + 1 })} key={index + 1}><a className="page-link" href="#">{index + 1}</a></li>
        )
    }

    tableData = () => {
        return this.state.products.map((product, index) =>
            <tr key={product.id}>
                <td>{(this.state.pageSize * this.state.page) + index - 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}</td>
            </tr>
        )
    }

    Previous =()=> {
        if (this.state.page==1)
            return
        this.setState({ page: this.state.page - 1 });
    }

    Next =()=> {
        if (this.state.page>=this.state.pageTotal)
            return
        this.setState({ page: this.state.page + 1 });
    }

    render() {

        return (
            <>
                <section className="container">
                    <table className="table border border-1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.tableData()
                            }
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#" onClick={this.Previous}>Previous</a></li>
                                {
                                    this.getPages()
                                }
                                <li className="page-item"><a className="page-link" href="#" onClick={this.Next}>Next</a></li>
                            </ul>
                        </nav>

                    </div>
                </section>
            </>
        )
    }
}