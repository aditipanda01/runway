import React, { useState, useEffect } from "react";
import jewebg from './assets/jewebg.jpeg';
import a1 from './assets/a1.jpeg';
import a2 from './assets/a2.jpeg';
import a3 from './assets/a3.jpeg';
import a4 from './assets/a4.jpeg';
import a5 from './assets/a5.jpeg';
import a6 from './assets/a6.jpeg';
import a7 from './assets/a7.jpeg';
import a8 from './assets/a8.jpeg';
import a9 from './assets/a9.jpeg';

// Import j1.jpeg to j37.jpeg from the jewellery folder
import j1 from './assets/jewellery/j1.jpeg';
import j2 from './assets/jewellery/j2.jpeg';
import j3 from './assets/jewellery/j3.jpeg';
import j4 from './assets/jewellery/j4.jpeg';
import j5 from './assets/jewellery/j5.jpeg';
import j6 from './assets/jewellery/j6.jpeg';
import j7 from './assets/jewellery/j7.jpeg';
import j8 from './assets/jewellery/j8.jpeg';
import j9 from './assets/jewellery/j9.jpeg';
import j10 from './assets/jewellery/j10.jpeg';
import j11 from './assets/jewellery/j11.jpeg';
import j12 from './assets/jewellery/j12.jpeg';
import j13 from './assets/jewellery/j13.jpeg';
import j14 from './assets/jewellery/j14.jpeg';
import j15 from './assets/jewellery/j15.jpeg';
import j16 from './assets/jewellery/j16.jpeg';
import j17 from './assets/jewellery/j17.jpeg';
import j18 from './assets/jewellery/j18.jpeg';
import j19 from './assets/jewellery/j19.jpeg';
import j20 from './assets/jewellery/j20.jpeg';
import j21 from './assets/jewellery/j21.jpeg';
import j22 from './assets/jewellery/j22.jpeg';
import j23 from './assets/jewellery/j23.jpeg';
import j24 from './assets/jewellery/j24.jpeg';
import j25 from './assets/jewellery/j25.jpeg';
import j26 from './assets/jewellery/j26.jpeg';
import j27 from './assets/jewellery/j27.jpeg';
import j28 from './assets/jewellery/j28.jpeg';
import j29 from './assets/jewellery/j29.jpeg';
import j30 from './assets/jewellery/j30.jpeg';
import j31 from './assets/jewellery/j31.jpeg';
import j32 from './assets/jewellery/j32.jpeg';
import j33 from './assets/jewellery/j33.jpeg';
import j34 from './assets/jewellery/j34.jpeg';
import j35 from './assets/jewellery/j35.jpeg';
import j36 from './assets/jewellery/j36.jpeg';
import j37 from './assets/jewellery/j37.jpeg';
import jbg from './assets/jbg.jpg';
import jbg1 from './assets/jbg1.jpg';
import jbg2 from './assets/jbg2.jpg';

import jbg3 from './assets/jbg3.jpeg';

const jewelleryImages = [
  j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12, j13, j14, j15, j16, j17, j18, j19, j20, j21, j22, j23, j24, j25, j26, j27, j28, j29, j30, j31, j32, j33, j34, j35, j36, j37
];
const avatarImages = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
const sliderImages = [jbg, jbg1, jbg2, jbg3];

function JewelleryAllureBanner() {
  return (
    <div
      style={{
        width: '100%',
        height: 180,
        background: 'rgba(30,30,30,0.3)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: "'Cormorant Garamond', serif",
        letterSpacing: 6,
        marginBottom: 0,
      }}
    >
      {/* Top line */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: '10%',
          width: '80%',
          height: 1,
          background: 'rgba(255,255,255,0.4)',
        }}
      />
      {/* Bottom line */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '10%',
          width: '80%',
          height: 1,
          background: 'rgba(255,255,255,0.4)',
        }}
      />
      {/* Main text */}
      <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: 12, zIndex: 1, marginBottom: 8 }}>
        Emotional & Personal
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: 2,
          zIndex: 1,
          textAlign: 'center',
          fontFamily: 'Montserrat, Arial, sans-serif',
          marginTop: 0,
        }}
      >
        "Not just ornaments, but moments you wear close to your heart."
      </div>
    </div>
  );
}

