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