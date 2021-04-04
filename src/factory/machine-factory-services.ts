import { CounterMachine, DrillMachine } from './machine'

export const getMachineFactoryMap = (): Map<string, any> => {
  return new Map<string, any>()
    .set('Counter', CounterMachine)
    .set('Drill', DrillMachine)
}
