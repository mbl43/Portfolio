import { useScroll, useTransform, motion } from 'framer-motion';

const taglines = [
  { text: 'I build modern websites', emoji: '⚡' },
  { text: 'I design UI/UX in Figma', emoji: '🎨' },
  { text: 'I build AI Automation', emoji: '🚀' },
];

// All scroll phases defined as data — easy to tweak
const PHASES = {
  watermark: { in: [0, 0.18],      out: [0.18, 0.22] },
  name:      { in: [0.22, 0.30],   out: [0.36, 0.40] },
  subtitle:  { in: [0.40, 0.46],   out: [0.50, 0.52] },
  taglines: [
    { in: [0.53, 0.57], out: [0.63, 0.67] },
    { in: [0.67, 0.71], out: [0.76, 0.80] },
    { in: [0.80, 0.84], out: [0.88, 0.92] },
  ],
  final:     { in: [0.92, 0.96] },
};

// Helper — builds a fade-in → hold → fade-out transform
function useFade(scrollYProgress, { in: [i0, i1], out: [o0, o1] }) {
  return useTransform(scrollYProgress, [i0, i1, o0, o1], [0, 1, 1, 0]);
}

// Helper — builds a fade-in → hold (no fade out) transform
function useFadeIn(scrollYProgress, { in: [i0, i1] }) {
  return useTransform(scrollYProgress, [i0, i1, 1.0], [0, 1, 1]);
}

const PHASE_CLASS =
  'absolute inset-0 flex flex-col justify-center items-start text-left pl-8 md:pl-16 lg:pl-24 pr-8 pointer-events-none';

export default function Overlay({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1 — watermark
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  const visibility1 = useTransform(opacity1, (v) => (v < 0.01 ? 'hidden' : 'visible'));

  // Phase 2 — name block
  const opacity2 = useFade(scrollYProgress, PHASES.name);

  // Phase 3 — subtitle
  const opacity3 = useFade(scrollYProgress, PHASES.subtitle);

  // Phase 3.5 — taglines (opacity + slide-in x)
  const taglineTransforms = PHASES.taglines.map(({ in: [i0, i1], out: [o0, o1] }) => ({
    opacity: useTransform(scrollYProgress, [i0, i1, o0, o1], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [i0, i1], [-30, 0]),
  }));

  // Phase 4 — final headline
  const opacity4 = useFadeIn(scrollYProgress, PHASES.final);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Phase 1 — Watermark */}
        <motion.div
          style={{ opacity: opacity1, visibility: visibility1, willChange: 'opacity, visibility' }}
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
        <motion.div style={{ opacity: opacity2, willChange: 'opacity' }} className={PHASE_CLASS}>
          <div className="max-w-[640px]">
            <p className="text-base md:text-xl text-white mb-3 font-medium tracking-wide drop-shadow-md">
              I Make Automation, Website &amp; Design
            </p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-4"
              style={{ fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              Mangesh Lemte
            </h2>
          </div>
        </motion.div>

        {/* Phase 3 — Subtitle */}
        <motion.div style={{ opacity: opacity3, willChange: 'opacity' }} className={PHASE_CLASS}>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl whitespace-pre-line max-w-[640px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            {`React Developer.`}
          </h2>
        </motion.div>

        {/* Phase 3.5 — Cycling taglines */}
        {taglines.map((tag, i) => (
          <motion.div
            key={i}
            style={{
              opacity: taglineTransforms[i].opacity,
              x: taglineTransforms[i].x,
              willChange: 'opacity, transform',
              zIndex: 2,
            }}
            className={PHASE_CLASS}
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
          className={PHASE_CLASS}
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