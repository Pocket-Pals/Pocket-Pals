import {useState, useEffect} from 'react' 
import Phaser from 'phaser'
// import sky from './sky.png'

export default function Game(){

  const [game, setGame] = useState()

  let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  }

  useEffect(() => {
    async function initPhaser(){
      const game = new Phaser.Game({
        ...config
      })
      setGame(game)
    }
    initPhaser()
  }, [])



  function preload (){
    this.load.image('sky', '/sky.png')
  }

  function create (){
    this.add.image(400, 300, 'sky')
  }

  function update (){
  }

  console.log(game)
  return (<>
  <div id='game-content' />
  
  </>)
  
}
