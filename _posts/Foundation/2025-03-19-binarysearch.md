---
toc: false
comments: false
layout: post
title: Binary Search Team Teach
description: A lesson on Binary Search
type: tangibles
courses: { compsci: {week: 25} }
---

# Binary Search Algorithm
Binary search is an efficient searching algorithm used to find an element in a **sorted** list. It works by repeatedly dividing the search space in half until the target element is found or the search space is empty.
## **How Binary Search Works**
1. Find the **middle element** of the list.
2. If the middle element is the target, return its index.
3. If the target is **less** than the middle element, search in the **left half**.
4. If the target is **greater** than the middle element, search in the **right half**.
5. Repeat steps 1–4 until the element is found or the search space becomes empty.



## Binary vs Linear Search
The time complexity of binary search depends on how many steps it takes to find the target.
### Best Case: \(O(1)\)
- If the middle element is the target, we find it in **one step**.
- This is the fastest possible outcome.
### **Worst & Average Case: (O(log n))**
- Each time we check the middle element, we **cut the remaining search space in half**.
- If we start with \( n \) elements, the number of times we can halve it before only one element remains is about **(log base2 n)**.
- This means that even for a **huge list**, we only need a few steps.
### **Why Is This Fast?**



| **Number of Elements (n)** | **Maximum Steps (log₂ n)** |
|----------------------------|---------------------------|
| 8                          | 3                         |
| 16                         | 4                         |
| 32                         | 5                         |
| 1,024                      | 10                        |
| 1,048,576 (1 million)      | 20                        |

- Even with **1 million elements**, we only need **20 steps** to find the target.
- Compare this to a **linear search** \(O(n)\), which may take up to 1 million steps!
Binary search is fast because it **eliminates half of the data** at each step, making it much better than checking each element one by one.


# Binary Search Algorithm with Recursive implementation

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2  # Find middle index
        print(f"Searching between indices {left} and {right}, middle index is {mid}, value at mid is {arr[mid]}")
        if arr[mid] == target:
            return mid, arr[mid]  # Return index and the value at mid
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    return -1, None  # Element not found

# Example usage:
arr = [1, 3, 5, 7, 9, 11, 13]
target = 3
index, value = binary_search(arr, target)
print(f"Target found at index {index}, value is {value}")  # Output: index and value of 3
```

### **Code Breakdown**

#### **Initial Setup**:
- `left = 0, right = len(arr) - 1`: Defines the search range (entire array initially).

#### **While Loop** (while left <= right):
- Repeats as long as the search range is valid.

#### **Middle Element Calculation**:
- `mid = (left + right) // 2`: Finds the middle index of the current range.

#### **Search Process**:
- **If** `arr[mid] == target`: Target found, return the index and value.
- **If** `arr[mid] < target`: Search the right half by updating `left` to `mid + 1`.
- **If** `arr[mid] > target`: Search the left half by updating `right` to `mid - 1`.

#### **Return**:
- If the target is not found, return `-1` and `None`.

### **Example Walkthrough** (For arr = [1, 3, 5, 7, 9, 11, 13] and target = 3):

1. **First round**:
   - Searching between indices 0 and 6. Middle index is 3, value is `7`.
   - Since `7 > 3`, search left half (indices 0 to 2).
2. **Second round**:
   - Searching between indices 0 and 2. Middle index is 1, value is `3`.
   - Target found at index 1.
### **Key Points**:
- Binary Search divides the search range by half in each iteration, making it efficient (**O(log n)** time complexity).
- The process is repeated until the target is found or the search range becomes invalid.

#### Sequencing
This is a multi-step algorithm, that proceeds with an order of steps which must be completed in order to work, hence there is sequencing.

#### Selection
```python
if arr[mid] == target:
    return mid, arr[mid]  # Return index and the value at mid
elif arr[mid] < target:
    left = mid + 1  # Search right half
else:
    right = mid - 1  # Search left half
```

This part of the function uses a condition ```if```, ```elif```, and ```else```. In order to check whether the desired value is in which part of the array.


#### Iteration
```python
while left <= right:
        mid = (left + right) // 2  # Find middle index
        print(f"Searching between indices {left} and {right}, middle index is {mid}, value at mid is {arr[mid]}")
        if arr[mid] == target:
            return mid, arr[mid]  # Return index and the value at mid
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
```

The while loop above, iterates until the ```right``` value is less than the ```left``` value.

# Binary Search vs. Linear Search

Both **binary search** and **linear search** are algorithms used to find an element in a collection of data. However, they differ significantly in their approach, time complexity, and efficiency.

