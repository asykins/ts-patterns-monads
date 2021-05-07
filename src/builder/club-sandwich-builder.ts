import { AbstractSandwichBuilder } from './base/builder'
import { Sandwich } from './models/sandwich'

export class ClubSandwichBuilder extends AbstractSandwichBuilder {
  constructor () {
    super()
    this.addSauce(this.sandwich)
    this.addMainIngredients(this.sandwich)
    this.addToppings(this.sandwich)
  }

  addSauce = (sandwich: Sandwich): void => {
    sandwich.sauce = 'Mayonaise'
  }

  addToppings = (sandwich: Sandwich): void => {
    sandwich.toppings = ['Salad', 'Tomatoes']
  }

  addMainIngredients = (sandwich: Sandwich): void => {
    sandwich.meat = 'Ham'
    sandwich.cheese = 'Emmental'
  }
}
