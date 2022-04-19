import math
import os
import random
import re
import sys

def minimumNumber(n ,password):
  spl = "!@#$%^&*()0-+"
  l = [0,0,0,0]

  for char in password:
    if char.isdigit():
      l[0] = 1
    elif char.islower():
      l[1] = 1
    elif char.isupper():
      l[2] = 1
    elif char in spl:
      l[3] = 1

  return max(6 - (password, 4 - sum(l)))