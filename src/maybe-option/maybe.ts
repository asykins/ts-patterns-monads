export type Maybe<T> = Some<T> | None<T>

export const maybe = <T>(content: T): Maybe<T> =>
    content == null ? new None([])
        : content == undefined ? new None([])
            : new Some([content]);

export class Some<T> {
    constructor(private content: Array<T>) { }

    filter = (...predicates: ((content: T) => boolean)[]): Maybe<T> => {
        const filteredList = this.content
            .filter(predicates.reduce((current, previous) => current && previous));
        if (filteredList.length) {
            return new Some(filteredList)
        } else {
            return new None([]);
        }
    }

    map = <TMapped>(func: (content: T) => TMapped): Maybe<TMapped> =>
        new Some([func(this.content[0])]);

    execute = (func: (content: T) => void): void => {
        func(this.content[0]);
    }
}

export class None<T> {
    constructor(content: Array<T>) { }

    filter = (...predicates: ((content: T) => boolean)[]): Maybe<T> => this;

    map = <TMapped>(func: (content: T) => TMapped): Maybe<TMapped> =>
        new None<TMapped>([]);

    execute = (func: (content: T) => void): void => { }
}