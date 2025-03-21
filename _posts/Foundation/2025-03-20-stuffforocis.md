---
toc: false
comments: false
layout: post
title: Binary Search Team Teach
description: My work on the binary search team teach for OCIS.
type: tangibles
courses: { compsci: {week: 25} }
---

# Real World Examples of Binary Search
## Example 1: Phone Book
 -   If you’re looking for Smith in a phone book, you wouldn’t start from "A" and scan each page, right? That just sounds dumb and silly!
        Instead, you...
        1.  Open to the middle
        2.  Check the name, if it's before Smith, search the right half, and if its after, search the left half
        3.  Repeat until found
    -   This is binary search, becayse you are cutting the search space by half at each step.

## Example 2: Dictionary
 -   Looking for Cat? Flip to the middle of the dictionary
 -   If you see Dog, move left
 -   If you see Ant, move right
 -   Continue until you find Cat

Again, this is also an example of Binary Search because you are splitting the list by half until you find what you want.

But how does this work computationally?

# A Computational Comparison

Lets first see how much faster binary search is in a real world example.

```python
import time
import random

numbers = list(range(1, 1000000))

target = random.choice(numbers)

# Linear Search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Measure time for Linear Search
start_time = time.time()
linear_search(numbers, target)
linear_time = time.time() - start_time

# Measure time for Binary Search
start_time = time.time()
binary_search(numbers, target)
binary_time = time.time() - start_time

print(f"Linear Search Time: {linear_time:.6f} seconds")
print(f"Binary Search Time: {binary_time:.6f} seconds")
print(f"Speedup Factor: {linear_time / binary_time:.2f}x faster")
```

### Output:
 - Linear Search Time: 0.015503 seconds
 - Binary Search Time: 0.000032 seconds
 - Speedup Factor: 488.90x faster

While this may not seem like a large factor, as the lists get larger and larger (1,000,000 is actually quite small for data), binary search becomes more and more important.

## Let's see this in a tabulated format now

### **Comparison: Binary Search vs. Linear Search**

| **Search Type** | **Best Case** | **Average Case** | **Worst Case** |
|---------------|--------------|--------------|--------------|
| **Linear Search** | \(O(1)\) (first element) | \(O(n)\) | \(O(n)\) (last element) |
| **Binary Search** | \(O(1)\) (middle element) | \(O(\log n)\) | \(O(\log n)\) |

In an example with 1,000,000 numbers, with linear search, the worst case would be 1,000,000 steps.

However, with Binary Search, this goes down to log base 2 of 1,000,000, which is around 20 steps. This means binary search is around 50,000x faster.

### **Practice: Binary Search Popcorn Hacks (Multiple Choice)**
[![Button](https://img.shields.io/badge/Click%20Me-blue?style=for-the-badge)](https://forms.gle/558eBq5xyHdZkLMk9)
