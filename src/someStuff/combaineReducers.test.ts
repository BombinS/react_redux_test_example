describe('combaineReducers implementation', () => {

  const combaineReducers = (reducers: any) => {
    return (state = {}, action: any) => {
      return Object.keys(reducers).reduce(
        (nextState, key) => {
          nextState[key] = reducers[key](
            state[key],
            action
          );
          return nextState;
        },
        {}
      )
    };
  };

  it('realization', () => {
    const dummyFunction = () => {console.log('123')}
    console.log('123',combaineReducers(dummyFunction));
    expect(1).toBe(1);
  })

});