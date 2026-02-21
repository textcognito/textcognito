'use client';

import AnimateOnScroll, { StaggerChildren } from './AnimateOnScroll';

/**
 * Animated hero text + CTA
 */
export function AnimatedHero({ children }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={900}>
      {children}
    </AnimateOnScroll>
  );
}

/**
 * Animated mockup with float
 */
export function AnimatedMockup({ children }) {
  return (
    <AnimateOnScroll animation="fade-left" delay={300} duration={1000}>
      <div className="animate-float">{children}</div>
    </AnimateOnScroll>
  );
}

/**
 * Animated section header
 */
export function AnimatedSectionHeader({ children }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={800}>
      {children}
    </AnimateOnScroll>
  );
}

/**
 * Animated feature card with stagger
 */
export function AnimatedFeatureCard({ children, index = 0 }) {
  return (
    <AnimateOnScroll animation="fade-up" delay={index * 120} duration={700}>
      {children}
    </AnimateOnScroll>
  );
}

/**
 * Animated step in "How it works"
 */
export function AnimatedStep({ children, index = 0 }) {
  return (
    <AnimateOnScroll animation="fade-right" delay={index * 200} duration={800}>
      {children}
    </AnimateOnScroll>
  );
}

/**
 * Animated testimonial card
 */
export function AnimatedTestimonial({ children, index = 0 }) {
  return (
    <AnimateOnScroll animation="zoom-in" delay={index * 150} duration={700}>
      {children}
    </AnimateOnScroll>
  );
}

/**
 * Generic fade-up block
 */
export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <AnimateOnScroll animation="fade-up" delay={delay} className={className}>
      {children}
    </AnimateOnScroll>
  );
}
