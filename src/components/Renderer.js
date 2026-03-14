import * as THREE from 'three'

export function Renderer() {
    const canvas = document.querySelector('.game');
    if (!canvas) throw new Error('Canvas not found');


    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        canvas: canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
}
