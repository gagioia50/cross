import * as THREE from 'three'

export const player = Player();

function Player() {
    const geometry = new THREE.BoxGeometry(15, 15, 20);
    const material = new THREE.MeshLambertMaterial({ 
        color: 0x00ff00,
        flatShading: true,
    });
    const body = new THREE.Mesh(geometry, material);
    body.position.z = 10;
    return body;
}