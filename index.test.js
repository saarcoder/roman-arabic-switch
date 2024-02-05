const romanArabicSwitch = require('./index')
test('switch from Arabic numeral to Roman numeral', ()=> {
    expect(romanArabicSwitch.toRoman(3510)).toBe('MMMDX')
})
test('switch from Roman numeral to Arabic numeral', ()=> {
    expect(romanArabicSwitch.toArabic('XXIV')).toBe(24)
})
