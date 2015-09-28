import React from 'react'
import classNames from 'classnames';

import './style.scss';

export default class TodoItem extends React.Component {

    static propTypes = {
        todo: React.PropTypes.object.isRequired,
        completeTodo: React.PropTypes.func.isRequired,
        removeTodo: React.PropTypes.func.isRequired
    };

    handleChange(e) {
        this.props.completeTodo(this.props.todo.id);
    }

    handleRemove(e) {
        this.props.removeTodo(this.props.todo.id);
    }

    render() {

        return (
            <label className={classNames('TodoItem', {
                'TodoItem--completed': this.props.todo.completed
            })}>
                <input
                    onChange={::this.handleChange}
                    type="checkbox"
                    checked={this.props.todo.complete}/>
                {this.props.todo.text}
                <button
                    onClick={::this.handleRemove}
                    className="TodoItem__remove btn">
                    Remove
                </button>
            </label>
        );

    }

}
