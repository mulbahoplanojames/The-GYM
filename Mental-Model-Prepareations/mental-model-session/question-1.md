Here are 12 practical, intermediate-to-advanced exercises focused on JavaScript Promise static methods (`Promise.all`, `Promise.allSettled`, `Promise.any`, `Promise.race`) + realistic async/await usage patterns you’ll actually encounter in real applications.

Do them in order — the difficulty gradually increases.

### Level: Solid Intermediate

**Exercise 1 – Parallel image loading with fallback times**  
You have 4 image URLs. Some are fast, some are very slow or even fail occasionally.

```js
const urls = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3", // imagine this one is very slow
  "https://picsum.photos/200/300?random=4",
];
```

Create a function `loadImportantImages()` that:

- Uses `Promise.race` + `Promise.all` combination
- Returns the **three fastest images** (resolved values)
- If any image takes > 2.5 seconds → consider it failed for this race
- If fewer than 3 images succeed within time, return whatever succeeded

**Exercise 2 – API health check dashboard (Promise.all + async/await)**  
You have 6 microservices:

```js
const services = [
  { name: "auth", url: "https://api.example.com/health/auth" },
  { name: "payment", url: "https://api.example.com/health/pay" },
  { name: "profile", url: "https://api.example.com/health/profile" },
  // ... 3 more
];
```

Write `async function getSystemStatus()` that:

- Requests all health endpoints concurrently
- Returns object like:
  ```js
  {
    healthy: ["auth", "profile"],
    degraded: ["payment"],
    failed: ["search", "notify", "analytics"],
    totalTimeMs: 1247
  }
  ```
- If any request takes > 4 seconds → treat as failed
- Handle network errors / non-200 responses as failed

**Exercise 3 – "First valid response" pattern (Promise.any)**  
You have 5 redundant price APIs (some are faster, some have better prices, some are down).

Task: Return **the first API that returns a valid price object** `{ price: number, currency: string }`.

If an API returns invalid format / 404 / timeout(3s) / non-positive price → ignore it.

Use `Promise.any` + `.catch` per promise + timeout wrapper.

### Level: Intermediate → Advanced

**Exercise 4 – Promise.allSettled real-world usage: Bulk user update report**  
You call `PATCH /users/:id` for 30 users.

Write a function that:

- Sends all 30 updates concurrently
- Uses `Promise.allSettled`
- Returns a detailed summary:
  ```js
  {
    successful: 23,
    failed: 7,
    successes: [ {id:12, updatedAt:"..."}, ... ],
    failures: [ {id:45, error:"404 Not Found"}, {id:19, error:"429 Too Many Requests"}, ... ],
    durationMs: 2841
  }
  ```

**Exercise 5 – Timeout race + fallback (Promise.race classic pattern)**  
Create a reusable `promiseWithTimeout(promise, ms, fallbackValue)` helper that:

- Returns the result if resolved within `ms`
- Returns `fallbackValue` if timeout occurs
- **Important**: the original promise should **not** be cancelled (realistic simulation)

Then use it inside:

```js
async function getUserWithStaleCache(userId) {
  // return fresh data or stale cache or offline placeholder
}
```

**Exercise 6 – "Fastest mirror" + validation (Promise.race + Promise.all)**  
You have 4 CDN mirrors of the same large file.

Task:

- Race to find the fastest responding mirror
- Then download ONLY from that mirror (full content)
- But first verify the Content-Length header matches expected value
- If the fastest one gives wrong size → fall back to the second fastest, etc.

Implement this logic.

### Level: Advanced

**Exercise 7 – Promise.any + progressive enhancement fallback chain**  
Implement a font loader that tries multiple sources in this priority order:

1. Self-hosted .woff2
2. Google Fonts (but with 1.8s timeout)
3. jsDelivr fallback
4. System font stack (instant)

Return the first one that loads successfully (use `@font-face` simulation or just promise resolution).

Use `Promise.any` creatively.

**Exercise 8 – "All or timeout" pattern – strict batch job**  
You must process 12 background jobs (image resize, pdf generation, etc.).

Rule: **Either ALL 12 succeed within 45 seconds total, or the whole batch fails.**

Implement using `Promise.all` + `Promise.race` + timeout wrapper.

Return:

- `{ success: true, results: [...] }` or
- `{ success: false, reason: "timeout" | "partial_failure", succeededCount: number }`

**Exercise 9 – Promise.allSettled + dependency retry logic**  
You have 3 critical + 5 non-critical API calls.

Rules:

- If **any critical** call fails → whole operation fails immediately
- Non-critical calls should all be attempted anyway
- For failed non-critical calls → retry each one **once** (max 2 attempts per endpoint)

Use `Promise.allSettled` at least twice in your solution.

**Exercise 10 – Race multiple strategies + take best result**  
Implement a "smart search" function that runs 3 different search strategies in parallel:

- Strategy A: local index (fast, maybe incomplete) → 300ms
- Strategy B: Elasticsearch (good quality, 800–2200ms)
- Strategy C: External API (best quality, but can be 4–12 seconds)

Rules:

- Return the **best quality** result that arrives within 2.5 seconds
- Quality score: C > B > A
- If no good result in 2.5s → return the best available (even if low quality)

Use combination of `Promise.race`, `Promise.allSettled`, and possibly `Promise.any`.

**Bonus harder variations (pick 1–2):**

11. Implement your own simplified `Promise.allSettled` using only `Promise.all` + `.catch`
12. Implement `Promise.first()` — returns the **first fulfilled** promise (like `any` but ignores rejections completely)

Try to solve at least 6–8 of these. They cover most real patterns you’ll see in mid/senior frontend/backend JavaScript roles.

Which one would you like to start with, or would you like a reference solution / hint for a specific exercise?