function DesignerInspirationCard({ designerName, mainImage, avatarImage, inspirationText }) {
  return (
    <div style={{
      background: '#8c8c8c',
      borderRadius: 5,
      boxShadow: '0 6px 24px #0001',
      width: 540,
      padding: 32,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      fontFamily: 'Montserrat, Arial, sans-serif',
      position: 'relative',
      margin: 24
    }}>
      {/* Main image (left) */}
      <div style={{
        width: 200,
        height: 400,
        borderRadius: 5,
        background: '#e5e1da',
        border: '2px solid #cfc9be',
        overflow: 'hidden',
        position: 'relative',
        marginRight: 32,
        flexShrink: 0
      }}>
        <img src={mainImage} alt="Jewellery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 10,
          background: '#d6d2c8',
          borderRadius: 5
        }} />
      </div>
      {/* Right side: Designer name and box */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 500,
          color: '#222',
          marginBottom: 18
        }}>
          {designerName}
        </div>
        {/* Box with image and inspiration */}
        <div style={{
          background: 'rgba(237, 231, 223, 0.5)',
          borderRadius: 5,
          padding: '18px 18px 18px 140px',
          position: 'relative',
          minHeight: 140,
          marginBottom: 12,
          boxShadow: '0 2px 8px #0001',
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Avatar in a circle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 14,
            top: 18,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(237, 231, 223, 0.5)',
          }}>
            <img
              src={avatarImage}
              alt="Avatar"
              style={{
                width: 110,
                height: 110,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #fff',
                boxShadow: '0 1px 4px #0002',
                background: '#fff',
              }}
            />
          </div>
          {/* Emojis and inspiration text vertically aligned */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginLeft: 24,
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 12 }}>
              <span style={{ color: '#222', fontSize: 32, fontWeight: 700 }}>♡</span>
              <span style={{ color: '#222', fontSize: 32 }}>🗨️</span>
              <span style={{ color: '#222', fontSize: 32 }}>🔗</span>
            </div>
            <div style={{ fontSize: 15, color: '#222', fontWeight: 400, textAlign: 'left', width: '100%' }}>
              {inspirationText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const JewelleryPage = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + sliderImages.length) % sliderImages.length);
  const nextSlide = () => setCurrent((current + 1) % sliderImages.length);

  // Auto-advance slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Banner */}
      <div style={{ background: '#d3d3d3', width: '100vw', height: '60vh', minHeight: '60vh', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>
        {/* Background image with opacity for this section only */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: `url(${jbg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 2, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
          <div style={{ width: 900, maxWidth: '90vw', margin: '0 auto', top: 70, position: 'relative' }}>
            <JewelleryAllureBanner />
          </div>
        </div>
        {/* Slider with arrows */}
        <div style={{ position: 'relative', width: '100%', height: '100%', background: '#d3d3d3', borderRadius: 12, boxShadow: '0 2px 12px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img src={sliderImages[current]} alt="Jewellery Slide" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8, transition: 'all 0.4s cubic-bezier(.4,2,.6,1)' }} />
          {/* Left arrow */}
          <button onClick={prevSlide} style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, boxShadow: '0 2px 8px #0002', cursor: 'pointer', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&lt;</button>
          {/* Right arrow */}
          <button onClick={nextSlide} style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, boxShadow: '0 2px 8px #0002', cursor: 'pointer', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&gt;</button>
        </div>
      </div>
      {/* Feature Circle */}
      <div style={{ position: 'absolute', left: '50%', top: '70vh', transform: 'translate(-50%, -50%)', width: 320, height: 320, borderRadius: '50%', background: '#fff', boxShadow: '0 8px 32px #0004', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '8px solid #d3d3d3', zIndex: 2 }}>
        <img src={jewebg} alt="Jewellery Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Designer Inspiration Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, justifyItems: 'center', width: '100%', marginTop: 120, marginBottom: 80 }}>
        {jewelleryImages.map((img, idx) => (
          <DesignerInspirationCard
            key={idx}
            designerName={`Designer ${idx + 1}`}
            mainImage={img}
            avatarImage={avatarImages[idx % avatarImages.length]}
            inspirationText={"Inspiration for this jewellery piece goes here."}
          />
        ))}
      </div>
      {/* Footer */}
      <footer style={{ width: '100%', background: '#222', color: '#fff', textAlign: 'center', padding: '32px 0 20px 0', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 16, letterSpacing: 1, marginTop: 40 }}>
        &copy; {new Date().getFullYear()} Designer Gallery. All rights reserved.
      </footer>
    </div>
  );
};

export default JewelleryPage; 