import AV, {Query, User} from 'leancloud-storage'

AV.init({
  appId: "70yyuctbKtOOpDR0oX94Qdz9-gzGzoHsz",
  appKey: "l3XilxD0H1hcp0HzelO9WzDo",
  serverURL: "https://70yyuctb.lc-cn-n1-shared.com"
});

const Auth = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    });
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username,password).then(loginedUser => resolve(loginedUser), error => reject(error))
    });
  },

  logout() {
   return User.logOut()
  },

  getCurrentUser(){
    return User.current();
  }
}

const Uploader = {
  add(file,filename){
    const item = new AV.Object('Image')
    const avFile = new AV.File(filename,file)

    item.set('filename',filename)
    item.set('owner',AV.User.current())
    item.set('url',avFile)
    return new Promise((resolve,reject) =>{
      item.save().then(serverFile => resolve(serverFile),error=> {reject(error)})
    })
  },

  find({page = 0, limit = 10}){
    let query = new AV.Query('Image')
    query.include('owner')
    query.limit(limit)
    query.skip(limit*page)
    query.descending('createdAt')
    query.equalTo('owner',AV.User.current())
    return new Promise((resolve,reject) => {
      query.find()
        .then( results => resolve(results))
        .catch( err => resolve(err))
    })

  }
}

window.winUploader = Uploader
export {Auth,Uploader}