import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Bukky Group - Excellence in Everything We Do'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // Font loading for Cinzel (Serif)
  const cinzelFont = await fetch(
    new URL(
      'https://fonts.gstatic.com/s/cinzel/v19/8vIJ7wvpQCtsrVHxpcM.ttf',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer())

  // Font loading for Inter (Sans)
  const interFont = await fetch(
    new URL(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.ttf',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a', // Dark Charcoal Black
        backgroundImage: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
        fontFamily: '"Cinzel"',
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 25px 25px, rgba(197, 160, 40, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(197, 160, 40, 0.1) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          opacity: 0.3,
        }}
      />

      {/* Decorative Ring */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '2px dashed rgba(197, 160, 40, 0.2)', // brand-gold with opacity
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'scale(0.8)',
        }}
      />

      {/* Brand Name */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 900,
            color: '#f2f2f2', // foreground
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          Bukky Group
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{ width: '40px', height: '1px', backgroundColor: '#C5A028' }}
          />{' '}
          {/* brand-gold */}
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: 24,
              fontWeight: 500,
              color: '#C5A028', // brand-gold
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Excellence Redefined
          </div>
          <div
            style={{ width: '40px', height: '1px', backgroundColor: '#C5A028' }}
          />
        </div>
      </div>

      {/* Bottom Tagline/URL */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          fontFamily: '"Inter"',
          fontSize: 18,
          color: 'rgba(255, 255, 255, 0.5)',
          letterSpacing: '0.1em',
        }}
      >
        bukkygroup.com
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Cinzel',
          data: cinzelFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interFont,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
