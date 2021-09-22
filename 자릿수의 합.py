import sys
sys.stdin=open("input.txt","rt") #파일 입출력을 위한 준비

n = int(input())
a = list(map(int, input().split()))
max = -2149000000
#방법1) str 처리
def digit_sum(x):
    sum = 0
    for i in str(x):
        sum += int(i)
    return sum
'''
#방법2) 숫자 자리값 더하기
def digit_sum(x):
    sum = 0
    while x > 0:
       sum += x%10
       x //= 10
    return sum
'''       

for x in a:
    total = digit_sum(x)
    if total > max:
        max = total
        res = x
print(res) 


