"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface ViewerProps {
    src: string;
    alt: string;
}

const ImageViewer = ({ src, alt }: ViewerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const openViewer = () => setIsOpen(true);
    const closeViewer = () => {
        setIsOpen(false);
        setScale(1); // Reset scale on close
        setPosition({ x: 0, y: 0 });
    };

    const handleWheel = (e: React.WheelEvent) => {
        setScale((prevScale) => {
            const newScale = e.deltaY > 0 ? Math.max(prevScale - 0.1, 1) : Math.min(prevScale + 0.1, 3);
            return newScale;
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - start.x,
            y: e.clientY - start.y,
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div>
            {/* Thumbnail */}
            <Image
                src={src}
                alt={alt}
                className="block hover:scale-105 aspect-video smooth object-cover object-center w-full rounded-lg h-auto"
                onClick={openViewer}
                height={1000}
                width={1000}
            />

            {/* Fullscreen Viewer */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[999999] flex items-center justify-center bg-black bg-opacity-80 overflow-hidden"
                    onWheel={handleWheel}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <div
                        className="relative cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            className="transform transition-transform duration-100 w-max h-max aspect-video object-contain border-2 border-teal rounded-3xl p-2 bg-white"
                            style={{
                                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                            }}
                            height={1000}
                            width={1000}
                        />
                        <button
                            className={`transform translate(${position.x}px, ${position.y}px) absolute top-4 right-4 h-10 w-10 text-white bg-teal rounded-full hover:bg-teal-500 text-2xl flex items-center justify-center`}
                            onClick={closeViewer}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageViewer;
