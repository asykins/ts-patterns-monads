
export type Either<TLeft, TRight> = Left<TLeft, TRight> | Right<TLeft, TRight>;

export class Left<TLeft, TRight> {
    constructor(private left: TLeft) { }
    
    map = <TNewRight>(func:(right: TRight) => TNewRight): Either<TLeft, TNewRight> => {
        return new Left<TLeft, TNewRight>(this.left);
    }

    reduceIf = (func:(left: TLeft) => TRight, ...predicates: Array<(left: TLeft) => boolean>): Either<TLeft, TRight> => {
        const reducedPredicates = predicates && predicates.length 
        ? predicates.reduce((curr, prev) => curr && prev)
        : (left: TLeft) => false;
        
        if(reducedPredicates(this.left)) {
            return new Right(func(this.left));
        }
        else {
            return this;
        }
    }

    reduce = (func:(left: TLeft) => TRight) => func(this.left);
}

export class Right<TLeft, TRight> {
    constructor(private right: TRight) { }

    map = <TNewRight>(func:(right: TRight) => TNewRight): Either<TLeft, TNewRight> => {
        return new Right(func(this.right));
    }

    reduceIf = (func:(left: TLeft) => TRight, ...predicates: Array<(left: TLeft) => boolean>): Either<TLeft, TRight> => {
        return this;
    }

    reduce = (func:(left: TLeft) => TRight): TRight => this.right;
}
