import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"
import sampleFishes from "../sample-fishes"
import Fish from "./Fish"
import base from "../base"
class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };
    componentDidMount(){
        const { params } = this.props.match;
        // 1. reinstate our local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    } 

    componentWillUnmount(){
        base.removeBinding(this.ref);
        console.log("Unmounting");
    }

    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes }
        // 2. Add new fish to fishes
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({ fishes })

    }

    updateFish = (key, updatedFish) => {
        // Take copy of the current state 
const fishes = { ...this.state.fishes };
        // Update that state 
        fishes[key] = updatedFish;
        // set that state 
        this.setState({ fishes });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        // 1. take a copy of state 
        const order = { ...this.state.order };
        // 2. either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. call setState to update our state object
        this.setState({ order });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
        {Object.keys(this.state.fishes).map(key => (
        <Fish 
        key={key} 
        index={key}
        details={this.state.fishes[key]} 
        addToOrder = {this.addToOrder}
        />
        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory 
                addFish={this.addFish}
                updateFish={this.updateFish}
                loadSampleFishes={this.loadSampleFishes} 
                fishes={this.state.fishes}
                />
            </div>
        );
    }
}

export default App;