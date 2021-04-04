import { WarrantiedProduct } from './warrantied-product'
import {
  ConstructorWarrantyRule,
  ExtendedWarrantyRule,
  NoWarrantyRule,
  WarrantyRuleSet
} from './warranty-rule-set'

export interface WarrantyRuleSetFactory {
  create: (
    ...callbackFns: ((
      product: WarrantiedProduct,
      whenClaimValid: (product: WarrantiedProduct) => void
    ) => void)[]
  ) => WarrantyRuleSet
}

export class DefaultRuleSet implements WarrantyRuleSetFactory {
  public create = (
    claimConstructorWarranty: (
      product: WarrantiedProduct,
      whenClaimValid: (product: WarrantiedProduct) => void
    ) => void,
    claimExtendedWarranty: (
      product: WarrantiedProduct,
      whenClaimValid: (product: WarrantiedProduct) => void
    ) => void
  ): WarrantyRuleSet => {
    return new ConstructorWarrantyRule(
      claimConstructorWarranty,
      new ExtendedWarrantyRule(claimExtendedWarranty, new NoWarrantyRule())
    )
  }
}