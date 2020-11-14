def solution(numbers):
    answer = []
    result = []
    numbers.sort()
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if(i==j): continue
            result.append(numbers[i]+numbers[j])
    for num in result:
        if(num in answer): continue
        answer.append(num)
    answer.sort()
    return answer

