import React from 'react'

import './style.scss';

export default class AddTodo extends React.Component {

    static propTypes = {
        addTodo: React.PropTypes.func.isRequired
    };

    handleSubmit(e) {

        this.props.addTodo(this.refs.text.getDOMNode().value);
        this.refs.text.getDOMNode().value = '';

        e.preventDefault();

    }

    render() {

        return (
            <form className="AddTodo" onSubmit={::this.handleSubmit} method="post">
                <input
                    className="AddTodo__input"
                    ref="text"
                    type="text"
                    placeholder="What needs to be done?"
                    required/>
                <button className="AddTodo__btn btn" type="submit">Add</button>
            </form>
        );

    }

}
