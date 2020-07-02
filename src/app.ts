import { Either, Left, Right } from "./either/either";

const dummyApiCall = (isOk: boolean): Either<Error, string> => {
    return !isOk ? new Left(new Error("isOk is not true...")) 
                 : new Right("someString"); 
}

const App = () => {
    let dummyOkCall = 
        dummyApiCall(true)
            .whenRight<string>(x => x.replace('s', 'S'))
            .whenLeft<string>(x => x.message)
            .reduce();
    console.log(dummyOkCall); // Will print SomeString

    let dummyNotOkCall =
        dummyApiCall(false)
            .whenRight<string>(x => x.replace('s', 'S'))
            .whenLeft<string>(x => x.message)
            .reduce();
    console.log(dummyNotOkCall); // Will print isOk is not true...
}

App();