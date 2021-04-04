export abstract class Machine {
  name: string = ''
  machineType: string = ''
}

export class CounterMachine extends Machine {
  constructor () {
    super()
  }
  
  machineType: string = 'Counter'
  counts: number = 0
}

export class DrillMachine extends Machine {
  constructor () {
    super()
  }
  machineType: string = 'Drill'
  drill = (): void => {
    console.log('Drill...')
  }
}
