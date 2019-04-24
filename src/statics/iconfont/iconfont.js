
import { createGlobalStyle } from 'styled-components'

const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1556090303485'); /* IE9 */
  src: url('./iconfont.eot?t=1556090303485#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1556090303485') format('woff'),
  url('./iconfont.ttf?t=1556090303485') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1556090303485#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfangdajing1:before {
  content: "\e60d";
}

.iconqianbipencil84:before {
  content: "\e6a5";
}

.iconAa:before {
  content: "\e636";
}

.iconfangdajing:before {
  content: "\e6fb";
}

.iconzidongqianbi:before {
  content: "\e638";
}



`
export default IconStyle
