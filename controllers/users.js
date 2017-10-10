
// import UsersModel from '../models/users'

class Users {
  constructor () {
    this.signin = this.signin.bind(this)
    this.signup = this.signup.bind(this)
    this.signout = this.signout.bind(this)
  }

  /**
   * 登录操作
   */
  async signin (req, res, next) {

  }

  /**
   * 注册操作
   */
  async signup (req, res, next) {

  }

  /**
   * 登出操作
   */
  async signout (req, res, next) {

  }
}

export default new Users()
