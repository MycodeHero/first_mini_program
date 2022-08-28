import { FC, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.scss' 

interface HelloWorldProps {
  message?: string;
}
const HelloWorld:FC<HelloWorldProps> = props => {

  useEffect(() => {
    console.log('VNODE RENDER COMPLETE')
  }, [])
  return <View>
    <Text>{props?.message || 'hello world'}</Text>
    <h1>这是一个h1标签</h1>
    <h2>这是一个h2标签</h2>
    <div>这是一个DOM标签</div>
    <div className={styles.box}>这是一个方块</div>
  </View>
}

export default HelloWorld