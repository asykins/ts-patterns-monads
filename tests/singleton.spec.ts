import { Singelton } from '../src/singleton/singleton';
describe("Singleton Pattern", () => {
    it("Should return be instanciated once", () => {
        const singletonOne = Singelton.instance;
        const singletonTwo = Singelton.instance;
        expect(singletonOne).toStrictEqual(singletonTwo);
    })
})