import sys
#sys.stdin=open("input.txt","rt") #파일 입출력을 위한 준비

n,k = map(int, input().split())
a = list(map(int, input().split()))
res = set()

for i in range(n):
    for j in range(i+1,n):
        for m in range(j+1,n):
            res.add(a[i]+a[j]+a[m])
res=list(res)
res.sort(reverse=True)

print(res[k-1])