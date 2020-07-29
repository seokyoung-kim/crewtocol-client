import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ size, ...props }) => (
  <svg
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  />
);

SVG.propTypes = {
  size: PropTypes.number,
};

SVG.defaultProps = {
  size: 24,
};

export const ImageIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 6.5a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2.5a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3v-12a3 3 0 00-3-3H3zm18 2H3a1 1 0 00-1 1v12a1 1 0 001 1h4.314l6.878-6.879a3 3 0 014.243 0L22 15.186V5.5a1 1 0 00-1-1zm0 14H10.142l5.465-5.464a1 1 0 011.414 0l4.886 4.886A1 1 0 0121 18.5z"
    />
  </SVG>
);

export const BookmarkIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20h-1.828l-4.465-4.465a1 1 0 00-1.414 0L6.828 20H5V7a3 3 0 013-3h8a3 3 0 013 3v13zM17 7a1 1 0 00-1-1H8a1 1 0 00-1 1v10l2.879-2.879a3 3 0 014.242 0L17 17V7z"
    />
  </SVG>
);

export const BookmarkFullIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20h-1l-5.293-4.465a1 1 0 00-1.414 0L6 20H5V7a3 3 0 013-3h8a3 3 0 013 3v13z"
      fill="#7300F5"
    />
  </SVG>
);

export const SearchIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.319 15.307A8.001 8.001 0 005.343 4.743 8 8 0 0015.908 16.72l.042.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a.99.99 0 00-.045-.043zm-2.076-9.15a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486z"
    />
  </SVG>
);

export const CloseButtonIcon = (props) => (
  <SVG {...props}>
    <path d="M6.226 4.811A1 1 0 104.81 6.226L10.586 12l-5.774 5.775a1 1 0 101.414 1.414L12 13.415l5.775 5.774a1 1 0 001.414-1.414L13.415 12l5.774-5.774a1 1 0 10-1.414-1.415L12 10.586 6.226 4.811z" />
  </SVG>
);

export const HeartEmptyIcon = (props) => (
  <SVG {...props}>
    <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
  </SVG>
);

// fill="#ED4956"
export const HeartFullIcon = (props) => (
  <SVG {...props}>
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </SVG>
);

export const Pencil = (props) => (
  <SVG viewBox="0 0 512 512" {...props}>
    <g>
      <g>
        <polygon points="51.2,353.28 0,512 158.72,460.8 		" />
      </g>
    </g>
    <g>
      <g>
        <rect
          x="89.73"
          y="169.097"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.8575 260.3719)"
          width="353.277"
          height="153.599"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M504.32,79.36L432.64,7.68c-10.24-10.24-25.6-10.24-35.84,0l-23.04,23.04l107.52,107.52l23.04-23.04
			C514.56,104.96,514.56,89.6,504.32,79.36z"
        />
      </g>
    </g>
  </SVG>
);
