import {useState, useEffect} from 'react' 
import Phaser from 'phaser'
import Head from 'next/head'


export default function Game(){

  const [game, setGame] = useState({})


  let platforms
  let grass
  let player
  let thirst = 300
  let thirstText
  let healthText
  let hygiene = 0
  let hygieneText
  let bowlText
  let hunger = 300
  let raccoons
  let health = 300

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

      door.once('pointerdown', function(event){
        this.scene.start('sceneB')
      }, this)
      
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



      // stars = this.physics.add.group({
      //   key: 'star',
      //   repeat: 11,
      //   setXY: { x: 12, y: 0, stepX: 70 }
      // })
      
      // stars.children.iterate(function (child) {
        
      //   child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
      // })

      let healthBar = this.makeBar(16, 10, 0x2ecc71).setScrollFactor(0)
      this.setValue(healthBar, health)

      let powerBar = this.makeBar(16, 30, 0x76CEFF).setScrollFactor(0)
      this.setValue(powerBar, thirst)

      let magicBar = this.makeBar(16, 50, 0xF26722).setScrollFactor(0)
      this.setValue(magicBar, hunger)

      let hygieneBar = this.makeBar(16, 70, 0x89FFF8).setScrollFactor(0)
      this.setValue(hygieneBar, hygiene)

      healthText = this.add.text(20, 13, `Health: ${health}`, { fontSize: '16px', fill: '#000'}).setDepth(4)
      thirstText = this.add.text(20, 33, `Thirst: ${thirst}`, { fontSize: '16px', fill: '#000' }).setDepth(4)
      bowlText = this.add.text(20, 53, `Hunger: ${hunger}`, { fontSize: '16px', fill: '#000' }).setDepth(4)
      hygieneText = this.add.text(20, 73, `Hygiene: ${hygiene}`, { fontSize: '16px', fill: '#000' }).setDepth(4)
  
      //physics
      this.physics.add.collider(player, platforms)
      // this.physics.add.collider(stars, platforms)
      this.physics.add.overlap(player, water, waterBowl, null, this)
      this.physics.add.collider(sponge, platforms)
      this.physics.add.collider(sponge, player)
      this.physics.add.collider(bowl, platforms)
      this.physics.add.overlap(bowl, player, hitBowl, null, this)
      this.physics.add.collider(water, platforms)
      this.physics.add.collider(player, sponge, cleanPlayer, null, this)
      
      function hitBowl(){
  
        if (hunger > 0){
          hunger -= 1
          bowlText.setText('Hunger: ' + hunger) 
          this.setValue(magicBar, hunger)
        }
        
      }
  
      function waterBowl() {
        if (thirst > 0){
          thirst -= 1
          thirstText.setText('Thirst: ' + thirst)
          this.setValue(powerBar, thirst)

        }
      }

      function cleanPlayer(player){
        if (hygiene < 300){
          hygiene += 1
          hygieneText.setText('Hygiene: ' + hygiene)
          this.setValue(hygieneBar, hygiene)
        }
        bubbleParticles.emitParticleAt(player.x, player.y)
      }

    }

    makeBar(x, y, color) {
      let bar = this.add.graphics()
      bar.fillStyle(color, 1)
      bar.fillRect(0, 0, 150, 20)
      bar.setDepth(4)
      bar.x = x
      bar.y = y
      return bar
    }

    setValue(bar,percentage) {
      bar.scaleX = percentage/100
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

  class sceneB extends Phaser.Scene {
    constructor(){
      super({key: 'sceneB'})
    }

    preload(){

      this.load.spritesheet('player', 
      '/assets/character/spritesheet1.png',
      { frameWidth: 344, frameHeight: 369 }
      )
      this.load.spritesheet('raccoon', 
      '/assets/character/raccoon.png',
      { frameWidth: 363, frameHeight: 295}
      )
      this.load.image('grass', '/assets/bg/grass.png')
      this.load.image('fakeGrass', '/assets/bg/hiddenPlatform.png')
      this.load.image('sky', '/assets/bg/sky.png')
      this.load.image('tree1', '/assets/env/tree1.png')
      this.load.image('tree2', '/assets/env/tree2.png')
      this.load.image('tree3', '/assets/env/tree3.png')
      this.load.image('tree4', '/assets/env/tree4.png')
      this.load.image('twig1', '/assets/items/twig1.png')
      this.load.image('twig2', '/assets/items/twig2.png')
      this.load.image('twig3', '/assets/items/twig3.png')
    }

    create(){
      player = this.physics.add.sprite(150, 450, 'player')
        .setScale(0.4).setCrop(0, 0, 400, 600)
        .setCollideWorldBounds(true)
        .setBounce(0.2)
        .setDepth(3)

      raccoons = this.physics.add.group({
        key: 'raccoon',
        repeat: 3,
        setXY: { x: 800, y: 450, stepX: 50}
      })

      
      
      
      this.anims.create({
        key: 'raccoonRight',
        frames: this.anims.generateFrameNumbers('raccoon', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      })
      this.anims.create({
        key: 'raccoonLeft',
        frames: this.anims.generateFrameNumbers('raccoon', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      })
      
      raccoons.children.iterate((raccoon) => {
        raccoon.setVelocityX(100)
        raccoon.anims.play('raccoonLeft', true)
        raccoon.setCollideWorldBounds(true)
        raccoon.setScale(0.3)
        raccoon.setDepth(3)

      })


      this.add.image(0, 600, 'grass')
        .setDepth(2)
      
      this.add.image(600, 600, 'grass')
        .setDepth(2)

      let trees = this.physics.add.staticGroup()

      for (let i = 0; i < 10; i++ ){

        let treeTypes = ['tree1', 'tree2', 'tree3', 'tree4']

        let treeIndex = Phaser.Math.RND.between(0, treeTypes.length -1)

        let treeType = treeTypes[treeIndex]

        trees
        .create(20 + i * 150, 400, treeType)
        .setScale(0.5)
        .setDepth(2)
      }

      this.add.image(0, 300, 'sky')
      this.add.image(600, 300, 'sky')

      let twigGroup = this.physics.add.group()

      function dropTwig(){
        let numTwigs = twigGroup.getLength()
        let twigTypes = ['twig1', 'twig2', 'twig3']
        let twigIndex = Phaser.Math.RND.between(0, twigTypes.length - 1)
        let twigType = twigTypes[twigIndex]

        if (numTwigs >= 15){
          let oldestTwig = twigGroup.getFirst(true)

          if (oldestTwig){
            oldestTwig.destroy()
          }
        }

        let dropX = Phaser.Math.RND.between(0, 1200)
        let dropY = 0
        let rotation = Phaser.Math.RND.between(0, 360)

        let twig = twigGroup.create(dropX, dropY, twigType)

        twig.setCollideWorldBounds(true)
        twig.setBounce(0.2)
        twig.setVelocityY(Phaser.Math.RND.between(100, 200))
        twig.setDepth(2)
        twig.setScale(0.3)
        twig.setRotation(rotation)
      }

      function hitTwig(player, twig){

        if (health < 300){
          health += 20
        }

        player.setTint(0x8DD78D)
        healthText.setText('Health: ' + health)
        this.setValue(healthBar, health)
        twig.destroy()

        setTimeout(() =>{
          player.clearTint()
        }, 1000)
      }

      this.time.addEvent({
        delay: 5000,
        callback: dropTwig,
        loop: true
      })

      
      function hitRaccoon(player){
        player.setTint(0xD78D8D)
        

        if (health > 0){
          health -= 5
          healthText.setText('Health: ' + health)
        } else if (health === 0){
          this.scene.start('sceneA')
        }
        
        this.setValue(healthBar, health)
        
        setTimeout(() => {
          player.clearTint()
        }, 1000)
      }

      healthText = this.add.text(20, 13, `Health: ${health}`, { fontSize: '16px', fill: '#000'}).setDepth(4).setScrollFactor(0)
      thirstText = this.add.text(20, 33, `Thirst: ${thirst}`, { fontSize: '16px', fill: '#000' }).setDepth(4).setScrollFactor(0)
      bowlText = this.add.text(20, 53, `Hunger: ${hunger}`, { fontSize: '16px', fill: '#000' }).setDepth(4).setScrollFactor(0)
      hygieneText = this.add.text(20, 73, `Hygiene: ${hygiene}`, { fontSize: '16px', fill: '#000' }).setDepth(4).setScrollFactor(0)
      
      let healthBar = this.makeBar(16, 10, 0x2ecc71).setScrollFactor(0)
      this.setValue(healthBar, health)

      let powerBar = this.makeBar(16, 30, 0x76CEFF).setScrollFactor(0)
      this.setValue(powerBar, thirst)

      let magicBar = this.makeBar(16, 50, 0xF26722).setScrollFactor(0)
      this.setValue(magicBar, hunger)

      let hygieneBar = this.makeBar(16, 70, 0x89FFF8).setScrollFactor(0)
      this.setValue(hygieneBar, hygiene)

      grass = this.physics.add.staticGroup()
        .create(400, 620, 'fakeGrass')

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

      this.cameras.main.setBounds(0, 0, 600 * 2, 600)
      this.physics.world.setBounds(0, 0, 600 * 2, 600)
      this.cameras.main.startFollow(player, true, 0.05, 0)
      this.cameras.main.followOffset.set(0, 0)
      this.physics.add.collider(player, grass)
      this.physics.add.collider(twigGroup, grass)
      this.physics.add.overlap(player, twigGroup, hitTwig, null, this)
      this.physics.add.overlap(player, raccoons, hitRaccoon, null, this)
      this.physics.add.collider(raccoons, grass)
    }


    makeBar(x, y, color) {
      let bar = this.add.graphics()
      bar.fillStyle(color, 1)
      bar.fillRect(0, 0, 150, 20)
      bar.setDepth(3)
      bar.x = x
      bar.y = y
      return bar
    }

    setValue(bar,percentage) {
      bar.scaleX = percentage/100
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

      raccoons.children.iterate((raccoon) => {
        if (raccoon.body.blocked.right) {
          
          raccoon.setVelocityX(-100);
          
          raccoon.anims.play('raccoonRight', true)

        }
        else if (raccoon.body.blocked.left) {
  
          raccoon.setVelocityX(100)
  
          raccoon.anims.play('raccoonLeft', true)

        }

      })

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
    scene: [sceneA, sceneB]
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
    <Head>
    <title>Pocket Pals</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.svg" />
    </Head>
    <div id='game-content' />
  
  </>)
  
}
