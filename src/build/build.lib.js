const files = require.context(`../components`, true, /^(?!.*Sample).*\.vue$/);

let components = {};
Object.values(files.keys()).forEach((key) => {
  const component = files(key).default;
  const name =
    component.name ||
    component
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");
  components[name] = component;
});

components.install = (Vue) => {
  Object.keys(components).forEach((name) =>
    Vue.component(name, components[name])
  );
};

export default components;
