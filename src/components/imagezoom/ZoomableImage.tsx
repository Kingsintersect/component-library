"use client";
import { useEffect } from 'react';
import ImageZoom from '@/app/components/imagezoom/ImageZoom';
import styles from './ZoomableImage.module.css';

const ZoomableImage = () => {
    useEffect(() => {
        const zoom = new ImageZoom('myImage', 'myResult');
        return () => {
            // Cleanup event listeners if necessary
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <img id="myImage" src="/pictures/nature-1.jpg" width="600" height="400" />
            <div id="myResult" className={styles.result}></div>
        </div>
    );
};

export default ZoomableImage;
