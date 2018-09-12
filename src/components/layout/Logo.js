import React from 'react';

const Logo = () => {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='logo-b'>
          <stop stopColor='#A8A3F6' offset='0%' />
          <stop stopColor='#DAD8FF' offset='100%' />
        </linearGradient>
        <path d='M27.098 7.53l-9.441 9.44a8.084 8.084 0 0 0-.625.702 8 8 0 0 0 12.173 10.377l9.24-9.24A16.02 16.02 0 0 1 39 23c0 8.837-7.163 16-16 16S7 31.837 7 23 14.163 7 23 7c1.416 0 2.79.184 4.098.53z'
          id='logo-a' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='logo-d'>
          <stop stopColor='#DAD8FF' offset='0%' />
          <stop stopColor='#857DF3' offset='100%' />
        </linearGradient>
        <path d='M27.098 7.53l-9.441 9.44a8.084 8.084 0 0 0-.625.702 8 8 0 0 0 12.173 10.377l9.24-9.24A16.02 16.02 0 0 1 39 23c0 8.837-7.163 16-16 16S7 31.837 7 23 14.163 7 23 7c1.416 0 2.79.184 4.098.53z'
          id='logo-c' />
      </defs>
      <g transform='translate(-7 -7)' fill='none' fillRule='evenodd'>
        <use fill='url(#logo-b)' transform='rotate(45 23 23)' xlinkHref='#logo-a' />
        <use fill='url(#logo-d)' transform='scale(-1 1) rotate(45 0 -32.527)' xlinkHref='#logo-c' />
      </g>
    </svg>
  )
}

export default Logo;
