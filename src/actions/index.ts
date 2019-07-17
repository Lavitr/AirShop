// This file contatins 'ACTION-CREATOR' functions
// In Redux, 'ACTION-CREATOR'  return an  ACTION(plain JavaScript object)

// example of simple 'ACTION-CREATOR'

export const sayHello = () => ({
    type: 'HELLO_REACT',
});

export const setCurrency = (currency: string) => ({
    type: 'SELECT_CURRENCY',
    currency
});

export const setTranfersNumber = (transfersNumber: number) => ({
    type: 'SET_TRANSFERS_NUMBER',
    transfersNumber
});

export const unsetTranfersNumber = (transfersNumber: number) => ({
    type: 'UNSET_TRANSFERS_NUMBER',
    transfersNumber
});

export const setDestination = (destination: string) => ({
    type: 'SET_DESTINATION',
    destination
})

export const buyTicket = (ticket: object) => ({
    type: 'BUY_TICKET',
    ticket
});

export const removeTicket = (ticket: object) => ({
    type: 'REMOVE_TICKET',
    ticket
});
