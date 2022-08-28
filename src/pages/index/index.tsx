import { FC, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.scss' 

interface HelloWorldProps {
  message?: string;
}
const HelloWorld:FC<HelloWorldProps> = props => {

  const [count, setCount] = useState(0);

  const handleMinus = () => setCount(count - 1);
  const handleAdd = () => setCount(count + 1);

  useEffect(() => {
    console.log('VNODE RENDER COMPLETE')
  }, [])

  return <View>
    <Text>{props?.message || 'hello world'}</Text>
    <h1>这是一个h1标签</h1>
    <h2>这是一个h2标签</h2>
    <div>这是一个DOM标签</div>
    <div className={styles.box}>这是一个方块</div>
    <label>
      名字: <input value="" placeholder='请输入你的名字'/>
    </label>
    <div>
      <button onClick={handleMinus}>减</button>
      { count }
      <button onClick={handleAdd}>加</button>
    </div>
  </View>
}

export default HelloWorld