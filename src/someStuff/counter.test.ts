interface IAction {
    type: string
}

function counter(state = 0, action: IAction){

    switch (action.type){
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1
        default:
            return state  
    }
}

it('test counter',  () => {
    expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
    expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
    expect(counter(2, { type: 'DECREMENT' })).toEqual(1);
    expect(counter(1, { type: 'DECREMENT' })).toEqual(0);
    expect(counter(1, { type: 'UNKNOWN ACTION' })).toEqual(1);
    expect(counter(undefined, { type: 'INCREMENT' })).toEqual(1);
})

