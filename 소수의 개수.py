#에라토스테네스 체
import sys
#sys.stdin=open("input.txt","rt") #파일 입출력을 위한 준비

n = int(input())
ch = [0]*(n+1)
cnt = 0
for i in range(2,n+1):
    if ch[i] == 0:
       cnt += 1
    for j in range(i,n+1,i):
        ch[j] = 1
print(cnt)