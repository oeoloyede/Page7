import { memo, SVGProps } from 'react';

const Rectangle24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 374 111'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <path d='M0 0H374V111H0V0Z' fill='url(#pattern0)' stroke='black' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_117_160' transform='matrix(0.00108696 0 0 0.00366236 0 -0.41559)' />
      </pattern>
      <image
        id='image0_117_160'
        width={920}
        height={500}
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
);

const Memo = memo(Rectangle24Icon);
export { Memo as Rectangle24Icon };
