export default function loadModules(scope, modules) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    if (!container) return [];
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const moduleArr = [];
    for await (let factory of modules.map((module) =>
      window[scope].get(module)
    )) {
      moduleArr.push(factory());
    }
    return moduleArr;
  };
}

export function loadModule(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else

    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);

    const Module = factory();
    return Module;
  };
}
