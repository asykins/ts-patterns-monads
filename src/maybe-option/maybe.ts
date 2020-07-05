export interface IMaybe<T> {
    map: <TMapped>(func:(content: T) => TMapped) => IMaybe<TMapped>;
    filter: (...predicates: ((content: T) => boolean)[]) => IMaybe<T>;
    execute: (func:(content: T) => void) => void
}

export const maybe = <T>(content: T): IMaybe<T> =>
    content == null ? new None([])
        : content == undefined ? new None([])
            : new Some([content]);

export class Some<T> implements IMaybe<T>{
    constructor(private content: Array<T>) { }

    filter = (...predicates: ((content: T) => boolean)[]): IMaybe<T> => {
        const filteredList = this.content
            .filter(predicates.reduce((current, previous) => current && previous));
        if (filteredList.length) {
            return new Some(filteredList)
        } else {
            return new None([]);
        }
    }

    map = <TMapped>(func: (content: T) => TMapped): IMaybe<TMapped> =>
        new Some([func(this.content[0])]);

    execute = (func: (content: T) => void): void => {
        func(this.content[0]);
    }
}

export class None<T> implements IMaybe<T>{
    constructor(content: Array<T>) { }

    filter = (...predicates: ((content: T) => boolean)[]): IMaybe<T> => this;

    map = <TMapped>(func: (content: T) => TMapped): IMaybe<TMapped> =>
        new None<TMapped>([]);

    execute = (func: (content: T) => void): void => { }
}