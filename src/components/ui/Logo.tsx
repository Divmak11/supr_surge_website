"use client";
import React from 'react';
import Image from 'next/image';

const Logo = () => (
  <div style={{
    width: 56,
    height: 56,
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
  }}>
    <Image
      src="/logo.png"
      alt="Brand & Butter"
      width={64}
      height={64}
      priority
      style={{
        objectFit: 'contain',
        transform: 'scale(1.2)', // Zoom in slightly to hide the background edges
      }}
    />
  </div>
);

export default Logo;
