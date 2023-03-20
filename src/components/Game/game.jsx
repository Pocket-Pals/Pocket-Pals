import {useState, useEffect} from 'react' 
import Phaser from 'phaser'


export default function Game(){

  const [game, setGame] = useState({})


  let platforms
  let player
  let stars
  let score = 0
  let scoreText
  let bowlText
  let hunger = 100

  class sceneA extends Phaser.Scene {
    constructor(){
      super({ key: 'sceneA'})
    }

    preload(){
      this.load.image('sky', '/assets/bg/sky.png')
      this.load.image('star', '/assets/items/star.png')
      this.load.image('ground', '/assets/env/floor.png')
      this.load.image('wall', '/assets/env/wall.png')
      this.load.image('platform', '/assets/env/platform.png')
      this.load.image('door', 'assets/env/door.png')
      this.load.image('sponge', 'assets/items/sponge.png')
      this.load.image('bowl', '/assets/items/bowl.png')
      this.load.image('water', '/assets/items/water.png')
      this.load.image('bubble', '/assets/items/bubble.png')
      this.load.spritesheet('player', 
        '/assets/character/spritesheet1.png',
        { frameWidth: 344, frameHeight: 369 }
        )
    }

    create(){
      this.add.image(400, 300, 'sky')
      // this.add.image(400, 300, 'star')
  
      platforms = this.physics.add.staticGroup()
  
      // platforms.create(419.5, 400, 'ground').setScale(1).refreshBody()
  
      this.add.image(400, 280, 'wall')
      this.add.image(419.5, 280, 'ground')
      let door = this.add.image(150, 215, 'door').setInteractive()
      platforms.create(400, 600, 'platform')
      player = this.physics.add.sprite(150, 100, 'player').setScale(0.4).setCrop(0, 0, 400, 600)
      let bowl = this.physics.add.image(500, 600, 'bowl')
      let sponge = this.physics.add.image(200, 600, 'sponge')
      let water = this.physics.add.image(300, 600, 'water')
      let bubbles = this.add.particles('bubble')
      
      
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

      let particleConfig = {
        speed: 200,
        lifespan: 500,
        blendMode: 'ADD',
        maxParticles: 50,
        scale: {
          start: 1,
          end: 0
        },
        on: false
      }

      let bubbleParticles = bubbles.createEmitter(particleConfig)
      
      //bounce for objects
      player.setBounce(0.2)
      player.setCollideWorldBounds(true)
      sponge.setCollideWorldBounds(true)
      water.setCollideWorldBounds(true)
      bowl.setCollideWorldBounds(true)
      sponge.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
      sponge.setVelocity(100, 100)
  
  
      //events
      this.input.setDraggable(sponge.setInteractive())
      this.input.setDraggable(bowl.setInteractive())
      this.input.setDraggable(water.setInteractive())
      this.input.on('dragstart', function (pointer, obj){
          obj.body.moves = false;
      })
  
      this.input.on('drag', function (pointer, obj, dragX, dragY){
          obj.setPosition(dragX, dragY);
      });
  
      this.input.on('dragend', function (pointer, obj){
          obj.body.moves = true;
      })
      
      bowl.on('pointerover', function(){
        bowl.setTint(0x44ff44)
      })

      bowl.on('pointerout', function(){
        bowl.clearTint()
      })

      door.on('pointerover', function(){
        door.setTint(0x44ff44)
      })
      
      door.on('pointerout', function(){
        door.clearTint()
      })
      
      water.on('pointerover', function(){
        water.setTint(0x44ff44)
      })
      
      water.on('pointerout', function(){
        water.clearTint()
      })

      sponge.on('pointerover', function(){
        sponge.setTint(0x44ff44)
      })
      
      sponge.on('pointerout', function(){
        sponge.clearTint()
      })

      sponge.on('pointerdown', function(){
        sponge.clearTint()
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
      bowlText = this.add.text(16, 64, `hunger: ${hunger}`, { fontSize: '32px', fill: '#000' })
  
      //physics
      this.physics.add.collider(player, platforms)
      this.physics.add.collider(stars, platforms)
      this.physics.add.overlap(player, stars, collectStar, null, this)
      this.physics.add.collider(sponge, platforms)
      this.physics.add.collider(sponge, player)
      this.physics.add.collider(bowl, platforms)
      this.physics.add.overlap(bowl, player, hitBowl, null, this)
      this.physics.add.collider(water, platforms)
      this.physics.add.collider(player, sponge, cleanPlayer, null, this)
      
      function hitBowl(){
  
        if (hunger > 0){
          hunger -= 1
          bowlText.setText('hunger: ' + hunger) 
        }
        
      }
  
      function collectStar (player, star) {
  
        score += 10
        scoreText.setText('Score: ' + score)
  
        star.disableBody(true, true)
      }

      function cleanPlayer(player){
        bubbleParticles.emitParticleAt(player.x, player.y)
      }

    }

    

    update(){
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

  }

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
    scene: [sceneA]
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
  
  return (<>
    
    <div id='game-content' />
  
  </>)
  
}
