function findAllJavascriptFiles(root, callback) {
  const result = [];
  let pending = 0;

  function walk(folder) {
    pending++;

    folder.size((len) => {
      if (len === 0) return done();

      let remaining = len;

      for (let i = 0; i < len; i++) {
        folder.read(i, (item) => {
          if (typeof item === "string") {
            if (item.endsWith(".js")) result.push(item);
          } else {
            walk(item);
          }

          if (--remaining === 0) {
            done();
          }
        });
      }
    });
  }

  function done() {
    if (--pending === 0) {
      callback(result);
    }
  }

  walk(root);
}

function Folder(items) {
  return {
    size(cb) {
      setTimeout(() => cb(items.length), Math.random() * 20);
    },
    read(index, cb) {
      setTimeout(() => cb(items[index]), Math.random() * 20);
    },
  };
}

const flat = Folder(["a.js", "b.txt", "c.js", "d.html"]);
const nested = Folder([
  "1.js",
  Folder(["2.txt", Folder(["3.js", "4.md"]), "5.js"]),
  "6.html",
]);
const empty = Folder([]);
function randomFS(depth = 3, width = 3) {
  if (depth === 0) {
    return Math.random() > 0.5 ? "x.js" : "y.txt";
  }

  const items = [];
  for (let i = 0; i < width; i++) {
    items.push(
      Math.random() > 0.5
        ? randomFS(depth - 1, width)
        : Math.random().toString(36).slice(2, 6) + ".js",
    );
  }

  return Folder(items);
}

const randomRoot = randomFS(4, 4);

findAllJavascriptFiles(nested, (files) => {
  console.log("Nested:", files);
});

findAllJavascriptFiles(flat, (files) => {
  console.log("Flat:", files);
});

findAllJavascriptFiles(empty, (files) => {
  console.log("Empty:", files);
});

findAllJavascriptFiles(randomRoot, (files) => {
  console.log("Random:", files);
});
