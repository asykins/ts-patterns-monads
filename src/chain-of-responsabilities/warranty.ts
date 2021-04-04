import { WarrantiedProduct } from './warrantied-product'
export interface Warranty {
  claim: (product: WarrantiedProduct, whenClaimValid: (product: WarrantiedProduct) => void) => void
}

export class GeneralWarranty implements Warranty {
  constructor (private expires: Date) {}

  private isWarrantyValid = (): boolean => new Date() < this.expires

  public claim = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => {
    if (this.isWarrantyValid()) {
      whenClaimValid(product)
    } else {
      return
    }
  }
}

export class ExpiredWarranty implements Warranty {
  private static warrantyInstance: Warranty

  public static instance = (): Warranty => {
    if (!ExpiredWarranty.warrantyInstance) {
      ExpiredWarranty.warrantyInstance = new ExpiredWarranty()
    }
    return ExpiredWarranty.warrantyInstance
  }

  public claim = (
    product: WarrantiedProduct,
    whenClaimValid: (product: WarrantiedProduct) => void
  ): void => {}
}
