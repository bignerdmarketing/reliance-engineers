import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Reliance Engineers — Infrastructure Engineering Excellence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D2A44',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: '80px',
            height: '6px',
            background: '#C6A24A',
            marginBottom: '32px',
          }}
        />
        {/* Company name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Reliance Engineers
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: '#C6A24A',
            marginBottom: '40px',
          }}
        >
          Infrastructure Engineering Excellence
        </div>
        {/* Descriptor */}
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          Bridge · Tunnel · Geotechnical · Project Delivery | DBE Certified in 10 States
        </div>
        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          reliance-eng.com
        </div>
      </div>
    ),
    { ...size }
  );
}
