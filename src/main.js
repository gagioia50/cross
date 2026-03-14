import * as THREE from 'three'
import {Renderer} from './components/Renderer'
import {Camera} from './components/Camera'
import {player} from './components/Player'
import {initializeMap, map} from './components/Map'
import './style.css'

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
    initializeMap();
}

const renderer = Renderer();
renderer.render(scene, camera);

