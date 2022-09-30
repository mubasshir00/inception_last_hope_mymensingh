export default function Hero() {
  return (
    <section className="section">
      <div className="section__content h-screen relative" data-content>
        <div className="bg"></div>
        <div
          className="absolute overlay inset-0"
          style={{
            background: 'rgba(0,0,0,0.1)',
          }}
        ></div>

        {/* <h1 className="absolute text-white">Explore Moonquake</h1> */}
      </div>
    </section>
  )
}
