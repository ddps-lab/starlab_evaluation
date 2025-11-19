/**
 * 반응형 디자인 브레이크포인트 설정
 * Figma 기준으로 구성:
 * - Desktop: 1280px+
 * - Tablet: 800px ~ 1279px
 * - Phone: 1px ~ 799px
 */

export const BREAKPOINTS = {
  // 기본 브레이크포인트 (픽셀 단위)
  phone: 799,      // Phone: 1px ~ 799px
  tablet: 1279,    // Tablet: 800px ~ 1279px
  desktop: 1280,   // Desktop: 1280px+
} as const;

/**
 * CSS 미디어 쿼리 헬퍼
 * 사용 예: `@media ${MEDIA_QUERIES.tablet} { ... }`
 */
export const MEDIA_QUERIES = {
  // Phone (max-width: 799px)
  phone: `(max-width: ${BREAKPOINTS.phone}px)`,

  // Tablet (min-width: 800px and max-width: 1279px)
  tablet: `(min-width: ${BREAKPOINTS.phone + 1}px) and (max-width: ${BREAKPOINTS.tablet}px)`,

  // Desktop (min-width: 1280px)
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,

  // Tablet 이상 (min-width: 800px)
  tabletUp: `(min-width: ${BREAKPOINTS.phone + 1}px)`,

  // Desktop 이하 (max-width: 1279px)
  desktopDown: `(max-width: ${BREAKPOINTS.tablet}px)`,
} as const;

/**
 * 미디어 쿼리 문자열 생성 헬퍼
 */
export const createMediaQuery = (maxWidth?: number, minWidth?: number): string => {
  const queries: string[] = [];

  if (minWidth !== undefined) {
    queries.push(`(min-width: ${minWidth}px)`);
  }

  if (maxWidth !== undefined) {
    queries.push(`(max-width: ${maxWidth}px)`);
  }

  return `@media ${queries.join(' and ')}`;
};

/**
 * 기기별 특성 판단 (클라이언트 사이드)
 */
export const getDeviceType = (windowWidth: number): 'phone' | 'tablet' | 'desktop' => {
  if (windowWidth <= BREAKPOINTS.phone) {
    return 'phone';
  } else if (windowWidth <= BREAKPOINTS.tablet) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};
