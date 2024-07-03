function customRender(reactElement, Container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.childeren;
  //   domElement.setAttribute("href", reactElement.props.href);

  //   domElement.setAttribute("target", reactElement.props.target);
  //   Container.append(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  Container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    terget: "_blank",
  },
  children: "click me to visit",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
