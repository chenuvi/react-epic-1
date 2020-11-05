import AV,{ Query, User } from 'leancloud-storage'

AV.init({
  appId: "70yyuctbKtOOpDR0oX94Qdz9-gzGzoHsz",
  appKey: "l3XilxD0H1hcp0HzelO9WzDo",
  serverURL: "https://70yyuctb.lc-cn-n1-shared.com"
});

// LeanCloud - 注册
// https://leancloud.cn/docs/leanstorage_guide-js.html#注册
var user = new AV.User();
user.setUsername("testUsername");
user.setPassword("testPassword");

user.signUp().then(loginedUser => {
  console.log('注册成功')
}, ( error => {
  console.log(error)
}));

export  default {}