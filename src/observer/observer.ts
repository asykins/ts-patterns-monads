import { states } from "./states";
import { Subject } from './subject';

export class Unsubscriber {
  constructor(public observers: Observer[], public observer: Observer) {}

  public unsubscribe = (): void => {
    this.observers.splice(this.observers.findIndex(x => x === this.observer), 1)
  }
}

export abstract class Observer {
  protected unsubscriber: Unsubscriber | null = null;
  constructor () {}
  public subscribe = (subject: Subject): Observer => {
    const unsubscriber = subject.subscribe(this);
    if(unsubscriber) {
      this.unsubscriber = unsubscriber;
    }
    return this;
  }
  public unsubscribe = (): void => {
    this.unsubscriber?.unsubscribe();
  }
  public abstract update = (state: string): void => {}
}

export class DoneObserver extends Observer {
  public update = (state: string): void => {
    if (state === states.done) {
      console.log(`---- Calling Service for Done object...`)
    }
  }
}

export class InProgressObserver extends Observer {
  public update = (state: string): void => {
    if (state === states.inProgress) {
      console.log(`---- Calling Service for InProgress object...`)
    }
  }
}

export class BeginObserver extends Observer {
  public update = (state: string): void => {
    if (state === states.begin) {
      console.log('---- Calling Service for Begin object')
    }
  }
}
