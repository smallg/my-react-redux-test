import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import { Provider } from 'react-redux';
import store from './store';
import { AdvancedTabSelectorSample } from "./AdvancedTabSelectorSample";
import ContextTest from "./components/context/ContextTest";
import ChatApp from "./components/chat/ChatApp";

const App = (
        <Provider store={store}>
            <Fragment>
                <TodoList/>
                <p>Child function as params</p>
                <AdvancedTabSelectorSample/>
                <p>Context API</p>
                <ContextTest/>
                <p>HOC</p>
                <ChatApp/>
            </Fragment>
        </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