## 1. **Linear Search**
- **How it works**: 
  - Linear search checks each element in the list one by one, from the beginning to the end, until it finds the target element or reaches the end of the list.
  
- **Best Case**: 
  - If the element is found at the very first position, the search takes **O(1)** time.

- **Worst Case**: 
  - If the element is at the last position or not in the list at all, the search takes **O(n)** time, where **n** is the number of elements in the list.

- **Efficiency**: 
  - Linear search is simple but not very efficient, especially when dealing with large datasets because it may have to check every element.

## 2. **Binary Search**
- **How it works**: 
  - Binary search works only on **sorted** arrays or lists. It repeatedly divides the search interval in half. 
  - If the value of the target element is less than the element in the middle of the interval, the search continues in the left half; otherwise, it continues in the right half. 
  - This process continues until the element is found or the interval is empty.
  
- **Best Case**: 
  - If the middle element is the target, it takes **O(1)** time.
  
- **Worst Case**: 
  - In the worst case, binary search cuts the search space in half each time, so it takes **O(log n)** time, where **n** is the number of elements in the list.
  
- **Efficiency**: 
  - Binary search is much more efficient than linear search when dealing with large datasets, especially because it reduces the search space exponentially.

---

## Big O Notation

Big O notation is used to describe the **time complexity** of an algorithm, which tells us how the running time of the algorithm increases as the size of the input increases. It provides an upper bound on the growth rate of an algorithm's execution time.

### **O(log n)**
- **Definition**: 
  - The term **O(log n)** means that the algorithm's execution time grows logarithmically as the input size increases. Specifically, the time to run the algorithm increases by a constant amount for each doubling of the input size.
  
- **Example in Binary Search**: 
  - In binary search, every time you divide the search space in half, you're reducing the number of elements you need to check. For a list of size **n**, it takes roughly **log₂ n** steps to find the element (or determine it's not there).
  
- **How efficient is O(log n)?**: 
  - An algorithm with **O(log n)** complexity is **very efficient**, especially when compared to **O(n)** (linear search) or even **O(n²)** (for example, bubble sort). For large datasets, algorithms with logarithmic time complexity are much faster.

---

## Efficiency Comparison

- **Linear Search**: O(n)  
  If the list has **n** elements, linear search may check each element one by one, so the running time increases linearly with the size of the input.

- **Binary Search**: O(log n)  
  Binary search, on the other hand, divides the problem in half with each step. So, even for a list of 1 million elements, it only takes around **log₂(1,000,000)** ≈ **20 steps** to find an element (assuming it's sorted). This is extremely efficient, especially when compared to linear search.

### Efficiency Example:
- **For n = 1,000**:
  - **Linear Search**: Might need to check all 1000 elements, so **O(n) = 1000** comparisons.
  - **Binary Search**: Would only need **log₂(1000) ≈ 10** comparisons.
  
- **For n = 1,000,000**:
  - **Linear Search**: Might need to check all 1 million elements, so **O(n) = 1,000,000** comparisons.
  - **Binary Search**: Would only need **log₂(1,000,000) ≈ 20** comparisons.

### Summary of Comparison:
- **Linear Search**: Simple, but slow for large lists. O(n) time complexity.
- **Binary Search**: Requires sorted data, but it's much faster for large lists. O(log n) time complexity.

In conclusion, binary search is vastly more efficient than linear search for large datasets, especially when sorting is already done or can be done once.

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

# Homework Problems:

## Homework Hack 1: Binary Search on a Rotated Array
Description:
You are given a sorted array that has been rotated at some unknown pivot. Write a function that uses Binary Search to find a target element in this rotated array. If the element is found, return its index. If not, return -1.

#### Example:
Input:

``` python
arr = [4, 5, 6, 7, 0, 1, 2]
target = 1
Output:
```
``` python
5
```

## Homework Hack 2: Find the First and Last Occurrence of an Element
Description:
Write a function that uses binary search to find the first and last occurrence(find the index of the ) of a given target element in a sorted array. If the element is not present, return -1. U


#### Example:
Input:

``` python

arr = [1, 2, 2, 2, 3, 4, 5]
target = 2
```
Output:
``` python
(1, 3)
```

## Homework Hack 3: Search for the Smallest Element
Description:
You are given a sorted array of integers. Write a function that uses Binary Search to find the smallest element that is greater than or equal to the target. If that an element doesnt exist, return -1.

#### Example:
Input:
``` python
Copy
arr = [1, 3, 5, 7, 9, 11]
target = 8
```

Output:

``` python

9
```