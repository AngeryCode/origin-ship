test('test two number add', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5)
})

test('test boolean', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(2).toBeLessThan(3)
})

test('test object', () => {
    expect({name: 'jack'}).toEqual({name:'jack'})
})

