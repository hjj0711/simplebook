
import { createGlobalStyle } from 'styled-components'

const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1555056750707'); /* IE9 */
  src: url('iconfont.eot?t=1555056750707#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1555056750707') format('woff'),
  url('iconfont.ttf?t=1555056750707') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1555056750707#iconfont') format('svg'); /* iOS 4.1- */
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
