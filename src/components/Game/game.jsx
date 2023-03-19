import {useState, useEffect} from 'react' 
import Phaser from 'phaser'


export default function Game(){

  const [game, setGame] = useState({})

  let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 300
        },
        debug: false
      }
    },
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
      console.log(game)
    }
    initPhaser()
  }, [])



  function preload (){
    this.load.image('sky', '/assets/bg/sky.png')
    this.load.image('star', '/assets/items/star.png')
    this.load.image('ground', '/assets/env/floor.png')
    this.load.image('wall', '/assets/env/wall.png')
    this.load.image('platform', '/assets/env/platform.png')
    this.load.image('door', 'assets/env/door.png')
    this.load.image('sponge', 'assets/items/sponge.png')
    this.load.spritesheet('player', 
      '/assets/character/spritesheet1.png',
      { frameWidth: 344, frameHeight: 369 }
      
      )
  }

  let platforms
  let player
  let stars
  let score = 0
  let scoreText

  function create (){
    this.add.image(400, 300, 'sky')
    // this.add.image(400, 300, 'star')

    platforms = this.physics.add.staticGroup()

    // platforms.create(419.5, 400, 'ground').setScale(1).refreshBody()

    this.add.image(400, 280, 'wall')
    this.add.image(419.5, 280, 'ground')
    this.add.image(150, 215, 'door')
    platforms.create(400, 600, 'platform')
    player = this.physics.add.sprite(150, 100, 'player').setScale(0.4).setCrop(0, 0, 400, 600)
    let sponge = this.physics.add.image(200, 200, 'sponge')
    
    // platforms.create(600, 400, 'ground')
    // platforms.create(50, 250, 'ground')
    // platforms.create(750, 220, 'ground')
    
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'player', frame: 4 } ],
      frameRate: 20
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })
    
    //bounce for objects
    player.setBounce(0.2)
    player.setCollideWorldBounds(true)
    sponge.setCollideWorldBounds(true)
    sponge.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    sponge.setVelocity(100, 100)


    //events
    this.input.setDraggable(sponge.setInteractive())
    this.input.on('dragstart', function (pointer, obj){
        obj.body.moves = false;
    })

    this.input.on('drag', function (pointer, obj, dragX, dragY){
        obj.setPosition(dragX, dragY);
    });

    this.input.on('dragend', function (pointer, obj){
        obj.body.moves = true;
    })
    

    
    stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    })
    
    stars.children.iterate(function (child) {
      
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      
    })

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })

    //physics
    this.physics.add.collider(player, platforms)
    this.physics.add.collider(stars, platforms)
    this.physics.add.overlap(player, stars, collectStar, null, this)
    this.physics.add.collider(sponge, platforms)

    function collectStar (player, star) {

      score += 10
      scoreText.setText('Score: ' + score)

      star.disableBody(true, true)
    }
  }

  function update (){
    let cursors = this.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
      player.setVelocityX(-160)
      player.anims.play('left', true)
    } else if (cursors.right.isDown) {
      player.setVelocityX(160)
      player.anims.play('right', true)
    } else {
      player.setVelocityX(0)
      player.anims.play('turn')
    } if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330)
    }
  
  }

  
  return (<>
    
    <div id='game-content' />
  
  </>)
  
}
