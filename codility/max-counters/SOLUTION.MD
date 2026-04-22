## 🧠 What the function does

```ts
export const maxCounters = (N: number, A: number[])
```

This function:

- creates **N counters (all starting at 0)**
- processes each operation in array `A`
- returns the **final state of all counters**

---

## 🔧 Step 1: Create counters

```ts
const counters = new Array(N).fill(0);
```

👉 Make an array like:

```
[0, 0, 0, ..., 0]  (N times)
```

---

## 🔧 Step 2: Track two important values

```ts
let currentMax = 0;
let base = 0;
```

### These are the key to efficiency:

- **`currentMax`**
  → the highest value any counter has reached so far

- **`base`**
  → the minimum value every counter should have after the last `"max counter"` operation

---

## 🔁 Step 3: Loop through operations

```ts
for (const operation of A)
```

We process each instruction one by one.

---

## 📌 Case 1: Increase a counter

```ts
if (operation <= N)
```

This means:

> “Increase counter number `operation`”

---

### Step 3.1: Find the index

```ts
const index = operation - 1;
```

(we subtract 1 because arrays are 0-based)

---

### Step 3.2: Fix stale counters

```ts
if (counters[index] < base) {
  counters[index] = base;
}
```

👉 This is the **lazy update trick**

It means:

> “If this counter hasn’t been updated since the last max operation, bring it up to date first.”

---

### Step 3.3: Increase it

```ts
counters[index]++;
```

---

### Step 3.4: Update max

```ts
currentMax = Math.max(currentMax, counters[index]);
```

👉 Keep track of the highest counter value

---

## 📌 Case 2: Max counter operation

```ts
else {
  base = currentMax;
}
```

This means:

> “All counters should now be equal to the maximum value”

BUT instead of updating all counters (slow ❌), we do:

👉 Just remember it in `base`

---

## 🔁 Step 4: Final cleanup

```ts
for (let i = 0; i < N; i++) {
  if (counters[i] < base) {
    counters[i] = base;
  }
}
```

👉 Some counters were never touched after the last max operation.

So we fix them now:

> “If a counter is below `base`, bring it up.”

---

## 📦 Step 5: Return result

```ts
return counters;
```

---

# 💡 Big idea (the whole function in one sentence)

Instead of updating all counters every time we see a “max counter”, we:

- **delay the update using `base`**
- **only fix counters when we actually need them**

---

# ⚡ Why this is efficient

- Each operation is handled in **constant time**
- Final cleanup is **O(N)**

👉 Total complexity:

```
O(N + M)
```

---

# 🧠 Mental model

Think of `base` as:

> “A floor level that all counters must reach eventually.”

Counters below it are just **temporarily outdated**, not actually wrong.
