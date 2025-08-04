/**
 * Utility for conditionally joining classNames
 * Similar to the popular 'clsx' library but lightweight
 */

type ClassNameValue = string | number | null | undefined | boolean;
type ClassNameMapping = Record<string, boolean>;
type ClassNameArgument = ClassNameValue | ClassNameMapping | ClassNameArgument[];

export function cn(...args: ClassNameArgument[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = cn(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg as ClassNameMapping) {
        if ((arg as ClassNameMapping)[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/**
 * Generate consistent CSS class names for components
 */
export const generateClassName = (
  component: string,
  element?: string,
  modifier?: string
): string => {
  const parts = [component];
  
  if (element) {
    parts.push(`${component}__${element}`);
  }
  
  if (modifier) {
    const base = element ? `${component}__${element}` : component;
    parts.push(`${base}--${modifier}`);
  }
  
  return parts.join(' ');
};