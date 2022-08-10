import * as THREE from 'three';

export default class ViewGL {

    // init
    constructor(canvasRef) {

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.camera.position.z = 1;
        

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });

        this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        this.material = new THREE.MeshNormalMaterial();
        
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);

        // this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        
        this.update();

        // this.renderer.setAnimationLoop(this.animation);
    }

    animation =(time)=> {

        this.mesh.rotation.x = time / 2000;
        this.mesh.rotation.y = time / 1000;

        this.renderer.render(this.scene, this.camera);
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
        // Whatever you need to do with React props
    }
  
    onMouseMove() {
        // Mouse moves
    }
  
    onWindowResize(vpW, vpH) {
          this.renderer.setSize(vpW, vpH);
    }
  
      // ******************* RENDER LOOP ******************* //
    update(t) {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update.bind(this));
    }

}