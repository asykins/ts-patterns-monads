import { Warranty } from './warranty'
import { WarrantyRuleSet } from './warranty-rule-set'
import { WarrantyRuleSetFactory } from './warranty-rule-set-services'
export class WarrantiedProduct {
  private warrantyRuleSet: WarrantyRuleSet
  constructor (
    private constructorWarranty: Warranty,
    private extendedWarranty: Warranty,
    private warrantyRuleSetFactory: WarrantyRuleSetFactory
  ) {
    this.warrantyRuleSet = warrantyRuleSetFactory.create(
      this.claimConstructorWarranty,
      this.claimExtendedWarranty
    )
  }

  public id: string = ''
  public name: string = ''
  public status: 'Repaired' | 'Damaged' | 'Defective' | 'New' = 'New'

  private claimConstructorWarranty = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => {
    this.constructorWarranty.claim(product, whenClaimValid)
  }

  private claimExtendedWarranty = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => {
    this.extendedWarranty.claim(product, whenClaimValid)
  }

  public markAsDamaged = (): void => {
    this.status = 'Damaged'
    this.warrantyRuleSet.damaged()
  }

  public markAsDefective = (): void => {
    this.status = 'Defective'
    this.warrantyRuleSet.defective()
  }

  public markAsRepaired = (): void => {
    this.status = 'Repaired'
    this.warrantyRuleSet.repaired()
  }

  public claimWarranty = (
    whenClaimValid: (product: WarrantiedProduct) => void
  ) => this.warrantyRuleSet.claim(this, whenClaimValid)
}
