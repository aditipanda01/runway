import React, { useState } from "react";
// Import images from SHoes folder (placeholders for now)
import shoe1 from "./assets/SHoes/Shoes (1).jpeg";
import shoe2 from "./assets/SHoes/Best Shoes Coloring Book – Fun & Stylish Designs for All Ages (USA).jpeg";
import shoe3 from "./assets/SHoes/Shoe Sketch - fashion illustration; footwear drawing __ Caroline Andrieu.jpeg";
import shoe4 from "./assets/SHoes/Ultimate Shoe Collection_ A Coloring Book for Men & Women - From Classic to Trendy Styles.jpeg";
import shoe5 from "./assets/SHoes/Ultimate Shoe Collection_ A Coloring Book for Men & Women - From Classic to Trendy Styles (1).jpeg";
import shoe6 from "./assets/SHoes/Ultimate Shoe Collection_ A Coloring Book for Men & Women - From Classic to Trendy Styles (2).jpeg";
import shoe7 from "./assets/SHoes/Shop Exclusive Beauty Products, Browse Makeup Tutorials and Reviews.jpeg";
import bgshoes from "./assets/bgshoes.jpeg";
import shoesbg2 from "./assets/shoesbg2.jpg";
import shoesbg3 from "./assets/shoesbg3.jpg";

import shoesbg5 from "./assets/shoesbg5.jpeg";

import a1 from "./assets/a1.jpeg";
import a2 from "./assets/a2.jpeg";
import a3 from "./assets/a3.jpeg";
import a4 from "./assets/a4.jpeg";
import a5 from "./assets/a5.jpeg";
import a6 from "./assets/a6.jpeg";
import a7 from "./assets/a7.jpeg";
import a8 from "./assets/a8.jpeg";
import a9 from "./assets/a9.jpeg";

import download1 from "./assets/SHoes/download (1).jpeg";
import download2 from "./assets/SHoes/download (2).jpeg";
import download3 from "./assets/SHoes/download (3).jpeg";
import download4 from "./assets/SHoes/download (4).jpeg";
import download5 from "./assets/SHoes/download (5).jpeg";
import download6 from "./assets/SHoes/download (6).jpeg";
import download7 from "./assets/SHoes/download (7).jpeg";
import download8 from "./assets/SHoes/download (8).jpeg";
import download9 from "./assets/SHoes/download (9).jpeg";

// Placeholder arrays for slider and avatar images
const sliderImages = [shoesbg2, shoesbg3, shoesbg5]; // Replace with user-provided images
const avatarImages = [a1, a2, a3, a4, a5, a6, a7, a8, a9]; // Replace with user-provided images
const mainImages = [download1, download2, download3, download4, download5, download6, download7, download8, download9];

// Designer data array
const designers = [
  {
    name: "Liyana Sheikh",
    avatar: a1,
    mainImage: download1,
    inspiration: "Soft drapes, quiet power. Inspired by women who lead without volume. Modest fashion, modern edge.",
  },
  {
    name: "Tara Mehta",
    avatar: a2,
    mainImage: download2,
    inspiration: "Bold pigments + architectural pleats. I paint feelings in fabric so you can wear your mood unapologetically.",
  },
];

// Replace AllureBanner with new banner
function ShoesAllureBanner() {
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
      <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: 12, zIndex: 1, marginBottom: 8, color: '#fff' }}>
        Witty & Catchy
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
          color: '#fff',
        }}
      >
        "Good shoes take you places. Great ones take you further."
      </div>
    </div>
  );
}

