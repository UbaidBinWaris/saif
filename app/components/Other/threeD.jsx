// import React, { Suspense, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html, Preload } from "@react-three/drei";
// import { useInView } from "react-intersection-observer";

// const RobotModel = React.memo(() => {
//     const { scene } = useGLTF("/robot.glb");
//     const modelRef = useRef();

//     useFrame((state, delta) => {
//         if (modelRef.current) {
//             const { x, y } = state.pointer;
    
//             // Throttle updates
//             if (delta > 0.1) return;
    
//             // Smoothly interpolate the current rotation towards the target rotation
//             modelRef.current.rotation.y += (x * Math.PI - modelRef.current.rotation.y) * 0.1;
//             modelRef.current.rotation.x += (-y * Math.PI * 0.5 - modelRef.current.rotation.x) * 0.1;
    
//             // Floating effect
//             const time = state.clock.getElapsedTime();
//             modelRef.current.position.y = Math.sin(time) * 0.5 - 5;
//         }
//     });

//     return (
//         <primitive
//             ref={modelRef}
//             object={scene}
//             scale={[0.4, 0.4, 0.4]}
//             position={[6, -4, -5]}
//         />
//     );
// });

// useGLTF.preload("/robot.glb");

// const ThreeD = () => {
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Lazy load when in view
//     const [isLoaded, setIsLoaded] = useState(false);

//     return (
//         <div ref={ref} style={{ height: "100vh", width: "100%" }}>
//             {inView && (
//                 <Canvas
//                 style={{ height: "100%", width: "100%" }}
//                 shadows
//                 camera={{ position: [0, 2, 5], fov: 50 }}
//                 gl={{ antialias: false, pixelRatio: Math.min(window.devicePixelRatio, 1.5) }} // Lower resolution
//             >
//                     <ambientLight intensity={0.3} /> {/* Reduce ambient light intensity */}
//                     <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
//                     <Suspense
//                         fallback={
//                             <Html center>
//                                 <div style={{ color: "white" }}>Loading...</div>
//                             </Html>
//                         }
//                     >
//                         <RobotModel />
//                     </Suspense>
//                     <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//                     <Preload all />
//                 </Canvas>
//             )}
//             {!isLoaded && <div style={{ color: "white", textAlign: "center" }}>3D Model Loading...</div>}
//         </div>
//     );
// };

// export default ThreeD;
