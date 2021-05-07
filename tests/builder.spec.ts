import { SandwichBuilder } from '../src/builder/base/builder'
import { ClubSandwichBuilder } from '../src/builder/club-sandwich-builder'
import { Sandwich } from '../src/builder/models/sandwich'

describe('Club Sandwich Builder', () => {
  it('shoudl return a sandwich', () => {
    const builder: SandwichBuilder = new ClubSandwichBuilder()
    const sandwich = builder.getSandwich()
    expect(sandwich).toBeInstanceOf(Sandwich)
  })
  it('shoudl return sandwich with ham', () => {
    const builder: SandwichBuilder = new ClubSandwichBuilder()
    const sandwich = builder.getSandwich()
    expect(sandwich.meat).toBe("Ham")
  })
  it('shoudl return sandwich with emmental', () => {
    const builder: SandwichBuilder = new ClubSandwichBuilder()
    const sandwich = builder.getSandwich()
    expect(sandwich.cheese).toBe("Emmental")
  })
  it('shoudl return sandwich with Mayonaise', () => {
    const builder: SandwichBuilder = new ClubSandwichBuilder()
    const sandwich = builder.getSandwich()
    expect(sandwich.sauce).toBe("Mayonaise")
  })
  it('shoudl return sandwich with salad', () => {
    const builder: SandwichBuilder = new ClubSandwichBuilder()
    const sandwich = builder.getSandwich()
    expect(sandwich.toppings[0]).toBe("Salad")
  })
  it('shoudl return sandwich with tomatoes', () => {
    const builder: SandwichBuilder = new ClubSandwichBuilder()
    const sandwich = builder.getSandwich()
    expect(sandwich.toppings[1]).toBe("Tomatoes")
  })
})
