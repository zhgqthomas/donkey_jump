import Component from './Component.js'

export default class DisplayObject extends Component {

  constructor(props) {

  }

  show = () => {
    this.visible = true;
    this.onShow();
  }

  hide = () => {
    this.visible = false;
    this.onHide();
  }

  update = (deltaTime) => {
    if (this.onUpdate) {
      this.onUpdate();
    }
  }

  /**
   * @private
   * 变形处理
   */
  __transform = (context) => {
    context.translate(this.x, this.y);

    // 透明度
    if (this.alpha < 1) {
      context.globalAlpha = this.alpha;
    }

    // 旋转
    if (this.rotation % 360 > 0) {
      var offset = [this.width / 2, this.height / 2];
      context.translate(offset[0], offset[1]);
      context.rotate(this.rotation % 360 / 180 * Math.PI);
      context.translate(-offset[0], -offset[1]);
    }

    // 翻转
    if (this.flipX || this.flipY) {
      context.translate(this.flipX ? this.width : 0, this.flipY ? this.height : 0);
      context.scale(this.flipX ? -1 : 1, this.flipY ? -1 : 1);
    }

    // 缩放
    if (this.scaleX != 1 || this.scaleY != 1) {
      context.scale(this.scaleX, this.scaleY);
    }
  }

  render = (context) => {
    if (!this.visible || this.alpha <= 0) {
      return false;
    }

    // 保存当前画布状态
    context.save();
    // 变形渲染帧
    this.__transform(context);
    this.draw(context);
    // 恢复画布状态
    context.restore();

    this.onRender();
  }

  draw = (context) => {
    this.onDraw();
  }

  destory = () => {
    this.onShow = this.onHide = this.onUpdate = this.onRender = this.onDraw = null;
    super.destory();
  }

  onShow = () => {

  }

  onHide = () => {

  }

  onUpdate = () => {

  }

  onRender = () => {

  }

  onDraw = () => {

  }
}