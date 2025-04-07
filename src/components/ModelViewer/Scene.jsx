/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useMemo, Suspense } from "react";
import { OrbitControls, CameraControls, useHelper, Grid } from "@react-three/drei";
import { useControls, button, buttonGroup } from "leva";
import * as THREE from "three";
import Model from "./Model";

import './Scene.scss?v=1';

const Scene = () => {
  const [key, setKey] = useState(0);
  const [listReloaded, setListReloaded] = useState(false);
  const childData = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const lightRef = useRef();
  const cameraControlRef = useRef();
  const { DEG2RAD } = THREE.MathUtils;

  useEffect(() => {
    cameraControlRef.current.setLookAt(0, 1, 3, 0, 0, 0, true);
  }, {});

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
        value: 1,
        min: 0,
        max: 5,
        step: 0.05,
      },
      dir_light_pos: {
        value: { x: 2, y: 2, z: 2 },
        min: -10,
        max: 10,
        step: 0.1,
      },
      dir_light_int: {
        value: 2,
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

  const cameraControls = useMemo(
    () => ({
      horizontalRotation: buttonGroup({
        label: "Horiz R",
        opts: {
          "45deg": () => cameraControlRef.current.rotate(45 * DEG2RAD, 0, true),
          "-90deg": () => cameraControlRef.current.rotate(-90 * DEG2RAD, 0, true),
          "360deg": () => cameraControlRef.current.rotate(360 * DEG2RAD, 0, true),
        },
        className: 'leva__button custom-button',
      }),
      verticalRotation: buttonGroup({
        label: "Vertical R",
        opts: {
          "20deg": () => cameraControlRef.current.rotate(0, 20 * DEG2RAD, true),
          "-40deg": () => cameraControlRef.current.rotate(0, -40 * DEG2RAD, true),
        },
        className: 'leva-custom-button-group',
      }),
      zoomGroup: buttonGroup({
        label: "Zoom",
        opts: {
          "0.25": () => cameraControlRef.current.zoom(0.25, true),
          "-0.25": () => cameraControlRef.current.zoom(-0.25, true),
        },
        className: 'leva-custom-button-group',
      }),
      lookAt: button(() => {
        cameraControlRef.current.setLookAt(0, 1, 3, 0, 0, 0, true);
      }),
    }),
    []
  );

  useControls("Camera Controls", cameraControls);

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

      <CameraControls ref={cameraControlRef} smoothTime={0.25} />

      <OrbitControls />
      {helpers && <Grid
        args={[30, 30]}
        cellSize={0.25}
        cellColor="#f7f7b8"
        sectionThickness={1.5}
        sectionColor="#96880a"
        fadeDistance={20}
        fadeStrength={0.5}
      />}

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
