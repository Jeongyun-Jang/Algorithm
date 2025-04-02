#핵심: float('inf')는 가장 큰 값
#방법1)
arr = [5,3,7,9,2,5,2,6]
arrMin = float('inf')
for i in range(len(arr)):
    if arr[i]<arrMin:
        arrMin=arr[i]
print(arrMin)
#방법2)
arr = [5,3,7,9,2,5,2,6]
arrMin = float('inf')
for x in arr:
    if x < arrMin:
        arrMin = x
print(arrMin)