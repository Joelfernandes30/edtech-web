
import React from "react";
import { cn } from "@/lib/utils";

export interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
}

export function motion<T extends React.ElementType = "div">({
  children,
  className,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
  ...props
}: MotionProps) {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  React.useEffect(() => {
    // Apply animation on mount
    if (!isAnimated && animate) {
      setIsAnimated(true);
    }
  }, [isAnimated, animate]);

  // Generate dynamic styles based on animation states
  const getStyles = () => {
    let styles = {};
    
    // Initial styles (before animation)
    if (initial && !isAnimated) {
      styles = { ...styles, ...convertToStyles(initial) };
    }

    // Animated styles (after mount)
    if (animate && isAnimated) {
      styles = { ...styles, ...convertToStyles(animate) };
    }

    // Hover styles
    if (whileHover && isHovered) {
      styles = { ...styles, ...convertToStyles(whileHover) };
    }

    // Tap/press styles
    if (whileTap && isPressed) {
      styles = { ...styles, ...convertToStyles(whileTap) };
    }

    // Add transition
    if (transition) {
      styles = {
        ...styles,
        transition: `all ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s`,
      };
    }

    return styles;
  };

  // Convert animation properties to CSS styles
  const convertToStyles = (props: Record<string, any>) => {
    const styleObj: Record<string, any> = {};
    
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'opacity' || key === 'scale') {
        styleObj[key] = value;
      } else if (key === 'x') {
        styleObj.transform = `translateX(${value}px)`;
      } else if (key === 'y') {
        styleObj.transform = `translateY(${value}px)`;
      }
    });
    
    return styleObj;
  };

  // Component with all required props
  const Component = React.forwardRef((props: any, ref) => {
    return React.createElement("div", {
      ...props,
      ref,
      style: { ...props.style, ...getStyles() },
      onMouseEnter: (e: React.MouseEvent) => {
        setIsHovered(true);
        props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        setIsHovered(false);
        props.onMouseLeave?.(e);
      },
      onMouseDown: (e: React.MouseEvent) => {
        setIsPressed(true);
        props.onMouseDown?.(e);
      },
      onMouseUp: (e: React.MouseEvent) => {
        setIsPressed(false);
        props.onMouseUp?.(e);
      },
    });
  });

  Component.displayName = "MotionComponent";

  return (
    <Component
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Create a namespace for different components
motion.div = (props: MotionProps) => <motion {...props} />;
