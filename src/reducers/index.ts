import { SELECT_CURRENCY,SET_TRANSFERS_NUMBER,UNSET_TRANSFERS_NUMBER,
    SET_DESTINATION,BUY_TICKET,REMOVE_TICKET, BACK_TO_MAIN_SCREEN } from '../actions'

interface ActionObject {
    type: string;
    currency: string;
    transfersNumber: any;
    destination: string;
    flights: object;
    ticket: any;
}

const reducer = (state: any = {currency:'USD',transferNumberArray:[],ticket:[]}, action: ActionObject) => {
    const transfersArray=state.transferNumberArray;
    const ticketArray=state.ticket
    switch (action.type) {
        case 'GET_FLIGHTS':
            return { ...state, loading: true };
        case 'FLIGHTS_RECEIVED':
            return { ...state, flights: action.flights, loading: false }
        case SELECT_CURRENCY:
            return { ...state, currency: action.currency };
        case SET_TRANSFERS_NUMBER:
            
            return { ...state,
                transferNumberArray: action.transfersNumber === -1 ?  
                    [-1] :
                    [...transfersArray, action.transfersNumber].filter(i=>i!==-1)
            };
        case UNSET_TRANSFERS_NUMBER:
            return { ...state,
                transferNumberArray: transfersArray.filter((i: any) => i!==action.transfersNumber)
            };
        case SET_DESTINATION:
            return { ...state,destination:action.destination, loading: true };
        case BUY_TICKET:
            return { ...state,ticket:[...ticketArray, action.ticket], isBucketOpen: true };
        case REMOVE_TICKET:
            return { ...state, ticket:ticketArray.filter((i: any) => i.ticketId!==action.ticket.ticketId)}
        case BACK_TO_MAIN_SCREEN:
            return { ...state, isBucketOpen: false}
        default:
            return state;
    }
};

export default reducer;

