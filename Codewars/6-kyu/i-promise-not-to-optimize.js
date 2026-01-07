// Note: Completed

function antiOptimizeAsync(task) {
  const start = Date.now();

  // Run the task immediately (may take up to 10 seconds)
  const result = task();

  return new Promise((resolve) => {
    const elapsed = Date.now() - start;
    const remaining = Math.max(11000 - elapsed, 0);

    setTimeout(() => {
      resolve(result);
    }, remaining);
  });
}
