import { WarrantiedProduct } from '../src/chain-of-responsabilities/warrantied-product'
import {
    ExpiredWarranty,
    GeneralWarranty
} from '../src/chain-of-responsabilities/warranty'
import { DefaultRuleSet } from '../src/chain-of-responsabilities/warranty-rule-set-services'

describe('Warrantied Product', () => {
  it('When product is created, status should return New', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )

    expect(product.status).toEqual('New')
  })
  it('When product is marked as damaged, status should return Damaged', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )
    product.markAsDamaged()

    expect(product.status).toEqual('Damaged')
  })
  it('When product is marked as defective, status should return Defective', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )
    product.markAsDefective()

    expect(product.status).toEqual('Defective')
  })
  it('When product is marked as repaired, status should return Repaired', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )
    product.markAsRepaired()

    expect(product.status).toEqual('Repaired')
  })
  it('When product is marked as defective and constructor warranty is not expired, status should return Repaired', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )
    product.markAsDefective()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Repaired')
  })
  it('When product is marked as defective and constructor warranty is expired, status should return Defective', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )
    product.markAsDefective()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Defective')
  })
  it('When product is marked as damaged and constructor warranty is not expired, status should return Damaged', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      ExpiredWarranty.instance(),
      new DefaultRuleSet()
    )
    product.markAsDamaged()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Damaged')
  })
  it('When product is marked as damaged and extended warranty is not expired, status should return Repaired', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const extendedWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      new GeneralWarranty(extendedWarrantyExpiringDate),
      new DefaultRuleSet()
    )
    product.markAsDamaged()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Repaired')
  })
  it('When product is marked as defective and extended warranty is not expired, status should return Defective', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const extendedWarrantyExpiringDate = new Date(
      today.getFullYear() + 2,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      new GeneralWarranty(extendedWarrantyExpiringDate),
      new DefaultRuleSet()
    )
    product.markAsDefective()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Defective')
  })
  it('When product is marked as damaged and extended warranty is expired, status should return Damaged', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const extendedWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      new GeneralWarranty(extendedWarrantyExpiringDate),
      new DefaultRuleSet()
    )
    product.markAsDamaged()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Damaged')
  })
  it('When product is marked as defective and extended warranty is expired, status should return Defective', () => {
    const today = new Date()
    const constructorWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const extendedWarrantyExpiringDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    )
    const product = new WarrantiedProduct(
      new GeneralWarranty(constructorWarrantyExpiringDate),
      new GeneralWarranty(extendedWarrantyExpiringDate),
      new DefaultRuleSet()
    )
    product.markAsDefective()
    product.claimWarranty(product => product.markAsRepaired())

    expect(product.status).toEqual('Defective')
  })
})
