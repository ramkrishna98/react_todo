import React, { Component } from 'react';
import './ListContain.scss';
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class ListContain extends Component {

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
    }
    removeItem() {
        this.setState({list: []})
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
                <div>
                    {this.state.list.map(nlist => (
                        <p className="generatedList" key={nlist}>{nlist}</p>
                    ))}
                </div>
                <div>
                <FontAwesomeIcon
                    className="faicons"
                    icon={faTrash}
                    onClick = {() => this.removeItem()}
                />
                </div>
            </div>
        )
    }
}
export default ListContain;