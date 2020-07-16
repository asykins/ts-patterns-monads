import { maybe, None, Some } from '../src/maybe-option/maybe'

describe('Function maybe', () => {
  it('when parameter is null, result should be instance of None', () => {
    const result = maybe(null)
    expect(result).toBeInstanceOf(None)
  })
  it('when parameter is undefined, result should be instance of None', () => {
    const result = maybe(undefined)
    expect(result).toBeInstanceOf(None)
  })
  it('when parameter is not null, result should be instance of Some', () => {
    const result = maybe('not null expression')
    expect(result).toBeInstanceOf(Some)
  })
})

describe('Maybe of type Some', () => {
  it('when map is invoked, result should be instance of Some', () => {
    const result = maybe('str').map(x => x.replace('s', 'S'))
    expect(result).toBeInstanceOf(Some)
  })
  it('when filter is invoked and predicates are true, result should be instance of Some', () => {
    const result = maybe('str').map(x => x.replace('s', 'S'))
    expect(result).toBeInstanceOf(Some)
  })
  it('when filter is invoked and predicates are false, result should be instanc of None', () => {
    const result = maybe('str').filter(x => x.length === 4)
    expect(result).toBeInstanceOf(None)
  })
})

describe('Maybe of type None', () => {
  it('when map is invoked, result should be instance of None', () => {
    const str: string | null = null
    const result = maybe<string | null>(str).map(x => x?.replace('s', 'S'))
    expect(result).toBeInstanceOf(None)
  })
  it('when filter is invoked, result should be instance of Some', () => {
    const str: string | null = null
    const result = maybe<string | null>(str).filter(x => x?.length === 4)
    expect(result).toBeInstanceOf(None)
  })
})
