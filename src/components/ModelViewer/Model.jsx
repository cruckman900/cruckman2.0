/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { AnimationMixer, AnimationClip } from "three";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";

function Model({ file, onData, ...props }) {
    const group = useRef();

    const gltf = useLoader(GLTFLoader, "./model/" + file);
    const scene = SkeletonUtils.clone(gltf.scene);

    const { animations } = useGLTF("./model/" + file);
    const [animationNames, setAnimationNames] = useState(null);

    const mixer = new AnimationMixer(scene);
    const clip = AnimationClip.findByName(animations, props.animation);

    const sendDataToParent = (anims) => {
        onData(anims);
    };

    useEffect(() => {
        useGLTF.clear();
        scene.animations = animations;
    }, [file]);

    useEffect(() => {
        setAnimationNames(animations.map((clip) => clip.name));

        return () => {
            setAnimationNames(null);
        };
    }, [animations]);

    useEffect(() => {
        sendDataToParent(animationNames);
    }, [animationNames]);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.wireframe = props.wireframe;
                child.castShadow = true;
            }
        });

        return () => {
            useGLTF.clear();
        };
    }, [props.wireframe]);

    useEffect(() => {
        mixer.setTime(0);

        if (props.animation && !props.play) {
            try {
                mixer.clipAction(clip).stop();
                mixer.setTime(0);
            } catch (err) {
                console.log("err: ", err);
            }
        }

        if (props.animation && props.play) {
            try {
                mixer.clipAction(clip).play();
            } catch (err) {
                console.log("err: ", err);
            }
        }
    }, [scene, props.play]);

    useFrame(
        (_, delta) => {
            if (mixer) {
                mixer.update(delta);
            }
        },
        [props.play]
    );

    useEffect(() => {
        try {
            if (!scene.children.length > 0) {
                throw new Error("Primitive object is undefined!");
            }

            // Perform any setup logic if needed
            // console.log("Primitive successfully loaded:", scene);
        } catch (error) {
            console.error("Error handling primitive:", error.message);
        }

        return () => {
            // Cleanup resources on unmount
            if (group.current) {
                group.current.geometry?.dispose();
                group.current.material?.dispose();
                // console.log("Primitive resources disposed.");
            }
        };
    }, [scene]);

    if (!scene) {
        return <div>Error: Primitive object is missing or invalid.</div>;
    }

    function PrimitiveReload() {
        return (
            <primitive
                ref={group}
                object={scene}
                wireframe={props.wireframe}
            />
        );
    }

    return <PrimitiveReload key={props.key} onData={onData} />
}

export default Model;