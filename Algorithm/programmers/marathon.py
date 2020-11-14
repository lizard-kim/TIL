def find_name(table_p, table_c):
    print(table_p)
    print(table_c)
    if(len(table_c) == 1):
        table_p.remove(table_c[0])
        return table_p[0]
    elif(len(table_c) == 0):
        return table_p[0]
    else:
        if table_p[int(len(table_c)/2)] != table_c[int(len(table_c)/2)]:
            if(table_p[int(len(table_c)/2)-1] != table_c[int(len(table_c)/2)-1]):
                return find_name(table_p[:int(len(table_c)/2)], table_c[:int(len(table_c)/2)])
            else:
                return table_p[int(len(table_c)/2)]
        else:
            return find_name(table_p[int(len(table_c)/2):], table_c[int(len(table_c)/2):])
        
def solution(participant, completion):
    participant.sort()
    completion.sort()
    print(participant)
    print(completion)
    for i in range(len(completion)):
        print(i)
        if(participant[i] != completion[i]):
            return participant[i]
        elif i == len(completion):
            return participant[-1]
    #  return find_name(participant, completion)
print(solution(["zzzzz", "zzz", "z", "zzz", "zzzz"], ["zzzz", "zzz", "zz", "z"]))

