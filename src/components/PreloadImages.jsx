import { useEffect } from "react";

const PreloadImages = ({ imageUrls }) => {
    console.log("imageUrls", imageUrls);
    useEffect(() => {
        const preload = (url) => {
            const img = new Image();
            img.src = url;
            console.log("image", img.src);
        };

        imageUrls.forEach(preload);
    }, [imageUrls]);
    
    return null;
}

export default PreloadImages;