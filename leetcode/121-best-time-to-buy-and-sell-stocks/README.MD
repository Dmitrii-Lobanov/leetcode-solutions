## 🧠 Explanation

The goal is to **buy low and sell high once**.

### Key idea:

Instead of checking all pairs (which is slow), we **track the minimum price seen so far** and calculate the best profit at each step.

---

### 🔄 Step-by-step logic

1. Start with:

   * `minPrice = Infinity` (lowest price seen so far)
   * `maxProfit = 0` (best profit found)

2. Loop through each price:

   * If current price is lower than `minPrice` → update `minPrice`
   * Otherwise:

     * Calculate profit: `currentPrice - minPrice`
     * Update `maxProfit` if this profit is higher

---

### 📌 Example

Input:

```js
[7, 1, 5, 3, 6, 4]
```

Walkthrough:

* Day 1: price = 7 → min = 7
* Day 2: price = 1 → min = 1
* Day 3: price = 5 → profit = 4
* Day 4: price = 3 → profit = 2
* Day 5: price = 6 → profit = 5 ✅ (best)
* Day 6: price = 4 → profit = 3

Output:

```js
5
```

---

## ⏱ Time & Space Complexity

* **Time:** O(n) → single pass
* **Space:** O(1) → no extra data structures
