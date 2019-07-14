
interface ActionObject {
    type: string;
    currency: string;
    transfersNumber: any;
}
const reducer = (state: any = {currency:'RUB',transferNumberArray:[]}, action: ActionObject) => {
    console.log('state',state)
    const transfersArray=state.transferNumberArray
    switch (action.type) {
        case 'HELLO_REACT':
            return {...state, say: 'Hello World Redux'};
        case 'SELECT_CURRENCY':
            return { ...state, currency: action.currency };
        case 'SET_TRANSFERS_NUMBER':
            
            return { ...state,
                transferNumberArray: action.transfersNumber === null ?  
                    [] :
                    [...transfersArray, action.transfersNumber]
            };
        case 'UNSET_TRANSFERS_NUMBER':
            return { ...state,
                transferNumberArray: transfersArray.filter((i: any)=>i!==action.transfersNumber)
            };
        default:
            return state;
    }
};

export default reducer;

