import { Component } from "react";

export class List extends Component {
    
    state = {
        value: "",
        arrValueUl: ['item 1', 'item 2', 'item 3', 'item 4'],
    }
    setTextInUl = ev => {
        let text = this.state.value;
        const copyArrValueUl = { ...this.state };
        copyArrValueUl.arrValueUl.push(text);
        this.setState(copyArrValueUl)
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <input type="text" className="border border-1 rounded-2 px-3 py-2" value={this.state.value}
                        onInput={ev => {
                            this.setState({ value: ev.target.value });
                        }}
                        placeholder={this.props.placeholder??"what do you want add?"} name="" id="" />
                    <button className="btn btn-success m-2" onClick={this.setTextInUl}>add</button>

                    <ul className="p-3">
                        {
                            this.state.arrValueUl.map(ev => {
                                return <li>{ev}</li>;
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }
}