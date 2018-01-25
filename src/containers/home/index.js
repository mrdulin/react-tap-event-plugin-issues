import React from "react";
import PT from 'prop-types';

class Home extends React.PureComponent {

  constructor() {
    super();
    this.onTouchTap = this.onTouchTap.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * 这个例子需要在ios设备上测试，只有ios的webview中有click事件会有300ms延迟
   * 
   * 点击时间短，没有300ms延迟，一切正常
   * tap in short time, this event will not trigger 300ms delay, everything is fine.
   * 点击时间长一点，会触发ghost click
   * tap in a bit long time, this event will trigger ghost click.
   * 
   * 现象是：导航到topics路由，ghost click会点击第一个topic
   * It will navigate "topics" route, and the ghost click will click the first topic
   * 
   * 加如下代码依旧无效：
   * It's not working even if I add these code: 
   * ```js
   * injectTapEventPlugin({
   *   shouldRejectClick: function () {
   *     return true;
   *   }
   * });
   * ```
   */
  onTouchTap() {
    this.props.history.push('/topics');
  }

  /**
   * 不会触发ghost click, 有300ms延迟
   * click event will not trigger ghost click, but it has 300 ms delay.
   */
  onClick() {
    this.props.history.push('/topics');
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onTouchTap={this.onTouchTap}>跳转到列表页tap</button> - <button onClick={this.onClick}>跳转到列表页click</button>
      </div>
    )
  }
}

Home.propTypes = {
  history: PT.object
};

export default Home;
