import sys
from collections import deque

def input(): return sys.stdin.readline().rstrip() #빠른 연산을 돕는다.

try:
    while True :
        num = input()
        now = "1"*len(num)
        while int(now) % int(num):
            now += "1"
        print(len(now))
except:
    pass