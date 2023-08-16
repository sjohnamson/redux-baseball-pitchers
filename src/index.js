import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

// reducers
const pitcherList = (state = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    console.log('in pitcherlist reducer');
    if ('ADD_PITCHER' === action.type) {
        return[...state, action.payload]
    }
    return state
}

const catcherList = (state = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    console.log('in catcher list reducer');
    if ('ADD_CATCHER' === action.type) {
        return[...state, action.payload]
    }
    return state
}

const currentPitcher = (state = 'Elston Howard', action) => {
    console.log('curr pitcher action.payload', action.payload)
    if ('MAKE_CURR_PITCHER' === 'action.payload') {
        console.log('curr pitcher action.payload', action.payload)
        return action.payload
    }
    return state
}

// store 
const storeInstance = createStore(
    combineReducers({
        pitcherList,
        catcherList,
        currentPitcher
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);