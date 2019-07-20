export const SELECT_CURRENCY = 'SELECT_CURRENCY';
export const SET_TRANSFERS_NUMBER = 'SET_TRANSFERS_NUMBER';
export const UNSET_TRANSFERS_NUMBER = 'UNSET_TRANSFERS_NUMBER';
export const SET_DESTINATION = 'SET_DESTINATION';
export const BUY_TICKET = 'BUY_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const BACK_TO_MAIN_SCREEN = 'BACK_TO_MAIN_SCREEN';
export const FLIGHTS_RECEIVED = 'FLIGHTS_RECEIVED';

export const setCurrency = (currency: string) => ({
    type: SELECT_CURRENCY,
    currency
});

export const setTranfersNumber = (transfersNumber: number) => ({
    type: SET_TRANSFERS_NUMBER,
    transfersNumber
});

export const unsetTranfersNumber = (transfersNumber: number) => ({
    type: UNSET_TRANSFERS_NUMBER,
    transfersNumber
});

export const setDestination = (destination: string) => ({
    type: SET_DESTINATION,
    destination
})

export const buyTicket = (ticket: object) => ({
    type: BUY_TICKET,
    ticket
});

export const removeTicket = (ticket: object) => ({
    type: REMOVE_TICKET,
    ticket
});

export const backToMainScreen = () => ({
    type: BACK_TO_MAIN_SCREEN
});
