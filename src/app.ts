import { Either, Left, Right } from './either/either';
import { maybe } from './maybe-option/maybe';

const dummyApiCall = (isOk: boolean): Either<Error, string> => {
  return !isOk
    ? new Left(new Error('isOk is not true...'))
    : new Right('someString')
}

const dummyApiResult = (isOk: boolean): string | null => {
  return isOk ? 'someString' : null
}

const App = () => {
  let dummyOkCall = dummyApiCall(true)
    .map(x => x.replace('s', 'S'))
    .reduceIf(
      x => x.message,
      x => x.message.includes('not true')
    )
    .reduce(x => x.message + 'Ahhhhhh!')

  console.log(dummyOkCall) // Will print SomeString

  let dummyNotOkCall = dummyApiCall(false)
    .map(x => x.replace('s', 'S'))
    .reduceIf(
      x => x.message,
      x => x.message.includes('not true')
    )
    .reduce(x => x.message + ' Ahhhhhh!')

  console.log(dummyNotOkCall) //Will print isOk is not true...

  //Wether it's null or not, the code doesn't change
  //The code will not do anything if the content is null
  //Otherwise, the functions will execute
  maybe(dummyApiResult(true))
    .filter(
      x => x?.length === 10,
      x => (x?.startsWith('s') ? true : false)
    )
    .map(x => x?.replace('s', 'S'))
    .execute(x => console.log(x)) // Will print SomeString

  maybe(dummyApiResult(false))
    .filter(
      x => x?.length === 10,
      x => (x?.startsWith('s') ? true : false)
    )
    .map(x => x?.replace('s', 'S'))
    .execute(x => console.log(x)) // Will print nothing

}

App();