const ShoesPage = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + sliderImages.length) % sliderImages.length);
  const nextSlide = () => setCurrent((current + 1) % sliderImages.length);
  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', overflow: 'hidden' }}>
      {/* Grey section (top, 60%) with AllureBanner overlay */}
      <div style={{ background: '#d3d3d3', width: '100vw', height: '60vh', minHeight: '60vh', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>
        {/* AllureBanner as overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 2, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
          <div style={{ width: 900, maxWidth: '90vw', margin: '0 auto', top: 70, position: 'relative' }}>
            {/* AllureBanner component can be reused here if needed */}
            <ShoesAllureBanner />
          </div>
        </div>
        {/* Slider with arrows */}
        <div style={{ position: 'relative', width: '100%', height: '100%', background: '#d3d3d3', borderRadius: 12, boxShadow: '0 2px 12px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img src={sliderImages[current]} alt="Shoe Slide" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8, transition: 'all 0.4s cubic-bezier(.4,2,.6,1)' }} />
          {/* Left arrow */}
          <button onClick={prevSlide} style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, boxShadow: '0 2px 8px #0002', cursor: 'pointer', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&lt;</button>
          {/* Right arrow */}
          <button onClick={nextSlide} style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, boxShadow: '0 2px 8px #0002', cursor: 'pointer', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&gt;</button>
        </div>
      </div>
      {/* Black section (bottom, 40%) */}
      <div style={{ position: 'absolute', left: '50%', top: '70vh', transform: 'translate(-50%, -50%)', width: 320, height: 320, borderRadius: '50%', background: '#fff', boxShadow: '0 8px 32px #0004', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '8px solid #d3d3d3', zIndex: 2 }}>
        <img src={bgshoes} alt="Shoe Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Designer Inspiration Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, justifyItems: 'center', width: '100%', marginTop: 180, marginBottom: 80 }}>
        {[...Array(4)].map((_, idx) => {
          const designer = designers[idx % designers.length];
          return (
            <div key={idx} style={{ background: '#8c8c8c', borderRadius: 5, boxShadow: '0 6px 24px #0001', width: 570, padding: 32, display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Montserrat, Arial, sans-serif', position: 'relative', margin: 24, minHeight: 420 }}>
              {/* Main image (left) */}
              <img src={designer.mainImage} alt="Phone Case Design" style={{ width: 270, height: 400, objectFit: 'cover', borderRadius: 5, background: '#e5e1da', border: '2px solid #cfc9be', marginRight: 24, flexShrink: 0 }} />
              {/* Right card: name above info box, then avatar, emojis, inspiration */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                {/* Name (outside info box) */}
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 500, color: '#222', marginBottom: 10, marginLeft: 8 }}>
                  {designer.name}
                </div>
                {/* Info box */}
                <div style={{ width: 240, height: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', background: 'rgba(237, 231, 223, 0.5)', borderRadius: 5, padding: 20, boxSizing: 'border-box', overflowWrap: 'break-word' }}>
                  {/* Avatar in a circle (top) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 120, height: 120, borderRadius: '50%', background: '#fff', marginBottom: 10 }}>
                    <img src={designer.avatar} alt="Avatar" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '2px solid #cfc9be', boxShadow: '0 1px 4px #0002', background: '#fff' }} />
                  </div>
                  {/* Emojis row (below avatar) */}
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 14, marginLeft: 4 }}>
                    <span style={{ color: '#222', fontSize: 32, fontWeight: 700 }}>♡</span>
                    <span style={{ color: '#222', fontSize: 32 }}>🗨️</span>
                    <span style={{ color: '#222', fontSize: 32 }}>🔗</span>
                  </div>
                  {/* Inspiration text (below avatar+emojis row) */}
                  <div style={{ fontSize: 15, color: '#222', fontWeight: 400, textAlign: 'left', width: '100%' }}>
                    {designer.inspiration}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Shoes Gallery Section - as designer cards */}
      <div style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, justifyItems: 'center' }}>
          {[shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, download1, download2, download3, download4, download5, download6, download7, download8, download9].map((img, idx) => {
            const designer = designers[idx % designers.length];
            return (
              <div key={idx} style={{ background: '#8c8c8c', borderRadius: 5, boxShadow: '0 6px 24px #0001', width: 570, padding: 32, display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Montserrat, Arial, sans-serif', position: 'relative', margin: 24, minHeight: 420 }}>
                {/* Main image (left) */}
                <img src={img} alt={`Shoe Design ${idx + 1}`} style={{ width: 270, height: 400, objectFit: 'cover', borderRadius: 5, background: '#e5e1da', border: '2px solid #cfc9be', marginRight: 24, flexShrink: 0 }} />
                {/* Right card: name above info box, then avatar, emojis, inspiration */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  {/* Name (outside info box) */}
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 500, color: '#222', marginBottom: 10, marginLeft: 8 }}>
                    {designer.name}
                  </div>
                  {/* Info box */}
                  <div style={{ width: 240, height: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', background: 'rgba(237, 231, 223, 0.5)', borderRadius: 5, padding: 20, boxSizing: 'border-box', overflowWrap: 'break-word' }}>
                    {/* Avatar in a circle (top) */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 120, height: 120, borderRadius: '50%', background: '#fff', marginBottom: 10 }}>
                      <img src={designer.avatar} alt="Avatar" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '2px solid #cfc9be', boxShadow: '0 1px 4px #0002', background: '#fff' }} />
                    </div>
                    {/* Emojis row (below avatar) */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 14, marginLeft: 4 }}>
                      <span style={{ color: '#222', fontSize: 32, fontWeight: 700 }}>♡</span>
                      <span style={{ color: '#222', fontSize: 32 }}>🗨️</span>
                      <span style={{ color: '#222', fontSize: 32 }}>🔗</span>
                    </div>
                    {/* Inspiration text (below avatar+emojis row) */}
                    <div style={{ fontSize: 15, color: '#222', fontWeight: 400, textAlign: 'left', width: '100%' }}>
                      {designer.inspiration}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <footer style={{ width: '100%', background: '#222', color: '#fff', textAlign: 'center', padding: '32px 0 20px 0', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 16, letterSpacing: 1, marginTop: 40 }}>
        &copy; {new Date().getFullYear()} Designer Gallery. All rights reserved.
      </footer>
    </div>
  );
};

export default ShoesPage; 