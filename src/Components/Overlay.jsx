
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

const taglines = [
  { text: 'I build modern websites', emoji: '⚡' },
  { text: 'I design UI/UX in Figma', emoji: '🎨' },
  { text: 'I build AI Automation', emoji: '🚀' },
];

export default function Overlay({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1 — Ghost watermark (visible 0.00–0.18, fade 0.18–0.22)
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  const visibility1 = useTransform(opacity1, (v) => (v < 0.01 ? 'hidden' : 'visible'));

  // Phase 2 — Name block (in 0.22–0.30, hold to 0.36, out 0.36–0.40)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.3, 0.36, 0.4], [0, 1, 1, 0]);

  // Phase 3 — Subtitle (in 0.40–0.46, hold to 0.50, out 0.50–0.52)
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.46, 0.50, 0.52], [0, 1, 1, 0]);

  // Phase 3.5 — 3 taglines, each with ~14% scroll window so they're easy to catch
  // Tagline 1: 0.53 → 0.67
  const tagline1Opacity = useTransform(scrollYProgress, [0.53, 0.57, 0.63, 0.67], [0, 1, 1, 0]);
  const tagline1X = useTransform(scrollYProgress, [0.53, 0.57], [-30, 0]);

  // Tagline 2: 0.67 → 0.80
  const tagline2Opacity = useTransform(scrollYProgress, [0.67, 0.71, 0.76, 0.80], [0, 1, 1, 0]);
  const tagline2X = useTransform(scrollYProgress, [0.67, 0.71], [-30, 0]);

  // Tagline 3: 0.80 → 0.92
  const tagline3Opacity = useTransform(scrollYProgress, [0.80, 0.84, 0.88, 0.92], [0, 1, 1, 0]);
  const tagline3X = useTransform(scrollYProgress, [0.80, 0.84], [-30, 0]);

  // Exactly 3 items — matches taglines array
  const taglineOpacities = [tagline1Opacity, tagline2Opacity, tagline3Opacity];
  const taglineXs = [tagline1X, tagline2X, tagline3X];

  // Phase 4 — Final headline (in 0.92–0.96, hold to end)
  const opacity4 = useTransform(scrollYProgress, [0.92, 0.96, 1.0], [0, 1, 1]);

  const phaseClass =
    'absolute inset-0 flex flex-col justify-center items-start text-left pl-8 md:pl-16 lg:pl-24 pr-8 pointer-events-none';

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Phase 1: Liquid-glass watermark */}
        <motion.div
          style={{
            opacity: opacity1,
            visibility: visibility1,
            willChange: 'opacity, visibility',
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1
            className="watermark-glass text-[15vw] font-black tracking-tighter select-none text-center leading-none cursor-default"
            style={{ pointerEvents: 'auto' }}
          >
            Mangesh <br /> Lemte
          </h1>
        </motion.div>

        {/* Phase 2 — Name block */}
        <motion.div
          style={{ opacity: opacity2, willChange: 'opacity' }}
          className={phaseClass}
        >
          <div className="max-w-[640px]">
            <p className="text-base md:text-xl text-white mb-3 font-medium tracking-wide drop-shadow-md">
              I Make Automation, AI &amp; Design
            </p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-4"
              style={{ fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              Mangesh Lemte.
            </h2>
          </div>
        </motion.div>

        {/* Phase 3 — Subtitle */}
        <motion.div
          style={{ opacity: opacity3, willChange: 'opacity' }}
          className={phaseClass}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl whitespace-pre-line max-w-[640px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            {`Automation &\nCreative Developer.`}
          </h2>
        </motion.div>

        {/* Phase 3.5 — Cycling taglines (rendered after Phase 3 so they stack on top) */}
        {taglines.map((tag, i) => (
          <motion.div
            key={i}
            style={{
              opacity: taglineOpacities[i],
              x: taglineXs[i],
              willChange: 'opacity, transform',
              zIndex: 2,
            }}
            className={phaseClass}
          >
            <h3
              className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl max-w-[640px]"
              style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              <span className="text-[#ff6b35]">|</span> {tag.text}{' '}
              <span aria-hidden>{tag.emoji}</span>
            </h3>
          </motion.div>
        ))}

        {/* Phase 4 — Final headline */}
        <motion.div
          style={{ opacity: opacity4, willChange: 'opacity', zIndex: 3 }}
          className={phaseClass}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl max-w-[640px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Let's build something{' '}
            <span className="text-[#ff6b35]">great.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}