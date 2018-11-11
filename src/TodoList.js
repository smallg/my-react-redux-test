import React from 'react';
import { connect } from 'react-redux';
import { getAddItemAction, getDeleteItemAction, getInputChangeAction } from "./store/actionCreators";

const TodoList = (props) => {
    const {inputValue, list, changeInputValue, handleClick, handleDelete} = props;
    return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={handleClick}>submit</button>
                </div>
                <ul>
                    {list.map((item, index) => {
                        return <li key={index} onClick={handleDelete.bind(this, index)}>{item}</li>
                    })}
                </ul>
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = getAddItemAction();
            dispatch(action);
        },
        handleDelete(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);