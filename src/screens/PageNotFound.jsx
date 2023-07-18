import React from "react";
import { Section, H3, H1 } from "src/components";
import styled from "styled-components";
// import cat from "src/assets/sample/pageNotFound.svg"

const CustomSection = styled(Section)`
  min-height: 70dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    svg#freepik_stories-404-error-with-a-cute-animal:not(.animated) .animable {
      opacity: 0;
    }

    svg#freepik_stories-404-error-with-a-cute-animal.animated
      #freepik--Character--inject-3 {
      animation: 1.5s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
        1.5s Infinite linear floating;
      animation-delay: 0s, 1.5s;
    }

    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes floating {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-10px);
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
`;

// function Icon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="animated"
//       version="1.1"
//       viewBox="0 0 500 500"
//     >
//       <g
//         className="animable"
//         style={{
//           WebkitTransformOrigin: 243.398,
//           MsTransformOrigin: 243.398,
//           transformOrigin: 243.398,
//         }}
//       >
//         <path
//           d="M41.06 263.18s2.34 72.67 63 121.11 144.74 51.91 212.8 56.52 120.33-33.93 128.2-92.17S401 273.31 372.73 207 347 118.92 287.33 78.15s-153.1-15.74-202.06 54.12-44.21 130.91-44.21 130.91z"
//           style={{
//             WebkitTransformOrigin: 243.398,
//             MsTransformOrigin: 243.398,
//             transformOrigin: 243.398,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <g>
//           <path
//             d="M41.06 263.18s2.34 72.67 63 121.11 144.74 51.91 212.8 56.52 120.33-33.93 128.2-92.17S401 273.31 372.73 207 347 118.92 287.33 78.15s-153.1-15.74-202.06 54.12-44.21 130.91-44.21 130.91z"
//             style={{
//               WebkitTransformOrigin: 243.398,
//               MsTransformOrigin: 243.398,
//               transformOrigin: 243.398,
//             }}
//             fill="#FFF"
//             className="animable"
//             opacity="0.7"
//           ></path>
//         </g>
//       </g>
//       <g
//         className="animable"
//         style={{
//           WebkitTransformOrigin: 250,
//           MsTransformOrigin: 250,
//           transformOrigin: 250,
//         }}
//       >
//         <path
//           style={{
//             WebkitTransformOrigin: 64.08,
//             MsTransformOrigin: 64.08,
//             transformOrigin: 64.08,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M68.67 380.53L59.49 380.53"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 261.85,
//             MsTransformOrigin: 261.85,
//             transformOrigin: 261.85,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M440.51 380.53L83.19 380.53"
//           className="animable"
//         ></path>
//       </g>
//       <g
//         className="animable"
//         style={{
//           WebkitTransformOrigin: 243.125,
//           MsTransformOrigin: 243.125,
//           transformOrigin: 243.125,
//         }}
//       >
//         <ellipse
//           cx="306.07"
//           cy="410.55"
//           fill="#263238"
//           rx="30.39"
//           ry="8.36"
//           style={{
//             WebkitTransformOrigin: 306.07,
//             MsTransformOrigin: 306.07,
//             transformOrigin: 306.07,
//           }}
//           className="animable"
//         ></ellipse>
//         <path
//           d="M149 429.54c-31.63 0-36.3-4.57-36.76-8.26a5 5 0 011.44-4.23c8.52-8.94 57.62-5.16 125.56.07 9.48.73 19.28 1.48 29.33 2.23 68.65 5.1 96.29 4.44 102-2.46 1.16-1.41 1.4-3.17.76-5.55-2.72-9.95-39.08-10-52.85-9.22a1.2 1.2 0 01-1.26-1.12 1.18 1.18 0 011.12-1.25c5.27-.31 51.57-2.64 55.28 11 .85 3.14.46 5.65-1.22 7.69-6.41 7.78-32.65 8.61-104 3.31-10.06-.75-19.86-1.5-29.34-2.23-64.76-5-115.92-8.93-123.66-.8a2.65 2.65 0 00-.8 2.29c.29 2.36 6 7.64 52 5.8 25.73-1 51.58-3.83 51.84-3.86a1.19 1.19 0 01.26 2.36c-.26 0-26.19 2.84-52 3.87-6.64.24-12.52.36-17.7.36z"
//           style={{
//             WebkitTransformOrigin: 243.125,
//             MsTransformOrigin: 243.125,
//             transformOrigin: 243.125,
//           }}
//           fill="#FFF"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <circle
//           cx="294.77"
//           cy="382.08"
//           r="35.81"
//           style={{
//             WebkitTransformOrigin: 294.77,
//             MsTransformOrigin: 294.77,
//             transformOrigin: 294.77,
//           }}
//           fill="#FFF"
//           className="animable"
//         ></circle>
//         <g
//           style={{
//             WebkitTransformOrigin: 294.91,
//             MsTransformOrigin: 294.91,
//             transformOrigin: 294.91,
//           }}
//           className="animable"
//           clipPath='url("#freepik--clip-path--inject-3")'
//         >
//           <path
//             d="M294.77 417.89a35.8 35.8 0 0029.58-56c-.39 15.6-9 38.63-53.78 46.55a35.67 35.67 0 0024.2 9.45z"
//             style={{
//               WebkitTransformOrigin: 300.582,
//               MsTransformOrigin: 300.582,
//               transformOrigin: 300.582,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M294.77 417.89a35.8 35.8 0 0029.58-56c-.39 15.6-9 38.63-53.78 46.55a35.67 35.67 0 0024.2 9.45z"
//               style={{
//                 WebkitTransformOrigin: 300.582,
//                 MsTransformOrigin: 300.582,
//                 transformOrigin: 300.582,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.3"
//             ></path>
//           </g>
//           <path
//             d="M312.39 396.12a56.94 56.94 0 00-22.64-13.51 56.94 56.94 0 0122.64 13.51h1.9a65.76 65.76 0 0010.79-14.06C308.31 364.34 292 366.15 292 366.15s16.36-1.81 33.13 15.93c.92-1.65 1.69-3.2 2.32-4.63-6.98-9.78-19-16.45-25.45-17.45l-1.5-.36a21.24 21.24 0 00-7-.1 21.24 21.24 0 017 .1l4.27-12a35.8 35.8 0 00-6.17-1.19c-2.77 4.47-9.9 18.75-9.9 47.08 0-28.33 7.13-42.61 9.9-47.08-1.2-.11-2.4-.18-3.63-.18a36.1 36.1 0 00-4.05.24c-4.22 6.38-12.29 21.45-12.83 44.07 8.37 3.05 19.57 5.33 34.3 5.54zm8.09-7.29c-14.26-13.9-30-14.63-30-14.63s15.74.73 30 14.63z"
//             style={{
//               WebkitTransformOrigin: 302.77,
//               MsTransformOrigin: 302.77,
//               transformOrigin: 302.77,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M278.05 390.64c.54-22.62 8.61-37.69 12.83-44.07a35.83 35.83 0 00-9.61 2.46 71.37 71.37 0 00-12.35 37.6 65.21 65.21 0 009.13 4.01z"
//             style={{
//               WebkitTransformOrigin: 279.9,
//               MsTransformOrigin: 279.9,
//               transformOrigin: 279.9,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M281.27 349a35.88 35.88 0 00-22.12 30.72 46.11 46.11 0 009.77 6.88 71.37 71.37 0 0112.35-37.6z"
//             style={{
//               WebkitTransformOrigin: 270.21,
//               MsTransformOrigin: 270.21,
//               transformOrigin: 270.21,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M327.4 377.45a44.18 44.18 0 002-5.3 36 36 0 00-7.63-13.78l-2.77 9.24 2.72-9.24a36 36 0 00-7.55-6.42l-3.05 11.41 3.07-11.36a35.45 35.45 0 00-9.46-4.25l-4.27 12c6.54.94 16.65 4.79 26.94 17.7z"
//             style={{
//               WebkitTransformOrigin: 314.93,
//               MsTransformOrigin: 314.93,
//               transformOrigin: 314.93,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M330.77 383.77v-1.56a35.87 35.87 0 00-1.44-10.06 44.18 44.18 0 01-2 5.3h0a22.69 22.69 0 01-1.52 3.06c.06.06-.86 1.51-.8 1.57s-1 1.8-1 1.74c-2.38 4.23-9.56 12.33-9.44 12.33-.12 0-3.88 3.41-5.93 5.13h0a98.79 98.79 0 01-11.89 8.45h.26-.26a124.09 124.09 0 01-12.69 6.7 36 36 0 0010.81 1.66h1.8c7.33-3.99 18.98-13.09 34.1-34.32z"
//             style={{
//               WebkitTransformOrigin: 307.415,
//               MsTransformOrigin: 307.415,
//               transformOrigin: 307.415,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M330.77 383.77C315.65 405 304 414.1 296.73 418a35.88 35.88 0 0034.04-34.23z"
//             style={{
//               WebkitTransformOrigin: 313.75,
//               MsTransformOrigin: 313.75,
//               transformOrigin: 313.75,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M266.89 404.57a35.86 35.86 0 0017.23 11.86 124.09 124.09 0 0012.69-6.7c-8.54 1.58-21.9-2.34-29.92-5.16z"
//             style={{
//               WebkitTransformOrigin: 281.85,
//               MsTransformOrigin: 281.85,
//               transformOrigin: 281.85,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M296.81 409.73a98.79 98.79 0 0011.89-8.45c-25.79 2.64-41.7-5.35-48.46-9.89a35.76 35.76 0 006.65 13.18c8.02 2.82 21.38 6.74 29.92 5.16z"
//             style={{
//               WebkitTransformOrigin: 284.47,
//               MsTransformOrigin: 284.47,
//               transformOrigin: 284.47,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//           <path
//             d="M308.7 401.28a83.94 83.94 0 005.59-5.14h-1.9c.14.13.28.26.41.4-.13-.14-.27-.27-.41-.4-14.73-.21-25.93-2.49-34.34-5.48v0c-12.29-4.26-16.72-8.84-18.9-10.89-.06.82-.1 1.63-.1 2.46a36.1 36.1 0 001.19 9.18c6.76 4.52 22.67 12.51 48.46 9.87z"
//             style={{
//               WebkitTransformOrigin: 286.67,
//               MsTransformOrigin: 286.67,
//               transformOrigin: 286.67,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//         </g>
//         <circle
//           cx="294.77"
//           cy="382.08"
//           r="35.81"
//           style={{
//             WebkitTransformOrigin: 294.77,
//             MsTransformOrigin: 294.77,
//             transformOrigin: 294.77,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></circle>
//       </g>
//       <g
//         className="animable animator-active"
//         style={{
//           WebkitTransformOrigin: 389.495,
//           MsTransformOrigin: 389.495,
//           transformOrigin: 389.495,
//         }}
//       >
//         <path
//           d="M360.73 320.88s-2.45-7.95-9.59-10.81c-5-2-10.67-1.46-15.82-.57-9.58 1.67-17.94 5.48-27 8.73 0 0 3.88-1.43 19.79 6.33 5.86 2.85 12.56 5.07 19.26 4.92 5.37-.12 13.63-1.66 13.36-8.6z"
//           style={{
//             WebkitTransformOrigin: 334.528,
//             MsTransformOrigin: 334.528,
//             transformOrigin: 334.528,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           d="M361.59 297.51s0-8.33-6-13.12c-4.18-3.34-9.8-4.49-15-5.12-9.66-1.17-18.76.06-28.4.55 0 0 4.13-.24 17.12 11.78 4.79 4.42 10.57 8.48 17 10.27 5.18 1.44 13.52 2.36 15.28-4.36z"
//           style={{
//             WebkitTransformOrigin: 336.89,
//             MsTransformOrigin: 336.89,
//             transformOrigin: 336.89,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           d="M378 328.42s-6.49-5.21-6.51-12.9c0-5.35 2.57-10.46 5.3-14.91 5.08-8.3 11.7-14.66 18.08-21.91 0 0-2.76 3.08-1.42 20.73.5 6.5.08 13.55-2.53 19.72-2.05 4.96-6.52 12.07-12.92 9.27z"
//           style={{
//             WebkitTransformOrigin: 383.18,
//             MsTransformOrigin: 383.18,
//             transformOrigin: 383.18,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           d="M401 341.2s-.92-8.27 4.5-13.73c3.76-3.79 9.21-5.59 14.28-6.81 9.46-2.28 18.64-2.11 28.27-2.74 0 0-4.12.23-15.64 13.67-4.24 5-9.51 9.65-15.72 12.18-4.95 2.03-13.13 3.9-15.69-2.57z"
//           style={{
//             WebkitTransformOrigin: 424.495,
//             MsTransformOrigin: 424.495,
//             transformOrigin: 424.495,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           d="M399.53 311.71s-8.25-1.13-12.21-7.72c-2.76-4.58-3.17-10.3-3.12-15.52.1-9.72 2.52-18.59 4.27-28.08 0 0-.79 4.06 9.43 18.51 3.76 5.33 7 11.59 8 18.23.71 5.33.52 13.72-6.37 14.58z"
//           style={{
//             WebkitTransformOrigin: 395.186,
//             MsTransformOrigin: 395.186,
//             transformOrigin: 395.186,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           d="M423.27 296.9s5.93 5.84 13.57 5c5.31-.61 10.09-3.78 14.19-7 7.64-6 13.19-13.34 19.64-20.51 0 0-2.73 3.09-20.42 3.82-6.51.27-13.46 1.5-19.29 4.82-4.68 2.62-11.21 7.89-7.69 13.87z"
//           style={{
//             WebkitTransformOrigin: 446.469,
//             MsTransformOrigin: 446.469,
//             transformOrigin: 446.469,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           d="M416.4 291.13s8.28.83 13.68-4.64c3.76-3.81 5.5-9.27 6.67-14.36 2.18-9.47 1.92-18.66 2.44-28.29 0 0-.18 4.12-13.51 15.78-4.9 4.29-9.55 9.61-12 15.84-1.99 5.01-3.78 13.21 2.72 15.67z"
//           style={{
//             WebkitTransformOrigin: 425.518,
//             MsTransformOrigin: 425.518,
//             transformOrigin: 425.518,
//           }}
//           fill="#3AC4B2"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 371.435,
//             MsTransformOrigin: 371.435,
//             transformOrigin: 371.435,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M386.83 371.74L372.53 336.55 356.04 295.86"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 404.975,
//             MsTransformOrigin: 404.975,
//             transformOrigin: 404.975,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M390.13 365.69L404.42 316.76 419.82 286.52"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 402.77,
//             MsTransformOrigin: 402.77,
//             transformOrigin: 402.77,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M395.62 346.45L409.92 338.2"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 400.845,
//             MsTransformOrigin: 400.845,
//             transformOrigin: 400.845,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M404.42 316.76L397.27 300.81"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 422.09,
//             MsTransformOrigin: 422.09,
//             transformOrigin: 422.09,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M413.37 300.89L430.81 293.11"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 378.305,
//             MsTransformOrigin: 378.305,
//             transformOrigin: 378.305,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M375.28 343.15L381.33 318.96"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 360.275,
//             MsTransformOrigin: 360.275,
//             transformOrigin: 360.275,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           d="M367.26 324.76L353.29 317.31"
//           className="animable"
//         ></path>
//         <path
//           d="M394.16 389.33h-11.92a8.37 8.37 0 01-8.22-6.81l-4.24-22.33h36.84l-4.23 22.33a8.38 8.38 0 01-8.23 6.81z"
//           style={{
//             WebkitTransformOrigin: 388.2,
//             MsTransformOrigin: 388.2,
//             transformOrigin: 388.2,
//           }}
//           fill="#263238"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//       </g>
//       <g
//         className="animable"
//         style={{
//           WebkitTransformOrigin: 123.245,
//           MsTransformOrigin: 123.245,
//           transformOrigin: 123.245,
//         }}
//       >
//         <path
//           d="M58.66 253.2c0-2.77 1.28-4.81 4.16-4.81s4.21 2 4.21 4.81v9.72c0 2.77-1.28 4.81-4.21 4.81s-4.16-2-4.16-4.81zm1.25 9.8c0 2.07.82 3.59 2.91 3.59s3-1.52 3-3.59v-9.88c0-2.07-.84-3.59-3-3.59s-2.91 1.52-2.91 3.59z"
//           style={{
//             WebkitTransformOrigin: 62.845,
//             MsTransformOrigin: 62.845,
//             transformOrigin: 62.845,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M69 253.2c0-2.77 1.28-4.81 4.16-4.81s4.21 2 4.21 4.81v9.72c0 2.77-1.28 4.81-4.21 4.81s-4.16-2-4.16-4.81zm1.25 9.8c0 2.07.82 3.59 2.91 3.59s3-1.52 3-3.59v-9.88c0-2.07-.84-3.59-3-3.59s-2.91 1.52-2.91 3.59z"
//           style={{
//             WebkitTransformOrigin: 73.185,
//             MsTransformOrigin: 73.185,
//             transformOrigin: 73.185,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M83.38 248.55c2.94 0 4.08 1.85 4.08 4.62v2.07c0 3-1.39 4.5-4.4 4.5h-2.37v7.83h-1.25v-19zm-.32 10.05c2.2 0 3.15-1 3.15-3.28v-2.23c0-2.06-.71-3.4-2.83-3.4h-2.69v8.91z"
//           style={{
//             WebkitTransformOrigin: 83.45,
//             MsTransformOrigin: 83.45,
//             transformOrigin: 83.45,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M97.35 253.14v.41h-1.2v-.49c0-2-.76-3.53-2.82-3.53S90.5 251 90.5 253c0 4.61 6.87 4.69 6.87 9.94 0 2.74-1.19 4.75-4.1 4.75s-4.1-2-4.1-4.75v-1h1.2V263c0 2 .78 3.5 2.87 3.5s2.88-1.47 2.88-3.5c0-4.57-6.87-4.65-6.87-9.94 0-2.86 1.25-4.7 4-4.73s4.1 2.07 4.1 4.81z"
//           style={{
//             WebkitTransformOrigin: 93.27,
//             MsTransformOrigin: 93.27,
//             transformOrigin: 93.27,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M100.47 265.18v2.39h-1.22v-2.39z"
//           style={{
//             WebkitTransformOrigin: 99.86,
//             MsTransformOrigin: 99.86,
//             transformOrigin: 99.86,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M103.87 265.18v2.39h-1.23v-2.39z"
//           style={{
//             WebkitTransformOrigin: 103.255,
//             MsTransformOrigin: 103.255,
//             transformOrigin: 103.255,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M107.26 265.18v2.39H106v-2.39z"
//           style={{
//             WebkitTransformOrigin: 106.63,
//             MsTransformOrigin: 106.63,
//             transformOrigin: 106.63,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M62.68 276.22c2.94 0 4.08 1.84 4.08 4.61v2.07c0 3-1.39 4.51-4.4 4.51H60v7.82h-1.26v-19zm-.32 10c2.2 0 3.15-1 3.15-3.29v-2.23c0-2.06-.71-3.39-2.83-3.39H60v8.91z"
//           style={{
//             WebkitTransformOrigin: 62.75,
//             MsTransformOrigin: 62.75,
//             transformOrigin: 62.75,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M70.1 291l-.95 4.21H68l4.15-19H74l4.24 19H77L76 291zm.19-1.09h5.54L73 277.63z"
//           style={{
//             WebkitTransformOrigin: 73.12,
//             MsTransformOrigin: 73.12,
//             transformOrigin: 73.12,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M88.22 280.86v1.41H87v-1.49c0-2-.78-3.59-2.88-3.59s-2.87 1.55-2.87 3.59v9.89c0 2 .78 3.55 2.87 3.55S87 292.7 87 290.67v-4.11h-2.5v-1.14h3.72v5.16c0 2.75-1.2 4.81-4.1 4.81s-4.1-2.06-4.1-4.81v-9.72c0-2.74 1.19-4.81 4.1-4.81s4.1 2.07 4.1 4.81z"
//           style={{
//             WebkitTransformOrigin: 84.12,
//             MsTransformOrigin: 84.12,
//             transformOrigin: 84.12,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M96.75 285v1.14h-5.19v7.93h6.25v1.14h-7.5v-19h7.5v1.14h-6.25V285z"
//           style={{
//             WebkitTransformOrigin: 94.06,
//             MsTransformOrigin: 94.06,
//             transformOrigin: 94.06,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M105.2 295.23h-1.14v-19h1.63l5.7 16v-16h1.14v19h-1.38l-6-17z"
//           style={{
//             WebkitTransformOrigin: 108.295,
//             MsTransformOrigin: 108.295,
//             transformOrigin: 108.295,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M114.6 280.86c0-2.77 1.27-4.81 4.15-4.81s4.21 2 4.21 4.81v9.72c0 2.77-1.27 4.81-4.21 4.81s-4.15-2-4.15-4.81zm1.25 9.81c0 2.06.81 3.58 2.9 3.58s3-1.52 3-3.58v-9.89c0-2.07-.84-3.59-3-3.59s-2.9 1.52-2.9 3.59z"
//           style={{
//             WebkitTransformOrigin: 118.78,
//             MsTransformOrigin: 118.78,
//             transformOrigin: 118.78,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M128.23 295.23v-17.87h-3.85v-1.14h9v1.14h-3.89v17.87z"
//           style={{
//             WebkitTransformOrigin: 128.88,
//             MsTransformOrigin: 128.88,
//             transformOrigin: 128.88,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M145.29 285.48v1.14h-4.91v8.61h-1.25v-19h7.22v1.14h-6v8.12z"
//           style={{
//             WebkitTransformOrigin: 142.74,
//             MsTransformOrigin: 142.74,
//             transformOrigin: 142.74,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M148.17 280.86c0-2.77 1.28-4.81 4.16-4.81s4.21 2 4.21 4.81v9.72c0 2.77-1.28 4.81-4.21 4.81s-4.16-2-4.16-4.81zm1.25 9.81c0 2.06.82 3.58 2.91 3.58s3-1.52 3-3.58v-9.89c0-2.07-.84-3.59-3-3.59s-2.91 1.52-2.91 3.59z"
//           style={{
//             WebkitTransformOrigin: 152.355,
//             MsTransformOrigin: 152.355,
//             transformOrigin: 152.355,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M159.8 290.64c0 2 .76 3.61 2.85 3.61s2.85-1.57 2.85-3.61v-14.42h1.17v14.36c0 2.72-1.14 4.81-4 4.81s-4.08-2.09-4.08-4.81v-14.36h1.25z"
//           style={{
//             WebkitTransformOrigin: 162.63,
//             MsTransformOrigin: 162.63,
//             transformOrigin: 162.63,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M170 295.23h-1.14v-19h1.63l5.7 16v-16h1.14v19h-1.38l-5.95-17z"
//           style={{
//             WebkitTransformOrigin: 173.095,
//             MsTransformOrigin: 173.095,
//             transformOrigin: 173.095,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M183.62 276.22c2.94 0 4.21 1.92 4.21 4.72v9.56c0 2.8-1.27 4.73-4.21 4.73h-4.18v-19zm0 17.87c2.12 0 3-1.44 3-3.53v-9.67c0-2.09-.89-3.53-3-3.53h-2.91v16.73z"
//           style={{
//             WebkitTransformOrigin: 183.635,
//             MsTransformOrigin: 183.635,
//             transformOrigin: 183.635,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//       </g>
//       <g
//         className="animable"
//         style={{
//           WebkitTransformOrigin: 242.749,
//           MsTransformOrigin: 242.749,
//           transformOrigin: 242.749,
//         }}
//       >
//         <path
//           d="M231.15 342.28c-22.26 0-35.64-19.75-40.39-37.12l-.16-.61a6.54 6.54 0 1112.65-3.29l.12.45c3.61 13.22 13.44 28.33 29.21 27.46a21.16 21.16 0 0015.48-7.55c8.65-9.92 12.52-31.49 11.66-42.37a5.23 5.23 0 1110.42-.83c1 12.11-.32 38.14-12.23 51.79a34.11 34.11 0 01-24.59 12c-.73.05-1.46.07-2.17.07z"
//           style={{
//             WebkitTransformOrigin: 230.366,
//             MsTransformOrigin: 230.366,
//             transformOrigin: 230.366,
//           }}
//           fill="#FFF"
//           className="animable"
//         ></path>
//         <g
//           style={{
//             WebkitTransformOrigin: 238.372,
//             MsTransformOrigin: 238.372,
//             transformOrigin: 238.372,
//           }}
//           className="animable"
//           clipPath='url("#freepik--clip-path-2--inject-3")'
//         >
//           <path
//             d="M264.51 273.62a5.23 5.23 0 00-4.79 5.63c.42 5.31-.29 13.16-2.13 21a23.12 23.12 0 017.77 1 41.36 41.36 0 01-7.64 20.87c-9.71 13.49-24.27 17.8-35.6 16.18-5.07-.72-10.88-3.38-15.77-6.11a35.59 35.59 0 0024.8 10.11c.71 0 1.44 0 2.17-.06a34.11 34.11 0 0024.59-12c11.91-13.65 13.19-39.68 12.23-51.79a5.22 5.22 0 00-5.63-4.83z"
//             style={{
//               WebkitTransformOrigin: 238.372,
//               MsTransformOrigin: 238.372,
//               transformOrigin: 238.372,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M264.51 273.62a5.23 5.23 0 00-4.79 5.63c.42 5.31-.29 13.16-2.13 21a23.12 23.12 0 017.77 1 41.36 41.36 0 01-7.64 20.87c-9.71 13.49-24.27 17.8-35.6 16.18-5.07-.72-10.88-3.38-15.77-6.11a35.59 35.59 0 0024.8 10.11c.71 0 1.44 0 2.17-.06a34.11 34.11 0 0024.59-12c11.91-13.65 13.19-39.68 12.23-51.79a5.22 5.22 0 00-5.63-4.83z"
//               style={{
//                 WebkitTransformOrigin: 238.372,
//                 MsTransformOrigin: 238.372,
//                 transformOrigin: 238.372,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.5"
//             ></path>
//           </g>
//         </g>
//         <path
//           d="M231.15 342.28c-22.26 0-35.64-19.75-40.39-37.12l-.16-.61a6.54 6.54 0 1112.65-3.29l.12.45c3.61 13.22 13.44 28.33 29.21 27.46a21.16 21.16 0 0015.48-7.55c8.65-9.92 12.52-31.49 11.66-42.37a5.23 5.23 0 1110.42-.83c1 12.11-.32 38.14-12.23 51.79a34.11 34.11 0 01-24.59 12c-.73.05-1.46.07-2.17.07z"
//           style={{
//             WebkitTransformOrigin: 230.366,
//             MsTransformOrigin: 230.366,
//             transformOrigin: 230.366,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M218.31 328.75c.53-2.45-5.33 1.38-10.24 4.95a38.34 38.34 0 005.84 4.07c1.75-2.85 3.89-6.66 4.4-9.02z"
//           style={{
//             WebkitTransformOrigin: 213.207,
//             MsTransformOrigin: 213.207,
//             transformOrigin: 213.207,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M231.15 342.28c.71 0 1.44 0 2.17-.06a37.91 37.91 0 006.31-.89c-2.76-3.6-6.56-8.36-7.65-8.72-1.25-.42-3.66 5.71-5 9.43a35.67 35.67 0 004.17.24z"
//           style={{
//             WebkitTransformOrigin: 233.305,
//             MsTransformOrigin: 233.305,
//             transformOrigin: 233.305,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M203.37 301.71l-.12-.45a6.54 6.54 0 10-12.65 3.29l.16.61a64.09 64.09 0 007.6 17.27l11.91-5.67a49.83 49.83 0 01-6.9-15.05z"
//           style={{
//             WebkitTransformOrigin: 200.297,
//             MsTransformOrigin: 200.297,
//             transformOrigin: 200.297,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M257.91 330.21a33.72 33.72 0 002.54-3.34c-3.78-1.29-9.44-3.07-11.54-2.88-2.49.23.89 8.23 2.63 12a36.76 36.76 0 006.37-5.78z"
//           style={{
//             WebkitTransformOrigin: 254.238,
//             MsTransformOrigin: 254.238,
//             transformOrigin: 254.238,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M258.12 308.84c-.4.8 4.49 4.36 7.79 6.65a75.33 75.33 0 002.52-9.52c-4 .8-9.92 2.09-10.31 2.87z"
//           style={{
//             WebkitTransformOrigin: 263.263,
//             MsTransformOrigin: 263.263,
//             transformOrigin: 263.263,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M270.05 294.05c.22-2.85.33-5.57.34-8.07-3.44 1.89-7.52 4.51-7.52 6.23s3.82 1.93 7.18 1.84z"
//           style={{
//             WebkitTransformOrigin: 266.63,
//             MsTransformOrigin: 266.63,
//             transformOrigin: 266.63,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M216.21 216.68s-9.71 28.12-4.48 50a42.77 42.77 0 0024.39 29.11s-14.19 5-11 12.69 15.42 2.74 19.41.25 9-9.95 9.7-14.93a35.73 35.73 0 00.5-7.71s16.17-1.74 27.12-10.7c0 0 9.71 7.71 16.68 6.22s16.92-13.94 15.92-25.13S307 245.3 303.06 247a16 16 0 00-5.48 3.48s5.72-7 0-16.67a21.75 21.75 0 00-15.93-10.45s-3-15.93-11.94-21.9-40.81-12.15-53.5 15.22z"
//           style={{
//             WebkitTransformOrigin: 262.352,
//             MsTransformOrigin: 262.352,
//             transformOrigin: 262.352,
//           }}
//           fill="#FFF"
//           className="animable"
//         ></path>
//         <g
//           style={{
//             WebkitTransformOrigin: 262.39,
//             MsTransformOrigin: 262.39,
//             transformOrigin: 262.39,
//           }}
//           className="animable"
//           clipPath='url("#freepik--clip-path-3--inject-3")'
//         >
//           <path
//             d="M290.14 226.35a56.4 56.4 0 01-43.86 27.22c-19.8 1.74-30.9-2.16-36-4.87a127 127 0 016-32c12.69-27.37 44.54-21.15 53.5-15.18s11.94 21.9 11.94 21.9a21.38 21.38 0 018.42 2.93zM303.06 247a16 16 0 00-5.48 3.48 13.06 13.06 0 002.33-5.64c-13.45 6.7-12.4 21-14.07 21-2.06 0-3.08-7.19-3.08-7.19s-2.57 10.27-18 17.47-32.88 1.54-32.88 1.54 3.6 8.22-5.65 7.19a15.27 15.27 0 01-7.23-2.64 42.82 42.82 0 0017.1 13.54s-14.19 5-11 12.69 15.43 2.74 19.41.25 9-9.95 9.7-14.93a35.73 35.73 0 00.5-7.71s16.17-1.74 27.12-10.7c0 0 9.71 7.71 16.68 6.22s16.92-13.94 15.92-25.13S307 245.3 303.06 247z"
//             style={{
//               WebkitTransformOrigin: 262.39,
//               MsTransformOrigin: 262.39,
//               transformOrigin: 262.39,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M290.14 226.35a56.4 56.4 0 01-43.86 27.22c-19.8 1.74-30.9-2.16-36-4.87a127 127 0 016-32c12.69-27.37 44.54-21.15 53.5-15.18s11.94 21.9 11.94 21.9a21.38 21.38 0 018.42 2.93zM303.06 247a16 16 0 00-5.48 3.48 13.06 13.06 0 002.33-5.64c-13.45 6.7-12.4 21-14.07 21-2.06 0-3.08-7.19-3.08-7.19s-2.57 10.27-18 17.47-32.88 1.54-32.88 1.54 3.6 8.22-5.65 7.19a15.27 15.27 0 01-7.23-2.64 42.82 42.82 0 0017.1 13.54s-14.19 5-11 12.69 15.43 2.74 19.41.25 9-9.95 9.7-14.93a35.73 35.73 0 00.5-7.71s16.17-1.74 27.12-10.7c0 0 9.71 7.71 16.68 6.22s16.92-13.94 15.92-25.13S307 245.3 303.06 247z"
//               style={{
//                 WebkitTransformOrigin: 262.39,
//                 MsTransformOrigin: 262.39,
//                 transformOrigin: 262.39,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.5"
//             ></path>
//           </g>
//           <path
//             d="M254.78 286.11a35.12 35.12 0 01-28.15-12.91"
//             style={{
//               WebkitTransformOrigin: 240.705,
//               MsTransformOrigin: 240.705,
//               transformOrigin: 240.705,
//             }}
//             fill="none"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             className="animable"
//           ></path>
//         </g>
//         <path
//           d="M216.21 216.68s-9.71 28.12-4.48 50a42.77 42.77 0 0024.39 29.11s-14.19 5-11 12.69 15.42 2.74 19.41.25 9-9.95 9.7-14.93a35.73 35.73 0 00.5-7.71s16.17-1.74 27.12-10.7c0 0 9.71 7.71 16.68 6.22s16.92-13.94 15.92-25.13S307 245.3 303.06 247a16 16 0 00-5.48 3.48s5.72-7 0-16.67a21.75 21.75 0 00-15.93-10.45s-3-15.93-11.94-21.9-40.81-12.15-53.5 15.22z"
//           style={{
//             WebkitTransformOrigin: 262.352,
//             MsTransformOrigin: 262.352,
//             transformOrigin: 262.352,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M297.58 250.52s-5.22 3.49-7.71 14.19"
//           style={{
//             WebkitTransformOrigin: 293.725,
//             MsTransformOrigin: 293.725,
//             transformOrigin: 293.725,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M307.17 255.1c-.61 1.82-2.28 2.91-3.72 2.42s-2.1-2.36-1.49-4.18 2.28-2.91 3.72-2.42 2.11 2.36 1.49 4.18z"
//           style={{
//             WebkitTransformOrigin: 304.567,
//             MsTransformOrigin: 304.567,
//             transformOrigin: 304.567,
//           }}
//           fill="#FFF"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M312.32 258.34c-.61 1.82-2.28 2.91-3.72 2.42s-2.11-2.36-1.49-4.18 2.28-2.91 3.72-2.42 2.11 2.36 1.49 4.18z"
//           style={{
//             WebkitTransformOrigin: 309.715,
//             MsTransformOrigin: 309.715,
//             transformOrigin: 309.715,
//           }}
//           fill="#FFF"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M313.42 263.19a2.06 2.06 0 11-1.09-3 2.32 2.32 0 011.09 3z"
//           style={{
//             WebkitTransformOrigin: 311.602,
//             MsTransformOrigin: 311.602,
//             transformOrigin: 311.602,
//           }}
//           fill="#FFF"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M306.85 269.85c-1.8 3.25-5.4 4.69-8.05 3.22s-3.33-5.28-1.53-8.53 5.4-4.69 8.05-3.22 3.33 5.28 1.53 8.53z"
//           style={{
//             WebkitTransformOrigin: 302.06,
//             MsTransformOrigin: 302.06,
//             transformOrigin: 302.06,
//           }}
//           fill="#FFF"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M236.12 295.81a15 15 0 0010.7.75"
//           style={{
//             WebkitTransformOrigin: 241.47,
//             MsTransformOrigin: 241.47,
//             transformOrigin: 241.47,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M225.17 308.5s1-4.23 7.21-7.21"
//           style={{
//             WebkitTransformOrigin: 228.775,
//             MsTransformOrigin: 228.775,
//             transformOrigin: 228.775,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M231.39 312.24s2.49-6 6.72-8.71"
//           style={{
//             WebkitTransformOrigin: 234.75,
//             MsTransformOrigin: 234.75,
//             transformOrigin: 234.75,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M133.26 243.4a8.58 8.58 0 01-3.22-7.09V212.6H68.88a10.37 10.37 0 01-8-3.32 11.2 11.2 0 01-3.06-7.84 11.92 11.92 0 012-6.65l58.58-92.06q6.6-10.19 17.54-10.19a15.68 15.68 0 0110.73 3.76q4.29 3.75 4.29 11.15v89.49h15.56a7.34 7.34 0 015.79 2.3 8.52 8.52 0 010 11.06 7.34 7.34 0 01-5.79 2.3h-15.67v23.71a8.69 8.69 0 01-3.11 7.09 11 11 0 01-7.19 2.57 11.37 11.37 0 01-7.29-2.57zM130 196.94v-82.4l-51.29 82.4z"
//           style={{
//             WebkitTransformOrigin: 116.084,
//             MsTransformOrigin: 116.084,
//             transformOrigin: 116.084,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M218.13 243.88a42.42 42.42 0 01-15.51-11.59 60 60 0 01-9.76-17.65 102.32 102.32 0 01-5.31-21.35 176.84 176.84 0 01-1.5-23.93q0-79.07 54-79.07t53.87 79.07a182.94 182.94 0 01-1.45 23.82 100.22 100.22 0 01-5.26 21.35 60 60 0 01-9.76 17.65 42.86 42.86 0 01-15.51 11.64 51.64 51.64 0 01-21.89 4.4 52.24 52.24 0 01-21.92-4.34zm32.56-15.13a25.29 25.29 0 008.05-5.47 31.76 31.76 0 005.68-8.42 59.86 59.86 0 003.81-10.2 83.39 83.39 0 002.2-11.64q.81-6.5 1.08-11.91t.26-11.75q0-6.65-.26-12.28T270.38 145a91.61 91.61 0 00-2.25-11.64 56.58 56.58 0 00-3.81-10.08 31.36 31.36 0 00-5.69-8.27 24.49 24.49 0 00-8-5.31 29.5 29.5 0 00-21.25 0 24.2 24.2 0 00-7.94 5.26 32 32 0 00-5.68 8.21A51 51 0 00212 133.2a95.39 95.39 0 00-2.2 11.7q-.87 6.54-1.13 12.18t-.27 12.28q0 6.33.27 11.8t1.07 12a84.87 84.87 0 002.2 11.64 59.76 59.76 0 003.77 10.2 31.49 31.49 0 005.63 8.37 24.87 24.87 0 008 5.42 28.31 28.31 0 0021.35 0z"
//           style={{
//             WebkitTransformOrigin: 239.985,
//             MsTransformOrigin: 239.985,
//             transformOrigin: 239.985,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M386.58 243.4a8.58 8.58 0 01-3.22-7.09V212.6H322.2a10.37 10.37 0 01-8-3.32 11.2 11.2 0 01-3.06-7.84 11.92 11.92 0 012-6.65l58.58-92.06q6.54-10.19 17.49-10.19A15.68 15.68 0 01400 96.3q4.29 3.75 4.29 11.15v89.49h15.56a7.34 7.34 0 015.79 2.3 8.52 8.52 0 010 11.06 7.34 7.34 0 01-5.79 2.3h-15.68v23.71a8.69 8.69 0 01-3.11 7.09 11 11 0 01-7.19 2.57 11.37 11.37 0 01-7.29-2.57zm-3.22-46.46v-82.4l-51.29 82.4z"
//           style={{
//             WebkitTransformOrigin: 369.409,
//             MsTransformOrigin: 369.409,
//             transformOrigin: 369.409,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M196.05 202.5s-10.45 14.68-11.94 29.61.25 24.88 4.73 28.62 8.95 2.24 11.44-1.25-1.49-15.68-1.49-15.68 4.23-11.69 10.7-19.9 7.71-9.46 7.71-9.46-11.2-12.69-21.15-11.94z"
//           style={{
//             WebkitTransformOrigin: 200.394,
//             MsTransformOrigin: 200.394,
//             transformOrigin: 200.394,
//           }}
//           fill="#FFF"
//           className="animable"
//         ></path>
//         <g
//           style={{
//             WebkitTransformOrigin: 203.62,
//             MsTransformOrigin: 203.62,
//             transformOrigin: 203.62,
//           }}
//           className="animable"
//           clipPath='url("#freepik--clip-path-4--inject-3")'
//         >
//           <path
//             d="M196.05 202.5a80.76 80.76 0 00-6.05 10.58c5 2 12.75 6.1 17.67 13.36.6-.87 1.22-1.73 1.86-2.54 6.47-8.21 7.71-9.46 7.71-9.46S206 201.75 196.05 202.5z"
//             style={{
//               WebkitTransformOrigin: 203.62,
//               MsTransformOrigin: 203.62,
//               transformOrigin: 203.62,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M196.05 202.5a80.76 80.76 0 00-6.05 10.58c5 2 12.75 6.1 17.67 13.36.6-.87 1.22-1.73 1.86-2.54 6.47-8.21 7.71-9.46 7.71-9.46S206 201.75 196.05 202.5z"
//               style={{
//                 WebkitTransformOrigin: 203.62,
//                 MsTransformOrigin: 203.62,
//                 transformOrigin: 203.62,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.5"
//             ></path>
//           </g>
//         </g>
//         <path
//           d="M196.05 202.5s-10.45 14.68-11.94 29.61.25 24.88 4.73 28.62 8.95 2.24 11.44-1.25-1.49-15.68-1.49-15.68 4.23-11.69 10.7-19.9 7.71-9.46 7.71-9.46-11.2-12.69-21.15-11.94z"
//           style={{
//             WebkitTransformOrigin: 200.394,
//             MsTransformOrigin: 200.394,
//             transformOrigin: 200.394,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M188.84 260.73a27.63 27.63 0 01-1.75-10.21"
//           style={{
//             WebkitTransformOrigin: 187.963,
//             MsTransformOrigin: 187.963,
//             transformOrigin: 187.963,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M195.55 262.22s-2.48-4.23-2.73-11.45"
//           style={{
//             WebkitTransformOrigin: 194.185,
//             MsTransformOrigin: 194.185,
//             transformOrigin: 194.185,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M199.29 229.12c0-2.62-5-7.74-11.95-10a59 59 0 00-2.31 7.47 29.33 29.33 0 017.79 2.49c3.73 2.03 6.47 3.03 6.47.04z"
//           style={{
//             WebkitTransformOrigin: 192.16,
//             MsTransformOrigin: 192.16,
//             transformOrigin: 192.16,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M195.44 203.39A84.08 84.08 0 00191 211a23.92 23.92 0 016 2.5c7.71 4.47 9.2 5 6.72-1.5-1.5-4.08-5.08-6.85-8.28-8.61z"
//           style={{
//             WebkitTransformOrigin: 197.911,
//             MsTransformOrigin: 197.911,
//             transformOrigin: 197.911,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M277.9 195.25s11.84 13.58 14.79 28.3 2.2 24.79-1.9 28.94-8.69 3.11-11.51-.12 0-15.74 0-15.74-5.36-11.23-12.6-18.77-8.61-8.65-8.61-8.65 9.85-13.73 19.83-13.96z"
//           style={{
//             WebkitTransformOrigin: 276.273,
//             MsTransformOrigin: 276.273,
//             transformOrigin: 276.273,
//           }}
//           fill="#FFF"
//           className="animable"
//         ></path>
//         <g
//           style={{
//             WebkitTransformOrigin: 272.07,
//             MsTransformOrigin: 272.07,
//             transformOrigin: 272.07,
//           }}
//           className="animable"
//           clipPath='url("#freepik--clip-path-5--inject-3")'
//         >
//           <path
//             d="M277.9 195.25c-10 .23-19.88 14-19.88 14s1.36 1.12 8.61 8.65a53.06 53.06 0 013.82 4.5 42.15 42.15 0 0115.67-15.3 81.53 81.53 0 00-8.22-11.85z"
//             style={{
//               WebkitTransformOrigin: 272.07,
//               MsTransformOrigin: 272.07,
//               transformOrigin: 272.07,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M277.9 195.25c-10 .23-19.88 14-19.88 14s1.36 1.12 8.61 8.65a53.06 53.06 0 013.82 4.5 42.15 42.15 0 0115.67-15.3 81.53 81.53 0 00-8.22-11.85z"
//               style={{
//                 WebkitTransformOrigin: 272.07,
//                 MsTransformOrigin: 272.07,
//                 transformOrigin: 272.07,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.5"
//             ></path>
//           </g>
//         </g>
//         <path
//           d="M277.9 195.25s11.84 13.58 14.79 28.3 2.2 24.79-1.9 28.94-8.69 3.11-11.51-.12 0-15.74 0-15.74-5.36-11.23-12.6-18.77-8.61-8.65-8.61-8.65 9.85-13.73 19.83-13.96z"
//           style={{
//             WebkitTransformOrigin: 276.273,
//             MsTransformOrigin: 276.273,
//             transformOrigin: 276.273,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M290.79 252.49a27.54 27.54 0 00.74-10.32"
//           style={{
//             WebkitTransformOrigin: 291.255,
//             MsTransformOrigin: 291.255,
//             transformOrigin: 291.255,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M284.25 254.63s2.07-4.45 1.61-11.66"
//           style={{
//             WebkitTransformOrigin: 285.088,
//             MsTransformOrigin: 285.088,
//             transformOrigin: 285.088,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M277.29 222.06c-.25-2.61 4.22-8.19 10.92-11.08a58.59 58.59 0 013 7.2 29.93 29.93 0 00-7.5 3.25c-3.5 2.35-6.12 3.57-6.42.63z"
//           style={{
//             WebkitTransformOrigin: 284.245,
//             MsTransformOrigin: 284.245,
//             transformOrigin: 284.245,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M278.59 196.08a81.4 81.4 0 015.14 7.09 24.07 24.07 0 00-5.75 3.07c-7.23 5.22-8.67 5.86-6.83-.82 1.15-4.17 4.43-7.28 7.44-9.34z"
//           style={{
//             WebkitTransformOrigin: 277.077,
//             MsTransformOrigin: 277.077,
//             transformOrigin: 277.077,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M195.07 189.8s-3.08 10.39-1.92 14.62 6.54.39 11.93 5 10.38 12.93 30.79 14.47 32.73-9.47 37-15.63 3.85-13.47 11.16-13.85 1.16-14.63-1.15-16.94c0 0 14.24-21.17 14.24-26.56s-13.47-4.24-30 .77c0 0-12.32-6.55-34.65-2.7s-28.87 10.4-28.87 10.4-27.72 3.46-29.64 6.92 3.79 18.11 21.11 23.5z"
//           style={{
//             WebkitTransformOrigin: 235.363,
//             MsTransformOrigin: 235.363,
//             transformOrigin: 235.363,
//           }}
//           fill="#FFF"
//           className="animable"
//         ></path>
//         <g
//           style={{
//             WebkitTransformOrigin: 231.086,
//             MsTransformOrigin: 231.086,
//             transformOrigin: 231.086,
//           }}
//           className="animable"
//           clipPath='url("#freepik--clip-path-6--inject-3")'
//         >
//           <path
//             d="M284 194.42c7.32-.39 1.16-14.63-1.15-16.94 0 0 2.71-4 5.76-9-8.27-4.32-16.39-6.72-18.55-4.29-4.65 5.22-2.12 15.22 0 25s-6.35 13.95-12.27 22.41-14.37-.85-14.37-.85c-3 12.27-15.65 4.23-15.65 4.23-9.72-3-26.21-12.68-22.83-19.45s4.23-13.11-1.69-18.6-29.53-10.06-29.53-10.06c-1.24 4.17 4.75 17.83 21.36 23 0 0-3.08 10.39-1.92 14.62s6.54.39 11.93 5 10.38 12.93 30.79 14.47 32.73-9.47 37-15.63 3.8-13.53 11.12-13.91z"
//             style={{
//               WebkitTransformOrigin: 231.086,
//               MsTransformOrigin: 231.086,
//               transformOrigin: 231.086,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M284 194.42c7.32-.39 1.16-14.63-1.15-16.94 0 0 2.71-4 5.76-9-8.27-4.32-16.39-6.72-18.55-4.29-4.65 5.22-2.12 15.22 0 25s-6.35 13.95-12.27 22.41-14.37-.85-14.37-.85c-3 12.27-15.65 4.23-15.65 4.23-9.72-3-26.21-12.68-22.83-19.45s4.23-13.11-1.69-18.6-29.53-10.06-29.53-10.06c-1.24 4.17 4.75 17.83 21.36 23 0 0-3.08 10.39-1.92 14.62s6.54.39 11.93 5 10.38 12.93 30.79 14.47 32.73-9.47 37-15.63 3.8-13.53 11.12-13.91z"
//               style={{
//                 WebkitTransformOrigin: 231.086,
//                 MsTransformOrigin: 231.086,
//                 transformOrigin: 231.086,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.5"
//             ></path>
//           </g>
//           <path
//             d="M253.89 196.74c.29 2.44-5.13 5.07-12.08 5.88s-12.83-.51-13.12-3 5.13-5.06 12.09-5.87 12.83.56 13.11 2.99z"
//             style={{
//               WebkitTransformOrigin: 241.29,
//               MsTransformOrigin: 241.29,
//               transformOrigin: 241.29,
//             }}
//             fill="#3AC4B2"
//             className="animable"
//           ></path>
//           <g>
//             <path
//               d="M253.89 196.74c.29 2.44-5.13 5.07-12.08 5.88s-12.83-.51-13.12-3 5.13-5.06 12.09-5.87 12.83.56 13.11 2.99z"
//               style={{
//                 WebkitTransformOrigin: 241.29,
//                 MsTransformOrigin: 241.29,
//                 transformOrigin: 241.29,
//               }}
//               fill="#FFF"
//               className="animable"
//               opacity="0.5"
//             ></path>
//           </g>
//         </g>
//         <path
//           d="M195.07 189.8s-3.08 10.39-1.92 14.62 6.54.39 11.93 5 10.38 12.93 30.79 14.47 32.73-9.47 37-15.63 3.85-13.47 11.16-13.85 1.16-14.63-1.15-16.94c0 0 14.24-21.17 14.24-26.56s-13.47-4.24-30 .77c0 0-12.32-6.55-34.65-2.7s-28.87 10.4-28.87 10.4-27.72 3.46-29.64 6.92 3.79 18.11 21.11 23.5z"
//           style={{
//             WebkitTransformOrigin: 235.363,
//             MsTransformOrigin: 235.363,
//             transformOrigin: 235.363,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M274.69 159c-10 6.72-6.47 13.44-2 17.17 2.73 2.28 7.13 2 10.14 1.36h0s14.24-21.17 14.24-26.56c.01-.05-12.43 1.26-22.38 8.03z"
//           style={{
//             WebkitTransformOrigin: 282.659,
//             MsTransformOrigin: 282.659,
//             transformOrigin: 282.659,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M173.71 166.8c-1.24 4.17 4.75 17.83 21.36 23 0 0 12.68-1.24 8.45-11.44-3.95-9.52-23.92-11.89-29.81-11.56z"
//           style={{
//             WebkitTransformOrigin: 188.968,
//             MsTransformOrigin: 188.968,
//             transformOrigin: 188.968,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M232.41 149c-1.31.23-2.57.47-3.78.71 2 10.1 5.29 26.92 8.23 26.92s5.19-18.44 6.15-28.77a82 82 0 00-10.6 1.14z"
//           style={{
//             WebkitTransformOrigin: 235.82,
//             MsTransformOrigin: 235.82,
//             transformOrigin: 235.82,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M220.94 173.63c3.06-1.8 2.6-15.33 2.11-22.67a82.12 82.12 0 00-9.31 2.91c1.11 6.87 3.93 21.68 7.2 19.76z"
//           style={{
//             WebkitTransformOrigin: 218.572,
//             MsTransformOrigin: 218.572,
//             transformOrigin: 218.572,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M250.55 167.41c3.13 1.1 4.89-10.15 5.88-18.81a62.32 62.32 0 00-9.56-.81c-.1 7.11.29 18.43 3.68 19.62z"
//           style={{
//             WebkitTransformOrigin: 251.643,
//             MsTransformOrigin: 251.643,
//             transformOrigin: 251.643,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M246.36 206.35a11.78 11.78 0 00-8.67 1.07.86.86 0 00-.16 1.37l5.31 5a.86.86 0 001.37-.27l2.72-6a.86.86 0 00-.57-1.17z"
//           style={{
//             WebkitTransformOrigin: 242.13,
//             MsTransformOrigin: 242.13,
//             transformOrigin: 242.13,
//           }}
//           fill="#3AC4B2"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M233.74 198c.73 1.93.44 3.83-.65 4.24s-2.57-.81-3.31-2.73-.44-3.83.65-4.24 2.57.81 3.31 2.73z"
//           style={{
//             WebkitTransformOrigin: 231.758,
//             MsTransformOrigin: 231.758,
//             transformOrigin: 231.758,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M248.22 196.63c-.38 2 .24 3.85 1.39 4.06s2.39-1.25 2.77-3.28-.24-3.84-1.39-4.06-2.39 1.26-2.77 3.28z"
//           style={{
//             WebkitTransformOrigin: 250.3,
//             MsTransformOrigin: 250.3,
//             transformOrigin: 250.3,
//           }}
//           fill="#263238"
//           className="animable"
//         ></path>
//         <path
//           d="M244.21 213.51s-7.1 9.64-13.57-.06"
//           style={{
//             WebkitTransformOrigin: 237.425,
//             MsTransformOrigin: 237.425,
//             transformOrigin: 237.425,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M242.84 213.78s4.72 4.89 9.7 2.15 2-7 2-7"
//           style={{
//             WebkitTransformOrigin: 249.132,
//             MsTransformOrigin: 249.132,
//             transformOrigin: 249.132,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.113"
//           className="animable"
//         ></path>
//         <path
//           d="M221.19 190.3s1.74-6.22 9.95-4.73"
//           style={{
//             WebkitTransformOrigin: 226.165,
//             MsTransformOrigin: 226.165,
//             transformOrigin: 226.165,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="3.34"
//           className="animable"
//         ></path>
//         <path
//           d="M246.07 184.58s6.22-3.73 11.94 2.24"
//           style={{
//             WebkitTransformOrigin: 252.04,
//             MsTransformOrigin: 252.04,
//             transformOrigin: 252.04,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="3.34"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 219.445,
//             MsTransformOrigin: 219.445,
//             transformOrigin: 219.445,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M216.46 206.98L222.43 208.47"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 219.07,
//             MsTransformOrigin: 219.07,
//             transformOrigin: 219.07,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M221.68 210.71L216.46 211.7"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 220.815,
//             MsTransformOrigin: 220.815,
//             transformOrigin: 220.815,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M222.68 213.45L218.95 215.44"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 263.115,
//             MsTransformOrigin: 263.115,
//             transformOrigin: 263.115,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M260.5 204.24L265.73 202.99"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 263.24,
//             MsTransformOrigin: 263.24,
//             transformOrigin: 263.24,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M261.5 206.73L264.98 206.73"
//           className="animable"
//         ></path>
//         <path
//           style={{
//             WebkitTransformOrigin: 264.605,
//             MsTransformOrigin: 264.605,
//             transformOrigin: 264.605,
//           }}
//           fill="none"
//           stroke="#263238"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="1.113"
//           d="M262.24 209.22L266.97 210.46"
//           className="animable"
//         ></path>
//       </g>
//       <defs>
//         <clipPath id="freepik--clip-path--inject-3">
//           <circle
//             cx="294.77"
//             cy="382.08"
//             r="35.81"
//             fill="#fff"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//           ></circle>
//         </clipPath>
//         <clipPath id="freepik--clip-path-2--inject-3">
//           <path
//             fill="#fff"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             d="M231.15 342.28c-22.26 0-35.64-19.75-40.39-37.12l-.16-.61a6.54 6.54 0 1112.65-3.29l.12.45c3.61 13.22 13.44 28.33 29.21 27.46a21.16 21.16 0 0015.48-7.55c8.65-9.92 12.52-31.49 11.66-42.37a5.23 5.23 0 1110.42-.83c1 12.11-.32 38.14-12.23 51.79a34.11 34.11 0 01-24.59 12c-.73.05-1.46.07-2.17.07z"
//           ></path>
//         </clipPath>
//         <clipPath id="freepik--clip-path-3--inject-3">
//           <path
//             fill="#fff"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             d="M216.21 216.68s-9.71 28.12-4.48 50a42.77 42.77 0 0024.39 29.11s-14.19 5-11 12.69 15.42 2.74 19.41.25 9-9.95 9.7-14.93a35.73 35.73 0 00.5-7.71s16.17-1.74 27.12-10.7c0 0 9.71 7.71 16.68 6.22s16.92-13.94 15.92-25.13S307 245.3 303.06 247a16 16 0 00-5.48 3.48s5.72-7 0-16.67a21.75 21.75 0 00-15.93-10.45s-3-15.93-11.94-21.9-40.81-12.15-53.5 15.22z"
//           ></path>
//         </clipPath>
//         <clipPath id="freepik--clip-path-4--inject-3">
//           <path
//             fill="#fff"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             d="M196.05 202.5s-10.45 14.68-11.94 29.61.25 24.88 4.73 28.62 8.95 2.24 11.44-1.25-1.49-15.68-1.49-15.68 4.23-11.69 10.7-19.9 7.71-9.46 7.71-9.46-11.2-12.69-21.15-11.94z"
//           ></path>
//         </clipPath>
//         <clipPath id="freepik--clip-path-5--inject-3">
//           <path
//             fill="#fff"
//             stroke="#263238"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.113"
//             d="M277.9 195.25s11.84 13.58 14.79 28.3 2.2 24.79-1.9 28.94-8.69 3.11-11.51-.12 0-15.74 0-15.74-5.36-11.23-12.6-18.77-8.61-8.65-8.61-8.65 9.85-13.73 19.83-13.96z"
//           ></path>
//         </clipPath>
//         <clipPath id="freepik--clip-path-6--inject-3">
//           <path
//             fill="#fff"
//             stroke="#263238"
//             strokeMiterlimit="10"
//             strokeWidth="1.113"
//             d="M195.07 189.8s-3.08 10.39-1.92 14.62 6.54.39 11.93 5 10.38 12.93 30.79 14.47 32.73-9.47 37-15.63 3.85-13.47 11.16-13.85 1.16-14.63-1.15-16.94c0 0 14.24-21.17 14.24-26.56s-13.47-4.24-30 .77c0 0-12.32-6.55-34.65-2.7s-28.87 10.4-28.87 10.4-27.72 3.46-29.64 6.92 3.79 18.11 21.11 23.5z"
//           ></path>
//         </clipPath>
//       </defs>
//       <defs>
//         <filter id="active" height="200%">
//           <feMorphology
//             in="SourceAlpha"
//             operator="dilate"
//             radius="2"
//             result="DILATED"
//           ></feMorphology>
//           <feFlood
//             floodColor="#32DFEC"
//             floodOpacity="1"
//             result="PINK"
//           ></feFlood>
//           <feComposite
//             in="PINK"
//             in2="DILATED"
//             operator="in"
//             result="OUTLINE"
//           ></feComposite>
//           <feMerge>
//             <feMergeNode in="OUTLINE"></feMergeNode>
//             <feMergeNode in="SourceGraphic"></feMergeNode>
//           </feMerge>
//         </filter>
//         <filter id="hover" height="200%">
//           <feMorphology
//             in="SourceAlpha"
//             operator="dilate"
//             radius="2"
//             result="DILATED"
//           ></feMorphology>
//           <feFlood floodColor="red" floodOpacity="0.5" result="PINK"></feFlood>
//           <feComposite
//             in="PINK"
//             in2="DILATED"
//             operator="in"
//             result="OUTLINE"
//           ></feComposite>
//           <feMerge>
//             <feMergeNode in="OUTLINE"></feMergeNode>
//             <feMergeNode in="SourceGraphic"></feMergeNode>
//           </feMerge>
//           <feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
//         </filter>
//       </defs>
//     </svg>
//   );
// }

function PageNotFound() {
  return (
    <CustomSection backgroundColor="#fff">
      <div>
        <H1>404</H1>
        <H3>Page not found</H3>
        {/* <img src={ cat} alt="" /> */}
        {/* <Icon /> */}
      </div>
    </CustomSection>
  );
}

export default PageNotFound;
