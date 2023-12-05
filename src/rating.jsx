import { Component } from "react";

class Rate extends Component {
    state = {
        rateCount: 5,
        rate: 2
    }

    // add star
    addStar = ev => {
        let arrRateCount = [];
        for (let index = 0; index < this.state.rateCount; index++) {
            arrRateCount.push(index + 1)
        }
        return (
            <>
                {
                    arrRateCount.map(arrEv => 
                        <span><i onClick={()=>this.clickStar(arrEv)} className={"bi bi-star-fill " + (arrEv <= this.state.rate ? "text-warning" : "text-dark")}></i></span>
                    )
                }
            </>
        )
    }

    // click on star
    clickStar = ev=> {
        const copyRate= {...this.state};
        console.log(copyRate)
        copyRate.rate=ev;
        this.setState(copyRate);
    }


    render() {
        return (
            <>
                {
                    this.addStar()
                }
            </>
        )
    }

}

export default Rate;