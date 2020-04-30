import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1588220560273'); /* IE9 */
  src: url('./iconfont.eot?t=1588220560273#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWUAAsAAAAACvgAAAVHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECgqHdIZQATYCJAMkCxQABCAFhG0HeRt1CREVpMmRfXFgntd0hjGNRUWlE6vOb8k4BUu90kfSfY6H7/f739rn7OtfDJKYVJ+OJ7JJJL7Q0EQJmmgMJdl0L+H/PNvywccr9LIbuIpil+sKdJXOdRoACGMyRljv69Za/nPLwkaYErqyR32U7HKWZ/6H+5kuSgeWz77NJSspkj6PBzSgvOjAO8AAOT9RPBXwbHppgn48gdEW9rBLkfHpICcJqwXiYWV5Ici59DKGGnpVG7JtQryARl/G45fwXP/5+O9EyIGiqSCse/l2RAkE/1KTpKEB6cwtFQOC8qy47kTFISCJt6H2N1DN+CHI+P676S6wQhlSfq2KNcSe4gBxsHi5JEWSJpXyNxNGhRXxnzxQdFIrNKqeaAHyuRPxaaLnl5qMUPilodVB4QmthCIAWi0UwdAKKJYDoeFPCkLlT1qdHgzqNivABhA7AeIdCMpT+qwiFClVWq9uwvRUVOTkNEg+n0ACfAIlbWVlfvupW/5HhJG3bqUv52w4zmL2RK21ImajyEwopLFuxV3X9PHF1z3I2fM1YPZqLeagl2DvTSO05EZ7+mEOcszD0ilM9I1hhTTtzBngUpgjwsd9gNJI89MVqsnMrDmGCou0MwoPkhPBGArHxglXMJZhWH3//tSudTBbT048iWHdQjF963k694ISveySpIzBdc4QipuLMguLaKq4MdwirRxHVSHlyVyTy9yQ83ZOsKU3sEcn2lDrBw4xTLkTw7IK9JxZcH2thJpnrj7Yqgu6mtkL9Mq1mIUb9+62oPZz9rX8PUcMeUuPegl2HzYgFh3qmrAOshHvIZi4EeOxGxRyFCbMYeeS5MTZA7MOPWMLk+3sipIby7HxQ3ixjh01Nank1U5dieltW8lOK2OpHSWPFQdfqxwDZy58Pte5yy6SdS+wPvaRzyhmru2q1Fs2z78x/DmUmfnAqTkEH921axQP7he+FHyY+Ps3D2eHLf8zzjUoTfUh4FhZ1HXr8OulitKiL6wKTKLw0KLKQBHxJ7C55bS3E8YLcay3oSsFuWRcsO/zPKbloo7GH12LTxaGEBwDxJ1txncUSV5QxB27wv/YXeJ0wzvNkmQUcZozDLSiV62KltcxO9srEnXDCf+V6M53dKKuuHNHgk5cSFb6uMjoxleuxLtEyUrThbrQjXOaq29mqK187hzmaOakou3HFP7xlzTgRye6Z2E4NpYIynHaWE3n5aPxO2PuLWzco9+tpU1qjufJY9yylv+oatUZTYjUSIyAxyYnjN+jRej9Nn2lLWk6Ku2qi1TbVU5QXceaa/IHVQ/Kq354MAPBXz/hL3jW1/IZ1qX1WAWiH69HUTCdrZmoN/mweiDTv/jv+HzLxi9fyf+bHEkA/LzWPA3brA8k1BnQK6QW/KEFKfvyIxIMQ77alxsEBscc/HKlo4jib+xe8ZCVG1IXE3obbCg6m6Hq7cIm8RA0Jqeg1TsLo4Oidp6saoJEygMHDBOEJVuhWPAFqiWXsUl8AI2N3kFrKRCMbobaPid7QqcO3hL2BScYdqBG9iSZyoFR+o2i2j45RTrtH1NWIbg6v/SmvtBjKmOD3MR1KQSU2MEnnQytZQiJNY7lXJYSni8uKOyJzkd2swNhCfuCEww7UCN7UkeXA9/3f6Ootk8xTd/s/5iymhyuzi9TYL/kPlXTtlTnJq4LRwnoWswOPtmKVowzhPBFGsdyLnNEw/MFD6O08vP6lW5Zj8FI2P8QqbSxbMf1Aj1TfiNTet5olYPyi5f+1FYOvR9Xjjo958ebA+q9mHqtSHY0X1lno8TRZKnJkqtWsxkA') format('woff2'),
  url('./iconfont.woff?t=1588220560273') format('woff'),
  url('./iconfont.ttf?t=1588220560273') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1588220560273#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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