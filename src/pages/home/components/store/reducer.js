import { fromJS } from 'immutable'
// fromJS把里面的对象改为immuitable对象
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgurl: 'https://oimageb4.ydstatic.com/image?id=2536164669177268021&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60',
  },
  {
    id: 2,
    title: '手绘',
    imgurl: '//upload-images.jianshu.io/upload_images/2535252-5c953f8e96dd3f0e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  },
  ],
  articleList: [{
    id: 1,
    title: '流浪大师改头换面，昔日同学纷纷找上门',
    detail: '大家好这里是派大星ya！ 大师在流浪，小丑在殿堂”，不少人对最近大火的“流浪大师”沈巍都议论纷纷。如今网络的更新换代速度不断加快，只要你在网络上...',
    imgurl: '//upload-images.jianshu.io/upload_images/14753564-99e5e18b050e26ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }, {
    id: 1,
    title: '流浪大师改头换面，昔日同学纷纷找上门',
    detail: '大家好这里是派大星ya！ 大师在流浪，小丑在殿堂”，不少人对最近大火的“流浪大师”沈巍都议论纷纷。如今网络的更新换代速度不断加快，只要你在网络上...',
    imgurl: '//upload-images.jianshu.io/upload_images/14753564-99e5e18b050e26ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }, {
    id: 1,
    title: '流浪大师改头换面，昔日同学纷纷找上门',
    detail: '大家好这里是派大星ya！ 大师在流浪，小丑在殿堂”，不少人对最近大火的“流浪大师”沈巍都议论纷纷。如今网络的更新换代速度不断加快，只要你在网络上...',
    imgurl: '//upload-images.jianshu.io/upload_images/14753564-99e5e18b050e26ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }, {
    id: 1,
    title: '流浪大师改头换面，昔日同学纷纷找上门',
    detail: '大家好这里是派大星ya！ 大师在流浪，小丑在殿堂”，不少人对最近大火的“流浪大师”沈巍都议论纷纷。如今网络的更新换代速度不断加快，只要你在网络上...',
    imgurl: '//upload-images.jianshu.io/upload_images/14753564-99e5e18b050e26ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  },
  ],
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
