import numpy as np
import matplotlib.pyplot as plt

# prepare data
x = np.arange(0, 6, 0.1) # make array between 0 to 6 which interval is 0.1
y1 = np.sin(x)
y2 = np.cos(x)

# make chart
#  plt.plot(x, y)
#  plt.show()

plt.plot(x, y1, label="sin")
plt.plot(x, y2, linestyle="--", label="cos")
plt.xlabel("x") # name of x axis
plt.ylabel("y") # name of y axis
plt.title('sin & cos')
plt.legend() # what is this?
plt.show()

