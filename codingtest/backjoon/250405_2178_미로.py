from collections import deque
n,m = map(int, input().split())
graph = []

for i in range(n):
    graph.append(list(map(int,input())))

def bfs(x,y):
    queue = deque()
    queue.append((x,y))

    dx = [-1,1,0,0]
    dy = [0,0,-1,1]

    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if 0 > nx or nx >= n or 0 > ny or ny >= m:
                continue
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
    return graph[n-1][m-1]
                
print(bfs(0,0))

