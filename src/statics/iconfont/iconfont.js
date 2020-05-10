import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1588327491146'); /* IE9 */
  src: url('iconfont.eot?t=1588327491146#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1588327491146') format('woff'),
  url('iconfont.ttf?t=1588327491146') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1588327491146#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconxiangshang:before {
  content: "\e600";
}

.iconxin:before {
  content: "\e640";
}

.iconxiaoxi:before {
  content: "\e613";
}

.iconspin:before {
  content: "\e851";
}

.iconAa:before {
  content: "\e636";
}

.iconluopancompass83:before {
  content: "\e6a1";
}

.iconfangdajing:before {
  content: "\e63d";
}

.iconicon-checkin:before {
  content: "\e615";
}

.iconshouji:before {
  content: "\e853";
}
`