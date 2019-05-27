import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DownLoadApp, Advertising } from '../style.js'


class Writer extends PureComponent {
  render () {
    const { appUrl } = this.props
    return (
      <div>
        <DownLoadApp>
          {console.log(appUrl)}
          <img className="appImg" alt="app下载二维码" src={appUrl} />
          <p>下载简书手机App &nbsp; &gt; </p>
          <p>随时随地发现和创作内容</p>
        </DownLoadApp>
        <Advertising imgUrl="https://oimageb2.ydstatic.com/image?id=6887620750791615464&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60" />
      </div>
    )
  }
}
const mapState = state => ({
  appUrl: state.getIn(['Home', 'appUrl']),
})
export default connect(mapState, null)(Writer)
