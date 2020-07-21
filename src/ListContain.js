import React, { Component } from 'react';
import './ListContain.css';

export default class ListContain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            list: [],
        }
    }
    handleOnChangeEvent = (e) => {
        this.setState({ tempValue: e.target.value })
        //console.log(list1);

    }
    handleOnSubmitEvent = (e) => {
        e.preventDefault();
        const { tempValue, list } = this.state;
        const newList = [...list, tempValue]

        this.setState({ list: newList })
        console.log("007", newList)

        return
    }

    render() {
        return (
            <div className='createBox'>
                <div>
                    <form onSubmit={(e) => this.handleOnSubmitEvent(e)}>
                        <div>
                            <input
                                className="inputBox"
                                onChange={(e) => this.handleOnChangeEvent(e)}
                                placeholder="Type...">
                            </input>
                        </div>
                        <button className="buttonBox" type='submit'>Add</button>
                    </form>
                </div>
                <div className = "">
                        {this.state.list.map(nlist => (
                            <>
                            <p className="generatedList" key={nlist}>{nlist}</p>
                            <br/>
                            </>
                        ))}
                        
                </div>
                <div>
                </div>
            </div>
        )
    }
}