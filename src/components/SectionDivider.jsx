import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const SectionDivider = ({ 
  variant = 'modern', 
  position = 'bottom', 
  color, 
  height = '80px',
  zIndex = 1 
}) => {
  const defaultColor = useColorModeValue('white', 'gray.800');
  const fillColor = color || defaultColor;

  // All paths match viewBox="0 0 1440 320" and "fill bottom"
  const dividers = {
    modern: {
      // Softer, more minimal wave for a cleaner modern feel
      path: 'M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,170.7C840,181,960,203,1080,208C1200,213,1320,203,1380,197.3L1440,192V320H0Z',
      viewBox: '0 0 1440 320'
    },
    wave: {
      path: 'M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192V320H0Z',
      viewBox: '0 0 1440 320'
    },
    curve: {
      path: 'M0,192L60,181.3C120,171,240,149,360,144C480,139,600,149,720,160C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192V320H0Z',
      viewBox: '0 0 1440 320'
    },
    tilt: {
      path: 'M0,288L1440,192L1440,320L0,320Z',
      viewBox: '0 0 1440 320'
    },
    triangle: {
      path: 'M720 160L1440 320H0L720 160Z',
      viewBox: '0 0 1440 320'
    }
  };

  const selectedDivider = dividers[variant] || dividers.modern;
  
  // Logic: 
  // If position="bottom" (transitioning to next section), we want bottom filled. (No rotation).
  // If position="top" (transitioning from prev section), we want top filled. (Rotate 180).
  const isTop = position === 'top';

  return (
    <Box
      position="absolute"
      top={isTop ? 0 : 'auto'}
      bottom={!isTop ? 0 : 'auto'}
      left={0}
      width="100%"
      overflow="hidden"
      lineHeight={0}
      transform={isTop ? 'rotate(180deg)' : 'none'}
      zIndex={zIndex}
    >
      <svg
        position="relative"
        display="block"
        width="calc(100% + 1.3px)"
        height={height}
        viewBox={selectedDivider.viewBox}
        preserveAspectRatio="none"
        style={{ height: height }}
        className="section-divider-svg"
      >
        <path
          d={selectedDivider.path}
          fill={fillColor}
          style={{ opacity: 0.98 }}
        />
      </svg>
    </Box>
  );
};

export default SectionDivider;
