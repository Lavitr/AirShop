import { object } from "prop-types";

interface ActionObject {
    type: string;
    currency: string;
    transfersNumber: any;
    destination: string;
    flights: object;
    ticket: any;
}
const reducer = (state: any = {currency:'RUB',transferNumberArray:[],ticket:[]}, action: ActionObject) => {
    const transfersArray=state.transferNumberArray;
    const tickerArray=state.ticket
    switch (action.type) {
        case 'GET_FLIGHTS':
            return { ...state, loading: true };
        case 'FLIGHTS_RECEIVED':
            return { ...state, flights: action.flights, loading: false }
        case 'SELECT_CURRENCY':
            return { ...state, currency: action.currency };
        case 'SET_TRANSFERS_NUMBER':
            
            return { ...state,
                transferNumberArray: action.transfersNumber === -1 ?  
                    [-1] :
                    [...transfersArray, action.transfersNumber].filter(i=>i!==-1)
            };
        case 'UNSET_TRANSFERS_NUMBER':
            return { ...state,
                transferNumberArray: transfersArray.filter((i: any) => i!==action.transfersNumber)
            };
        case 'SET_DESTINATION':
            return { ...state,destination:action.destination, loading: true };
        case 'BUY_TICKET':
            return { ...state,ticket:[...tickerArray, action.ticket], isBucketOpen: true };
        case 'REMOVE_TICKET':
            return { ...state,ticket:tickerArray.filter((i: any) => i.number!==action.ticket.number)}
        default:
            return state;
    }
};

export default reducer;

