// Note: Completed

function promisify(callbackCaller) {
  let resolveCurrent;

  // Create the first promise
  let currentPromise = new Promise((resolve) => {
    resolveCurrent = resolve;
  });

  // Call callbackCaller ONCE
  callbackCaller((data) => {
    // Create the next promise
    let nextResolve;
    const nextPromise = new Promise((resolve) => {
      nextResolve = resolve;
    });

    // Resolve the current promise with data + next promise
    resolveCurrent([data, nextPromise]);

    // Move forward
    resolveCurrent = nextResolve;
  });

  return currentPromise;
}
