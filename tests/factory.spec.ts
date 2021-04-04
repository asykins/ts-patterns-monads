import { MachineFactory } from '../src/factory/factory';
import { CounterMachine, DrillMachine, Machine } from '../src/factory/machine';

describe('MachineFactory', () => {
  it('When Counter is passed, should return new Machine instance', () => {
    const result = new MachineFactory().create('Counter', [])
    expect(result).toBeInstanceOf(Machine)
  })
  it('When Counter is passed, should return new CounterMachine instance', () => {
    const result = new MachineFactory().create('Counter', [])
    expect(result).toBeInstanceOf(CounterMachine)
  })
  it("When Counter is passed, should not return new DrillMachine instance", () => {
    const result = new MachineFactory().create("Counter", [])
    expect(result).not.toBeInstanceOf(DrillMachine)
  })
  it('When Drill is passed, should return new Machine instance', () => {
    const result = new MachineFactory().create('Drill', [])
    expect(result).toBeInstanceOf(Machine)
  })
  it('When Drill is passed, should return new DrillMachine instance', () => {
    const result = new MachineFactory().create('Drill', [])
    expect(result).toBeInstanceOf(DrillMachine)
  })
  it("When Drill is passed, should not return new CounterMachine instance", () => {
    const result = new MachineFactory().create("Drill", [])
    expect(result).not.toBeInstanceOf(CounterMachine)
  })
})
