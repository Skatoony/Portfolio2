/**
 * Decorative ambient gradient glows that sit above the network canvas
 * (z-0) but below page content. Adds depth and a modern brand wash.
 */
export default function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/15 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#08080c] to-transparent" />
    </div>
  )
}
