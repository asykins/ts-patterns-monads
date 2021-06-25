import { Observer, Unsubscriber } from './observer';

export abstract class Subject {
  protected observers: Observer[] = []
  constructor (public state: string) {}
  public subscribe = (observer: Observer): Unsubscriber => {
    if(!this.observers.includes(observer)) {
      this.observers.push(observer)
    }
    return new Unsubscriber(this.observers, observer);
  }
  public notify = async (): Promise<void> => {
    Promise.all(this.observers.map(x => x.update(this.state)))
  }
  public abstract updateState = (param: any): void => { /** To Override **/ }
}

export class RandomSubject extends Subject {
  constructor (state: string,) {
    super(state)
  }
  public updateState = (param: any): void => {
    this.state = param.toString()
  }
}
