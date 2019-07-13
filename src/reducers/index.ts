
interface ActionObject {
    type: string;
}
const reducer = (state = {}, action: ActionObject) => {
    switch (action.type) {
        case 'HELLO_REACT':
            return {...state, say: 'Hello World Redux'};
        default:
            return state;
    }
};

export default reducer;

