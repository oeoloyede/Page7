import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.2493 18.9096C13.2493 15.5959 15.9356 12.9096 19.2493 12.9096C22.563 12.9096 25.2493 15.5959 25.2493 18.9096C25.2493 20.3865 24.7158 21.7387 23.8309 22.7841L23.6029 22.5561L22.8958 23.2632L23.1237 23.4912C22.0784 24.3761 20.7262 24.9096 19.2493 24.9096C15.9356 24.9096 13.2493 22.2233 13.2493 18.9096ZM23.833 24.2004C22.6049 25.2652 21.0024 25.9096 19.2493 25.9096C15.3833 25.9096 12.2493 22.7756 12.2493 18.9096C12.2493 15.0436 15.3833 11.9096 19.2493 11.9096C23.1153 11.9096 26.2493 15.0436 26.2493 18.9096C26.2493 20.6627 25.6049 22.2652 24.5401 23.4933L28.6029 27.5561L27.8958 28.2632L23.833 24.2004Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
