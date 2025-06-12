import { ImageResponse } from 'next/og'
 
export const alt = 'Draw2Cost - AI-Powered Construction Cost Estimation'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontSize: '80px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            Draw2Cost
          </div>
          <div
            style={{
              color: 'white',
              fontSize: '36px',
              fontWeight: '500',
              maxWidth: '800px',
              lineHeight: '1.2',
              marginBottom: '30px',
            }}
          >
            AI-Powered Construction Cost Estimation
          </div>
          <div
            style={{
              color: '#94a3b8',
              fontSize: '24px',
              maxWidth: '700px',
              lineHeight: '1.3',
            }}
          >
            Revolutionize your construction planning with instant, accurate cost predictions
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
