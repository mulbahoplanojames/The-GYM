/**
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
 */

const services = [
  { name: "auth", url: "https://api.example.com/health/auth" },
  { name: "payment", url: "https://api.example.com/health/pay" },
  { name: "profile", url: "https://api.example.com/health/profile" },
];

const getSystemStatus = async () => {
  const timeout = 4000;

  const results = await Promise.all(
    services.map((service) =>
      Promise.race([
        fetch(service.url)
          .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
          })
          .then((data) => ({ success: true, data }))
          .catch((error) => {
            console.log(`Failed to load ${service.name}:`, error.message);
            throw error;
          }),
        new Promise((_, reject) => setTimeout(() => reject(), timeout)),
      ])
        .then((response) => ({ success: true, response }))
        .catch(() => ({ success: false })),
    ),
  );

  return results
    .filter((response) => response.success)
    .map((response) => response.response)
    .slice(0, 3);
};

console.log(getSystemStatus());
