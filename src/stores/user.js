import { observable, action } from 'mobx'
import { Auth } from '../models'

class UserStore {
  @observable currentUser = null

  @action pullUser() {
    
    this.currentUser = Auth.getCurrentUser()
    console.log('pullUser执行了 ');
  }

  @action resetUser() {
    this.currentUser = null
  }
}

console.log('返回 user store执行了')
export default new UserStore()