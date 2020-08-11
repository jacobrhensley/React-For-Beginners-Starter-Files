import React from 'react';
import {getFunName} from "../helpers"

class StorePicker extends React.Component {
myInput = React.createRef();

    goToStore = (event) => {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. get the text from the form
        console.log(this);
        // 3. change the page to /store/whatever-they-entered

    }
    myInput = React.createRef;
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
               <h2>Please Enter A Store</h2>
               <input
                type="text"
                required placeholder="Store Name"
                defaultValue={getFunName()}
                ref={this.myInput}
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;