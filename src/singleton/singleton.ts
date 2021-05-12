/**
 *  /!\ Anti-pattern... but pattern anyway
 */

export class Singelton {
    private static singleton: Singelton | null = null
    private constructor() {}
    private static create = (): Singelton => {
        if(!Singelton.singleton) {
            Singelton.singleton = new Singelton()
        }
        return Singelton.singleton;
    }
    public static instance = Singelton.create()
}