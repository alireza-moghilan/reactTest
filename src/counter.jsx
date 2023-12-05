import { Component } from "react";

export class Counter extends Component {
    state = {
        number: this.props.value??0,
    }

    // add
    add = ev => {
        let numberState = this.state.number;
        numberState++;
        this.setState({ number: numberState });
    }

    // minus
    minus = ev => {
        let numberState = this.state.number;
        numberState--;
        this.setState({ number: numberState });
    }

    bgSpan= ev=> {
        if (this.state.number==0) {
            return "bg-warning";
        }
        else
            return this.state.number >= 0 ?"bg-success" : "bg-danger";
    }
    render() {
        return (
            <>
                <div className="text-center w-100 my-5">
                    <button className="btn btn-danger mx-3" onClick={this.minus}>-</button>
                    <span>Number: </span>

                    {/* <span className={(this.state.number >= 0 ?"bg-success" : "bg-danger")+" p-3 rounded-3"}>{this.state.number}</span> */}
                    <span className={(this.bgSpan())+" p-3 rounded-3"}>{this.state.number}</span>

                    <button className="btn btn-success mx-3" onClick={this.add}>+</button>

                </div>
            </>
        )
    }
}