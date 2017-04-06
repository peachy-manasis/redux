// reducer
function counter(currentState, action)
{
    var nextState = {
        count: currentState.count
    };

    switch (action.type) {
        case 'ADD':
            nextState.count = currentState.count + 1;
            return nextState;
            break;
        case 'MINUS':
            nextState.count = currentState.count - 1;
            return nextState;
            break;
        case 'RESET':
            nextState.count = 0;
            return nextState;
            break;
        default:
            return currentState;
    }
}

// state
var state = {
    count: 0
};

// store
var store = Redux.createStore(counter, state);
var counterEl = document.getElementById('counter');

function render()
{
    var state = store.getState();
    counterEl.innerHTML = state.count.toString();
}

store.subscribe(render);

// actions
document.getElementById('add')
    .addEventListener('click', function()
    {
        store.dispatch({type: 'ADD'})
    });

document.getElementById('minus')
    .addEventListener('click', function()
    {
        store.dispatch({type: 'MINUS'})
    });

document.getElementById('reset')
.addEventListener('click', function()
    {
        store.dispatch({type: 'RESET'})
    });