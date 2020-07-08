export interface Either<TLeft, TRight> {
  map: <TNewRight>(
    func: (right: TRight) => TNewRight
  ) => Either<TLeft, TNewRight>
  reduceIf: (
    func: (left: TLeft) => TRight,
    ...predicates: Array<(left: TLeft) => boolean>
  ) => Either<TLeft, TRight>
  reduce: (func: (left: TLeft) => TRight) => TRight
}

export class Left<TLeft, TRight> implements Either<TLeft, TRight> {
  constructor (private left: TLeft) {}

  map = <TNewRight>(
    func: (right: TRight) => TNewRight
  ): Either<TLeft, TNewRight> => {
    return new Left<TLeft, TNewRight>(this.left)
  }

  reduceIf = (
    func: (left: TLeft) => TRight,
    ...predicates: Array<(left: TLeft) => boolean>
  ): Either<TLeft, TRight> => {
    const reducedPredicates =
      predicates && predicates.length
        ? predicates.reduce((curr, prev) => curr && prev)
        : (left: TLeft) => false
    return reducedPredicates(this.left) ? new Right(func(this.left)) : this
  }

  reduce = (func: (left: TLeft) => TRight) => func(this.left)
}

export class Right<TLeft, TRight> implements Either<TLeft, TRight> {
  constructor (private right: TRight) {}

  map = <TNewRight>(
    func: (right: TRight) => TNewRight
  ): Either<TLeft, TNewRight> => {
    return new Right(func(this.right))
  }

  reduceIf = (
    func: (left: TLeft) => TRight,
    ...predicates: Array<(left: TLeft) => boolean>
  ): Either<TLeft, TRight> => this

  reduce = (func: (left: TLeft) => TRight): TRight => this.right
}
