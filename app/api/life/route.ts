import { ImageResponse } from '@vercel/vercel';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div 
        style={{
          fontSize: 60,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Тест: Life Grid работает!
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
