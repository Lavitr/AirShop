
interface ActionObject {
    type: string;
    currency: string;
    transfersNumber: any;
    destination: string;
    flights: object;
}
const reducer = (state: any = {currency:'RUB',transferNumberArray:[]}, action: ActionObject) => {
    console.log('state',state)
    const transfersArray=state.transferNumberArray
    switch (action.type) {
        case 'GET_FLIGHTS':
            return { ...state, loading: true };
        case 'FLIGHTS_RECEIVED':
            return { ...state, flights: action.flights, loading: false }
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
        case 'SET_DESTINATION':
            return { ...state,destination:action.destination, loading: true };
        default:
            return state;
    }
};

export default reducer;

