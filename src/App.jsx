import { useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/car_scene/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      console.log(loadedModel);

      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = -5;
      gltfScene.scene.position.x = -2;
      gltfScene.scene.position.y = -5;
      gltfScene.scene.scale.set(0.05, 0.05, 0.05);
      test.scene.add(gltfScene.scene);
    });

   const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.y += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
