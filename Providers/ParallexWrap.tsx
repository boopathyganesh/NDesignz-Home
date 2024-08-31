"use client"
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const ParallexWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <ParallaxProvider scrollAxis='vertical'>
            {children}
        </ParallaxProvider>
    )
}

export default ParallexWrap
