import numpy as np

def AND(x1, x2):
    x = np.array([x1, x2])
    w = np.array([0.5, 0.5])
    b = -0.7
    temp = np.sum(w*x) + b
    if temp <= 0:
        return 0
    elif temp > 1:
        return 1

print(AND(0, 1))

def NAND(x1, x2):
    x = np.array([x1, x2])
    w = np.array([-0.5, -0.5])
    b = 0.7
    temp = np.sum(w*x) + b
    if temp <= 0:
        return 0
    elif temp > 0:
        return 1
print(NAND(0, 1))

def OR(x1, x2):
    x = np.array([x1, x2])
    w = np.array([1, 1])
    b = 1
    temp = np.sum(w*x) + b
    if temp <= 0:
        return 0
    elif temp > 0:
        return 1
print(OR(0, 1))
print(OR(0, 0))
print(OR(1, 1))

