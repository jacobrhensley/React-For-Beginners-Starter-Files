import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!!</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}> Load sample fishes</button>
                </div>
        );
    }
}

export default Inventory;