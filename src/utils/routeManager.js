const historyManager = {
  push: (param, link, title) => {
    title = title ? title : link;
    history.pushState(param, title, link);
  },
  replace: (param, link, title) => {
    title = title ? title : link;
    history.replaceState(param, title, link);
  },
  back: () => {
    history.back();
  },
  forward: () => {
    history.forward();
  },
};

export default historyManager;
