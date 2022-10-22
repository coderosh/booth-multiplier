# Booth Binary Multiplication

Booth’s algorithm is a multiplication algorithm that multiplies two signed binary numbers in 2’s complement notation. 

Put multiplicand in BR and multiplier in QR 
and then the algorithm works as per the following conditions : 
1. If Qn and Qn+1 are same i.e. 00 or 11 perform arithmetic shift by 1 bit. 
2. If Qn Qn+1 = 10 do A= A + BR and perform arithmetic shift by 1 bit. 
3. If Qn Qn+1 = 01 do A= A – BR and perform arithmetic shift by 1 bit. 

## Flowchart:
[Booth Algorithm Flowchart](./img/booths-algorithm-flowchart.jpg)

Hosted on: [Netlify](https://booth-multiplier.netlify.app/)
