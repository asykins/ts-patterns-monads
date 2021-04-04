import { Machine } from './machine'
import { getMachineFactoryMap } from './machine-factory-services'

export abstract class AbstractFactory<TKey, TResult> {
  constructor (private container: Map<TKey, any>) {}

  public create = (key: TKey, ...constructorParams: any[]): TResult => {
    const type = this.container.get(key)
    return new type(...constructorParams) as TResult
  }
}

export class MachineFactory extends AbstractFactory<string, Machine> {
  constructor () {
    super(getMachineFactoryMap())
  }
}
