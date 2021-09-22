import sys
#sys.stdin=open("input.txt","rt") #파일 입출력을 위한 준비
T = int(input())
for t in range(T):
    n,s,e,k=map(int, input().split())
    a= list(map(int, input().split()))
    a = a[s-1:e]
    a.sort()
    print("#%d %d" %(t+1, a[k-1]))