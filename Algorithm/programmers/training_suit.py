def solution(n, lost, reserve):
    for student in lost.copy():
        if(student in reserve):
            reserve.remove(student)
            lost.remove(student)
    
    for student in lost.copy():
        if((student-1) in reserve):
            lost.remove(student)
            reserve.remove(student-1)
        elif(student+1 in reserve):
            lost.remove(student)
            reserve.remove(student+1)
    answer = n - len(lost)
    return answer

