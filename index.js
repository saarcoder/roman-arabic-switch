class romanArabicSwitch {
    static toRoman(int) {
        let digits = int.toString().split('').reverse().map(l=> Number(l)), res = []
        const fillRoman = (digit,low,mid,high)=> {
            if(digits[digit]) {
                digits[digit]===0? null: digits[digit]<4? res.push(new Array(digits[digit]).fill(low).join('')): digits[digit]===4? res.push(low+mid): digits[digit]<9? res.push(mid+ new Array(digits[digit]-5).fill(low).join('')): res.push(low+high)
            }
        }
        fillRoman(0,'I','V','X')
        fillRoman(1,'X','L','C')
        fillRoman(2,'C','D','M')
        fillRoman(3,'M','V','X')
        return res.reverse().join('')
    }
    static toArabic(str) {  
        let numerals = ['I','V','X','L','C','D','M'], dictionary = [1,5,10,50,100,500,1000]
        const translate = str.split('').map(el=> numerals.indexOf(el)).map(el=> dictionary[el])
        const calculate = translate.map((el,i,arr)=> {
            if(arr[i+1] && arr[i+1]>arr[i]) return -el
            else return el
        }) 
       return calculate.reduce((a,b)=>a+b)
} }
module.exports = romanArabicSwitch