import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options, styles) => {
  console.log(options, styles);
  return {
    header: {
      padding: `${rhythm(2)} ${rhythm(1)} ${rhythm(1)}`,
    },
    'main, footer, header': {
      fontFamily: `"Quattrocento Sans", "sans-serif"`,
    },
    a: {
      textShadow: `none`,
    },
  };
};

const typography = new Typography(fairyGatesTheme);

export default typography;
