export const PositionAbsoluteCenter = (t, l) => `
  position: absolute;
  top: ${t}%;
  left: ${l}%;
  transform: translate(-50%, -50%);
`;

export const BackgroundImage = img => `
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundImageBlend = (img, color, color1) => `
  background-image: linear-gradient(45deg, ${color}, ${color1}), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  background-blend-mode: soft-light;
`;

export const MoveElement = (t,l) => `
  position: relative;
  top: ${t}px;
  left: ${l}px;
`;