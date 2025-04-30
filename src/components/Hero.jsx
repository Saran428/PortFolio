
/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            {/* <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Henry clark portrait"
                className="img-cover"
              />
            </figure> */}

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              {/* <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span> */}

              
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Hello, I am <br /> Saran Kumar <br /> <p className="font-thin text-xl">  I'm a Frontend Developer. I build beautiful, responsive, and accessible websites using modern technologies like HTML, CSS, JavaScript, and React.</p>
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          {/* bg-gradient-to-t from-red-400 via-25% via-red-400/40 to-65% rounded-[60px] */}
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-slate-400 via-25% via-slate-200/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner-6.png"
              width={656}
              height={800}
              alt="Saran Kumar"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero