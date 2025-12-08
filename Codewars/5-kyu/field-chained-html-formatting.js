const Format = (() => {
  const tags = ["div", "p", "span", "h1"];

  const createWrapper = (currentTags = []) => {
    const wrapper = (...content) => {
      const inner = content.join("");
      return currentTags.reduceRight(
        (acc, tag) => `<${tag}>${acc}</${tag}>`,
        inner,
      );
    };

    return new Proxy(wrapper, {
      get(target, prop) {
        if (tags.includes(prop)) {
          return createWrapper([...currentTags, prop]);
        }
        return target[prop];
      },
    });
  };

  return createWrapper();
})();

console.log(Format.div("foo"));
console.log(Format.div.h1("FooBar"));

const wrapInDivH1 = Format.div.h1;
console.log(wrapInDivH1("Far"));
console.log(wrapInDivH1.span("Bar"));

console.log(
  Format.div(
    Format.h1("Title"),
    Format.p(`Paragraph with a ${Format.span("span")}.`),
  ),
);
