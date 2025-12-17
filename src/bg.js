import { gsap } from 'gsap'

export function initBackground() {
  const canvas = document.getElementById('bg-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  function resize(){
    canvas.width = innerWidth * devicePixelRatio
    canvas.height = innerHeight * devicePixelRatio
    canvas.style.width = innerWidth + 'px'
    canvas.style.height = innerHeight + 'px'
    ctx.scale(devicePixelRatio, devicePixelRatio)
  }
  resize()
  addEventListener('resize', resize)

  const blobs = []
  for(let i=0;i<8;i++) blobs.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:60+Math.random()*140, hue: Math.random()*360, vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4})

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    blobs.forEach(b=>{
      b.x += b.vx
      b.y += b.vy
      // wrap
      if(b.x<-200) b.x = innerWidth + 200
      if(b.y<-200) b.y = innerHeight + 200
      if(b.x>innerWidth+200) b.x = -200
      if(b.y>innerHeight+200) b.y = -200

      const g = ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r)
      g.addColorStop(0, `hsla(${b.hue},80%,65%,0.18)`)
      g.addColorStop(0.4, `hsla(${(b.hue+40)%360},70%,55%,0.07)`)
      g.addColorStop(1, `hsla(${(b.hue+120)%360},60%,20%,0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.ellipse(b.x,b.y,b.r,b.r*0.7,0,0,Math.PI*2)
      ctx.fill()
    })
    requestAnimationFrame(draw)
  }
  draw()

  // gentle pulse via GSAP
  gsap.to(blobs, { duration: 6, r: '+=30', yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.2 })
}
