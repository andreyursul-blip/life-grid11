import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const width = Number(searchParams.get('width') ?? '1179');
  const height = Number(searchParams.get('height') ?? '2556');

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'black',
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ТЕСТ УСПЕШЕН! Грид заработает следующим шагом
      </div>
    ),
    { width, height }
  );
}
