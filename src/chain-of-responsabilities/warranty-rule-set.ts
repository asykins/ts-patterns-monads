import { WarrantiedProduct } from './warrantied-product'

export interface WarrantyRuleSet {
  claim: (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ) => void
  damaged: () => void
  defective: () => void
  repaired: () => void
}

export class BaseWarrantyRuleSet implements WarrantyRuleSet {
  protected forward = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => this.nextHandler.claim(product, whenClaimValid)

  public claim = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => {}

  constructor (private nextHandler: WarrantyRuleSet) {
    this.claim = this.forward
  }

  public damaged = (): void => {
    this.handleDamaged()
    this.nextHandler.damaged()
  }

  public defective = (): void => {
    this.handleDefective()
    this.nextHandler.defective()
  }

  public repaired = (): void => {
    this.handleRepaired()
    this.nextHandler.repaired()
  }

  protected handleDamaged = (): void => {}
  protected handleDefective = (): void => {}
  protected handleRepaired = (): void => {}
}

export class ConstructorWarrantyRule extends BaseWarrantyRuleSet {
  constructor (
    private claimAction: (
      product: WarrantiedProduct,
      whenClaimValid: (product: WarrantiedProduct) => void
    ) => void,
    nextHandler: WarrantyRuleSet
  ) {
    super(nextHandler)
  }

  protected handleDamaged = (): void => {
    this.claim = this.forward
  }
  protected handleDefective = (): void => {
    this.claim = this.claimAction
  }
  protected handleRepaired = (): void => {
    this.claim = this.forward
  }
}

export class ExtendedWarrantyRule extends BaseWarrantyRuleSet {
  constructor (
    private claimAction: (
      product: WarrantiedProduct,
      whenClaimValid: (product: WarrantiedProduct) => void
    ) => void,
    nextHandler: WarrantyRuleSet
  ) {
    super(nextHandler)
  }

  protected handleDamaged = (): void => {
    this.claim = this.claimAction
  }
  protected handleDefective = (): void => {
    this.claim = this.forward
  }
  protected handleRepaired = (): void => {
    this.claim = this.forward
  }
}

export class NoWarrantyRule implements WarrantyRuleSet {
  public claim = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => {}

  public damaged = (): void => {}

  public defective = (): void => {}

  public repaired = (): void => {}
}
