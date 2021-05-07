import { Sandwich } from '../models/sandwich'
export interface SandwichBuilder {
  getSandwich: () => Sandwich
}

export abstract class AbstractSandwichBuilder implements SandwichBuilder {
  protected sandwich: Sandwich = new Sandwich()

  constructor () {}

  getSandwich = (): Sandwich => this.sandwich

  addSauce = (sandwich: Sandwich): void => {}

  addToppings = (sandwich: Sandwich): void => {}

  addMainIngredients = (sandwich: Sandwich): void => {}
}
