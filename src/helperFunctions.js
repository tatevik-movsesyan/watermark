export const getCurrentComponent = (type,components) => {
    const currentComponentObj = components.find(
      (component) => component.key === type
    );
    if (currentComponentObj) {
      return currentComponentObj.component;
    }
  }; 