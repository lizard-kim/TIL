def solution(board, moves):
    result = 0
    basket = []

    for move in moves:
        for row in board:
            if(row[move-1] != 0):
                doll = row[move-1]
                basket.append(doll)
                row[move-1] = 0
                if(len(basket) > 1 and basket[len(basket)-2] == doll):
                    result += 2
                    basket.pop()
                    basket.pop()
                break
    return result
