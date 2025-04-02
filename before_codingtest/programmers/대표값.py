#핵심 : 평균값은 round(sum(배열)/배열 길이) , abs(): 절댓값

import sys
#sys.stdin=open("input.txt","rt") #파일 입출력을 위한 준비

n = int(input())
a = list(map(int, input().split()))
avg = round(sum(a)/n)
min = 2147000000
for idx, x in enumerate(a):
    tmp = abs(x- avg)
    if tmp < min:
        min = tmp
        score = x
        res = idx + 1
    elif tmp == min:
        if score < x:
            score = x
            res = idx + 1
print(avg, res)