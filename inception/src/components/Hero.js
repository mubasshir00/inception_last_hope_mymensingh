export default function Hero() {
  return (
    <section className="section">
      <div className="section__content h-screen relative" data-content>
        <div className="bg"></div>
        <div
          className="absolute overlay inset-0"
          style={{
            background: 'rgba(0,0,0,0.3)',
          }}
        ></div>

        <h1 className="absolute top-[10px] text-center text-white text-[6rem] font-bold w-full flex items-center justify-center">
          Explore Moonquake
        </h1>
      </div>
    </section>
  )
}
