def solution(answers):
    student1 = [1,2,3,4,5]
    student2 = [2,1,2,3,2,4,2,5]
    student3 = [3,3,1,1,2,2,4,4,5,5]
    score1 = 0
    score2 = 0
    score3 = 0
    answer = []
    
    for i in range(len(answers)):
        if(answers[i] == student1[i%5]):
            score1 += 1
        if(answers[i] == student2[i%8]):
            score2 += 1
        if(answers[i] == student3[i%10]):
            score3 += 1
    result = [score1, score2, score3]
    max_result = max(result)
    for i in range(len(result)):
        if(result[i] == max_result):
            answer.append(i+1)
    
    return answer
