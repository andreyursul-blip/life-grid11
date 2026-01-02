import { ImageResponse } from '@vercel/og';

export const runtime =;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const height = Number(searchParams.get('height') ?? '2556');
  const width = Number(searchParams.get('width') ?? '1179');

  const birth = new Date(1996, 11, 4);
  const now = new Date();
  const weeks = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 7));

  const birthdays = new Set();
  for (let i = 1; i <= 89; i++) {
    const bd = new Date(1996 + i, 11, 4);
    birthdays.add(Math.floor((bd.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 7)));
  }

  const scale = width / 1179;
  const dot = 4.4 * scale;
  const gap = 2.6 * scale;
  const cell = dot + gap;
  const left = 38 * scale;
  const top = 38 * scale;
  const right = 12 * scale;
  const bottom = 32 * scale;

  const gridW = 52 * cell;
  const gridH = 90 * cell;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={gridW + left + right} height={gridH + top + bottom} viewBox={`0 0 ${gridW + left + right} ${gridH + top + bottom}`}>
          {/* точки */}
          {Array.from({ length: 52 * 90 }, (_, i) => {
            const row = Math.floor(i / 52);
            const col = i % 52;
            const x = left + col * cell + cell / 2;
            const y = top + row * cell + cell / 2;

            let color = '#e5e5e5';
            if (i < weeks) color = birthdays.has(i) ? '#d32f2f' : '#222';
            else if (i === weeks) color = '#f57c00';
            else color = birthdays.has(i) ? '#d32f2f' : '#e5e5e5';

            return <circle key={i} cx={x} cy={y} r={dot / 2} fill={color} />;
          })}
        </svg>
      </div>
    ),
    { width, height }
  );
}
