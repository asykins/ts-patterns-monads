import { Left, Right } from '../src/either/either'

describe('Either of type left', () => {
  it('should have property left', () => {
    const left = new Left('wrong')
    expect(left).toHaveProperty('left')
  })
  it('should not have property right', () => {
    const left = new Left('wrong')
    expect(left).not.toHaveProperty('right')
  })

  it('map should return instance of Left', () => {
    const left = new Left('wrong').map(x => x)
    expect(left).toBeInstanceOf(Left)
  })
  it('reduce should return type of delegate function', () => {
    const left = new Left<string, string>('wrong').reduce(x => x)
    expect(typeof left).toBe('string')
  })
})

describe('Either of type Right', () => {
  it('should have property right', () => {
    const right = new Right('right')
    expect(right).toHaveProperty('right')
  })
  it('should not have property left', () => {
    const right = new Right('right')
    expect(right).not.toHaveProperty('left')
  })
  it('map should return instance of Right', () => {
    const right = new Right('right').map(x => x)
    expect(right).toBeInstanceOf(Right)
  })
  it('reduce should return type of right', () => {
    const right = new Right<string, string>('right').reduce(x => x)
    expect(typeof right).toBe('string')
  })
})
