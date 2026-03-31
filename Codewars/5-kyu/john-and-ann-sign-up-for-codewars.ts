// function buildSequences(n: number) {
//   const ann: number[] = new Array(n);
//   const john: number[] = new Array(n);

//   ann[0] = 1;
//   john[0] = 0;

//   for (let i = 1; i < n; i++) {
//     john[i] = i - ann[john[i - 1]];
//     ann[i] = i - john[ann[i - 1]];
//   }

//   return { ann, john };
// }

// export function john(n: number): number[] {
//   if (n === 0) return [];
//   return buildSequences(n).john;
// }

// export function ann(n: number): number[] {
//   if (n === 0) return [];
//   return buildSequences(n).ann;
// }

// export function sumJohn(n: number): number {
//   if (n === 0) return 0;

//   const { john } = buildSequences(n);

//   return john.reduce((sum, val) => sum + val, 0);
// }

// export function sumAnn(n: number): number {
//   if (n === 0) return 0;

//   const { ann } = buildSequences(n);

//   return ann.reduce((sum, val) => sum + val, 0);
// }

// Cache method

let annCache: number[] = [1];
let johnCache: number[] = [0];

function ensureSize(n: number) {
  for (let i = annCache.length; i < n; i++) {
    johnCache[i] = i - annCache[johnCache[i - 1]];
    annCache[i] = i - johnCache[annCache[i - 1]];
  }
}

export function john(n: number): number[] {
  ensureSize(n);
  return johnCache.slice(0, n);
}

export function ann(n: number): number[] {
  ensureSize(n);
  return annCache.slice(0, n);
}

export function sumJohn(n: number): number {
  ensureSize(n);
  return johnCache.slice(0, n).reduce((a, b) => a + b, 0);
}

export function sumAnn(n: number): number {
  ensureSize(n);
  return annCache.slice(0, n).reduce((a, b) => a + b, 0);
}
