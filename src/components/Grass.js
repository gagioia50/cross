import * as THREE from 'three'
import { tileSize, tilesPerRow } from '../constants';

export function Grass(rowIndex) {
    const grass = new THREE.Group();
    grass.position.y = rowIndex * tileSize;

    const geometry = new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3);
    const material = new THREE.MeshLambertMaterial({ color: 0xbaf455 });
    const foundation = new THREE.Mesh(geometry, material);
    
    foundation.position.z = 1.5;
    grass.add(foundation);

    return grass;
}