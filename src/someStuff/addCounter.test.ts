const deepFreeze = require('deep-freeze');

const addCounter = (list: any) => {
    return [...list, 0]
}

const removeCounter = (list: any, index: number) => {
    return [...list.slice(0, index), ...list.slice(index + 1)]
}

const incrementCounter = (list: any, index: number) => {
    return [...list.slice(0, index), ...list[index] + 1, ...list.slice(index + 1)]
}

describe('addCounter test', () => {

    it('[] => [0]]', () => {
        let listBefore: any = []
        deepFreeze(listBefore)
        const listAfter: any = [0]

        expect(addCounter(listBefore)).toEqual(listAfter)
    })

})

describe('removeCounter test', () => {

    it('[0,1,2] => [0,1]', () => {
        let listBefore: any = [0, 1, 2]
        deepFreeze(listBefore)
        const listAfter: any = [0, 1]

        expect(removeCounter(listBefore, 2)).toEqual(listAfter)
    })

})

describe('incrementCounter test', () => {

    it('[0,1,2] => [0,2,2]', () => {
        let listBefore: any = [0, 1, 2]
        deepFreeze(listBefore)
        const listAfter: any = [0, 2, 2]

        expect(incrementCounter(listBefore, 1)).toEqual(listAfter)
    })

})