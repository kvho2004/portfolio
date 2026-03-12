import { useEffect, useRef } from "react"
import * as THREE from "three"
import { info } from "../data/info"

function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const count = 300
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 80
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({
      color: 0xff79c6,
      size: 0.25,
      transparent: true,
      opacity: 0.5,
    })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const cubeGeo = new THREE.BoxGeometry(6, 6, 6)
    const cubeMat = new THREE.MeshBasicMaterial({ color: 0x7ee8c8, wireframe: true })
    const cube = new THREE.Mesh(cubeGeo, cubeMat)
    cube.position.set(14, 0, 0)
    scene.add(cube)

    let frame
    const animate = () => {
      frame = requestAnimationFrame(animate)
      particles.rotation.y += 0.0005
      cube.rotation.x += 0.008
      cube.rotation.y += 0.008
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--color-pink)" }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-cream)" }}>
          {info.shortName}
        </h1>
        <p className="text-xl mb-4 font-light" style={{ color: "var(--color-cyan)" }}>
          {info.tagline}
        </p>
        <p className="max-w-xl leading-relaxed mb-10 text-base" style={{ color: "var(--color-muted)" }}>
          {info.bio}
        </p>

        <div className="flex flex-wrap gap-4">
          
        <a href={info.resume}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{ background: "var(--color-pink)", color: "var(--color-bg)" }}
        >
        Resume
        </a>
          
        <a href={info.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-medium border transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--color-border)", color: "var(--color-cream)" }}
        >
        GitHub
        </a>
          
        <a href={info.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-medium border transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--color-border)", color: "var(--color-cream)" }}
        >
        LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}