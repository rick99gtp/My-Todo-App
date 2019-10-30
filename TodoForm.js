import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            list: []
        }

    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleOnClick = () => {
        if(this.state.text.length === 0) {
            return;
        }

        const list = [...this.state.list];

        const newItem = {
            id: 1 + Math.random(),
            itemName: this.state.text.slice()
        };

        list.push(newItem);
        
        this.setState({
            text: '',
            list: list
        });
    };

    handleDeleteItem = (item) => {
        const list = [...this.state.list];

        const updatedList = list.filter(listItem => listItem.id !== item);

        this.setState({
            list: updatedList
        });
    };

    render() {
        return (
            <div className='todoform'>
                <input type='text' placeholder='Add an item' value={this.state.text} onChange={this.handleOnChange}/>
                <button onClick={this.handleOnClick}>
                    Add
                </button>
                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id}>{item.itemName}<button onClick={() => this.handleDeleteItem(item.id)}>X</button></li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}