import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() {
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log('%c AT-🥝 res.code 🥝-14', 'font-size:13px; background:#de4307; color:#f6d04d;', res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
