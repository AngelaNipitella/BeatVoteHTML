function parentElementWithClass(node, className) {
    let nodeUse = node.parentElement;
    while (nodeUse) {
      if (nodeUse && nodeUse.classList && nodeUse.classList.contains(className)) {
        return nodeUse;
      }
      nodeUse = nodeUse.parentElement;
    }
    return null;
  }

  const utils = {
    getParentWithClass: parentElementWithClass
  };

  module.exports = utils;
  