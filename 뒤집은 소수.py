import sys
#sys.stdin=open("input.txt","rt") #파일 입출력을 위한 준비

res = 0
def reverse(x):
    res = 0
    while x > 0:
        t = x % 10
        res = res*10+t
        x //= 10
    return res
def isPrime(x):
    if x == 1:#소수일 수 없으니..! (놓치기 쉬운 내용)
        return False 
    for i in range(2, x//2+1): # x//2로 하는 이유는 예를들어 16의 약수중 가장 큰건 8(16/2)이므로  (놓치기 쉬운 내용)
        if x % i == 0:
            return False
    else:
        return True

n = int(input())
a = list(map(int, input().split()))
 
for i in a:
    rev = reverse(i)
    if isPrime(rev):
        print(rev, end=' ')
