# Booth Binary Multiplier

![Booth Binary Multiplier](https://coderosh.github.io/static-files/booth-multiplier/booth-multiplier.png)

---

## Booth Multiplication

Booth’s algorithm is a multiplication algorithm that multiplies two signed binary numbers in 2’s complement notation.

Put multiplicand in BR and multiplier in QR
and then the algorithm works as per the following conditions :

1. If Qn and Qn+1 are same i.e. 00 or 11 perform arithmetic shift by 1 bit.
1. If Qn Qn+1 = 10 do A= A + BR and perform arithmetic shift by 1 bit.
1. If Qn Qn+1 = 01 do A= A – BR and perform arithmetic shift by 1 bit.
