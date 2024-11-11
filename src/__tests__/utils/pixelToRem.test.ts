import { pixelToRem } from "@/utils";

describe('pixelToRem', () => {


    it('should correctly convert pixels to rem for positive values', () => {
        expect(pixelToRem(16)).toBe('1rem');
        expect(pixelToRem(32)).toBe('2rem');
        expect(pixelToRem(8)).toBe('0.5rem');
    })

    it('should correctly convert to zero', () => {
        expect(pixelToRem(0)).toBe('0rem');
    })

    it('should correctly convert pixels to rem for negative values', () => {
        expect(pixelToRem(-16)).toBe('-1rem');
        expect(pixelToRem(-32)).toBe('-2rem');
        expect(pixelToRem(-8)).toBe('-0.5rem');
    })
})