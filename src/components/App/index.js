import React from 'react'
import { connect } from 'react-redux';

import './style.scss';

import TodoItem from '../TodoItem';
import AddTodo from '../AddTodo';
import { addTodo, completeTodo, removeTodo } from '../../actions/todo.js';

@connect(function (state) {

    return {
        todos: state
    };

})
export default class App extends React.Component {

    static propTypes = {
        todos: React.PropTypes.array.isRequired
    };

    completeTodo(id) {
        this.props.dispatch(completeTodo(id));
    }

    removeTodo(id) {
        this.props.dispatch(removeTodo(id));
    }

    addTodo(text) {
        this.props.dispatch(addTodo(text));
    }

    render() {

        const taskCount = this.props.todos.length;
        const heading = taskCount === 1 ? 'task' : 'tasks';

        return (
            <div className="App">
                <h1>{this.props.todos.length} {heading}</h1>
                {this.props.todos.map((todo, index) => {

                    return (
                        <TodoItem
                            key={index}
                            todo={todo}
                            completeTodo={::this.completeTodo}
                            removeTodo={::this.removeTodo}/>
                    );

                })}
                <AddTodo addTodo={::this.addTodo}/>
            </div>
        );

    }

}
