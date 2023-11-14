function loadCSS(filename) {
  var link = document.createElement("link");
  link.href = filename;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
loadCSS("./style.css");

function createE(type, attrs, innerHTML) {
  let temp = document.createElement("div");

  attrs.forEach((attrObj) => {
    Object.keys(attrObj).forEach((key) => {
      temp.setAttribute(key, attrObj[key]);
    });
  });

  temp.innerHTML = innerHTML;
  return temp;
}

function bind(a, b) {
  a.appendChild(b);
}

bind(document.body, createE("div", [], "hi"));
