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

export const setTranfersNumber = (transfersNumber: number | object) => ({
    type: 'SET_TRANSFERS_NUMBER',
    transfersNumber
});

export const unsetTranfersNumber = (transfersNumber: number | object) => ({
    type: 'UNSET_TRANSFERS_NUMBER',
    transfersNumber
});
