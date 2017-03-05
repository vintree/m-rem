# m-rem

m-rem可以帮助你解决移动端适配问题，让你在px -> rem快速切换

页面主入口引入并初始化
```
import Mrem from 'm-rem'

// 在html中设置font-size，根据设备宽度，自动调整font-size的值
Mrem.init(options)

options = {
    // 视觉稿宽度，默认640
    width: '640',
    // 在console中打印当前font-size的值，默认true
    isDebug: true
}
```

