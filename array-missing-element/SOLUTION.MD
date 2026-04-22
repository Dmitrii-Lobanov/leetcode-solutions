You’re supposed to have all numbers from **1 up to N+1**, but one number is missing.

### Step-by-step idea

1. **Figure out what the total *should* be**

   * If nothing were missing, the numbers would be:

     ```
     1 + 2 + 3 + ... + (N + 1)
     ```
   * There’s a quick formula to get this total without looping:

     ```
     expectedSum = (N + 1) × (N + 2) / 2
     ```

2. **Add up what you actually have**

   * Go through the array and sum all the numbers:

     ```
     actualSum
     ```

3. **The difference is the missing number**

   * Since one number is missing:

     ```
     missing = expectedSum - actualSum
     ```

---

### Simple example

Array:

```
[2, 3, 1, 5]
```

* N = 4 → numbers should be `1..5`
* Expected sum = `1 + 2 + 3 + 4 + 5 = 15`
* Actual sum = `2 + 3 + 1 + 5 = 11`
* Missing = `15 - 11 = 4`

---

### Intuition

You’re basically saying:

> “I know what the total *should* be if nothing was missing.
> I know what I actually have.
> The gap between those two totals is the missing number.”

---

### Why it’s efficient

* You only loop through the array once → fast (`O(N)`)
* You don’t need extra memory → efficient (`O(1)`)
