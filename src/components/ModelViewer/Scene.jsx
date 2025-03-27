/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useMemo, Suspense } from "react";
import { OrbitControls, useHelper, Grid } from "@react-three/drei";
import { useControls, button } from "leva";
import * as THREE from "three";
import Model from "./Model";

const Scene = () => {
  const [key, setKey] = useState(0);
  const [listReloaded, setListReloaded] = useState(false);
  const childData = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const lightRef = useRef();

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
    setListReloaded(false);
  };

  const handleDataFromChild = (data) => {
    if (data) {
      childData.current.push(...data);
    } else {
      childData.current = [];
    }
  };

  const fileControls = useMemo(
    () => ({
      file: {
        options: ["dog.glb", "bow2.glb", "BD_Stretch_Robot.glb"],
      },
    }),
    []
  );

  const { file } = useControls("Load File", fileControls);

  useEffect(() => {
    handleReload();
  }, [file]);

  const basicControls = useMemo(
    () => ({
      amb_light_int: {
        value: 0.25,
        min: 0,
        max: 5,
        step: 0.05,
      },
      dir_light_pos: {
        value: { x: 0, y: 2, z: 0 },
        min: -10,
        max: 10,
        step: 0.1,
      },
      dir_light_int: {
        value: 0.25,
        min: 0,
        max: 5,
        step: 0.05,
      },
      wireframe: false,
      helpers: true,
    }),
    []
  );

  const
    {
      amb_light_int,
      dir_light_pos,
      dir_light_int,
      wireframe,
      helpers,
    }
      = useControls("Basic Controls", basicControls);

  const [{ anim }] = useControls(
    "Animations",
    () => ({
      ...(listReloaded &&
        childData.current && {
        anim: { options: childData.current },
      }),
      ...(!isPlaying &&
        listReloaded && {
        play: button(() => {
          setIsPlaying(true);
        }),
      }),
      ...(isPlaying &&
        listReloaded && {
        stop: button(() => {
          setIsPlaying(false);
        }),
      }),
      ...(!listReloaded && {
        refresh: button(() => {
          setListReloaded(true);
        }),
      }),
    }),
    [childData.current, listReloaded, isPlaying]
  );

  useEffect(() => {
    setIsPlaying(false);
  }, [file, anim]);

  useHelper(lightRef, helpers ? THREE.DirectionalLightHelper : null, 1);

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state to display fallback UI
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // Log error details
      console.error("Error caught by boundary", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        console.log("Error", this.state.error);
        // return <div>Error: Something went wrong while loading.</div>;
      }

      return this.props.children;
    }
  }

  return (
    <>
      <ambientLight intensity={amb_light_int} />
      <directionalLight
        ref={lightRef}
        position={[dir_light_pos.x, dir_light_pos.y, dir_light_pos.z]}
        intensity={dir_light_int}
      />

      <OrbitControls />
      {helpers && <Grid args={[30, 30]} cellSize={0.25} cellColor="#6f6f6f" />}

      <ErrorBoundary>
        <Suspense
          fallback={
            <mesh scale-y={2}>
              <boxGeometry />
              <meshBasicMaterial color="orange" wireframe />
            </mesh>
          }
        >
          <Model
            key={key}
            file={file}
            onData={handleDataFromChild}
            wireframe={wireframe}
            animation={anim}
            play={isPlaying}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Scene;
