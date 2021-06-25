import {
  BeginObserver,
  DoneObserver,
  InProgressObserver
} from '../src/observer/observer';
import { states } from '../src/observer/states';
import { RandomSubject } from '../src/observer/subject';

describe('Observer pattern', () => {

  let consoleOutput: string[] = []
  const mockLog = (output: string) => consoleOutput.push(output)
  beforeEach(() => (console.log = mockLog))
  beforeEach(() => consoleOutput = [])

  it('should only log 3 messages in the console', () => {
    const beginObserver = new BeginObserver()
    const doneObserver = new DoneObserver()
    const inProgressObserver = new InProgressObserver()
    const subject = new RandomSubject('Not Started');

    beginObserver.subscribe(subject);
    doneObserver.subscribe(subject);
    inProgressObserver.subscribe(subject);

    subject.updateState(states.begin)
    subject.notify();

    subject.updateState(states.inProgress);
    subject.notify();
    
    inProgressObserver.unsubscribe();
    subject.notify();

    subject.updateState(states.done)
    subject.notify();
    
    expect(consoleOutput.length).toBe(3);
  })
})
