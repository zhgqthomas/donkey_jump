
export default class Component {

  constructor(initialized = false, parent = null) {
    this.initialized = initialized;
    this.parent = parent;
  }

  init = () => {
    this.initialized = true;
    this.onInit();
  }

  destory = () => {
    if (this.parent) {
      this.parent.removeChild(this);
      this.parent = null;
    }

    this.onDestory();
    this.onInit = this.OnDestory = null;
  }

  onInit = () => {

  }

  onDestory = () => {
    
  }
}