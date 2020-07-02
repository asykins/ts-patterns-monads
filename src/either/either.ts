export type Either<TLeft, TRight> = Left<TLeft, TRight> | Right<TLeft, TRight>;

export class Left<TLeft, TRight> {
    constructor(private left: TLeft) { }

    whenLeft = <TNewLeft>(func: (left: TLeft) => TNewLeft): Either<TNewLeft, TRight> => {
        return new Left(func(this.left));
    };

    whenRight = (): Either<TLeft, TRight> => this;

    reduce = (): TLeft => this.left;
}

export class Right<TLeft, TRight> {
    constructor(private right: TRight) { }

    whenLeft = (): Either<TLeft, TRight> => this;

    whenRight = <TNewRight>(func: (right: TRight) => TNewRight): Either<TLeft, TNewRight> => {
        return new Right(func(this.right));
    };

    reduce = (): TRight => this.right;
}
