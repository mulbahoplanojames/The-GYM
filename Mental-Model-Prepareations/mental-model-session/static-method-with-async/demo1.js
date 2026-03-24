/** 
 **Exercise 1 – Parallel image loading with fallback times**  
You have 4 image URLs. Some are fast, some are very slow or even fail occasionally.

```js
const urls = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",  
   // imagine this one is very slow
  "https://picsum.photos/200/300?random=4"
];
```

Create a function `loadImportantImages()` that:

- Uses `Promise.race` + `Promise.all` combination
- Returns the **three fastest images** (resolved values)
- If any image takes > 2.5 seconds → consider it failed for this race
- If fewer than 3 images succeed within time, return whatever succeeded

*/

const urls = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
];

async function loadImportantImages() {
  const timeout = 2500;

  const results = await Promise.all(
    urls.map((url) =>
      Promise.race([
        fetch(url, { mode: "cors" })
          .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.blob();
          })
          .then((blob) => URL.createObjectURL(blob))
          .catch((error) => {
            console.log(`Failed to load ${url}:`, error.message);
            throw error;
          }),
        new Promise((_, reject) => setTimeout(() => reject(), timeout)),
      ])
        .then((img) => ({ success: true, img }))
        .catch(() => ({ success: false })),
    ),
  );

  return results
    .filter((response) => response.success)
    .map((response) => response.img)
    .slice(0, 3);
}

loadImportantImages().then((images) => {
  console.log("Loaded images:", images.length);
  console.log(images);
});
