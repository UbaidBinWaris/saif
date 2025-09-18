import "./Section4.css";
import Button from "../../../../components/Other/button";
import Pbutton from "../../../../components/Other/Pbutton";
import { PATHS } from "../../../../constants/assetPaths";
import Link from "next/link";
import Image from "next/image";

const SectionFour = () => {
  return (
    <section className="section-four">
      <div className="section-four-main">
        <div className="secFour-div1">
          <div className="secFourinner-div1">
            <Link href="/contact">
              <Pbutton>Automation Clients</Pbutton>
            </Link>
            <h1 className="secFour-hm">
              <span className="ClientsSpan">We Automate </span>Businesses
            </h1>
            <p className="secFour-p">
              Trusted by 100+ clients, automating workflows and unlocking $250M+ in value.
            </p>
          </div>
          <div className="secFourinner-div2">
            <div className="cc happyCard">
              <h2>100+</h2>
              <p>Automation Clients</p>
            </div>
            <div className="cc revenueCard">
              <h2>$250M+</h2>
              <p>Value Automated</p>
            </div>
            <div className="cc ratingCard">
              <h2>4.8</h2>
              <p>Client Rating</p>
            </div>
          </div>
          <div className="secFourinner-div3">
            <Link href="/contact">
              <Button className="sec4-inner-b">Automate Now</Button>
            </Link>
          </div>
        </div>

        {/* ========================================================== */}
        <div className="cards-main">
          <div className="dd1 secFour-div2">
            <div className="secFour-div2-inner">
              <Image src={PATHS.TEAM.MAN_1} alt="Joe Parry Lead Nationwide Automation Testimonial for GIXI AI Solutions" className="man1" width={80} height={80} />
              <div className="secFour-div2-inner-text">
                <h3>Joe Parry</h3>
                <p>Lead Nationwide</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="secFour-div2-inner-text2">
                <p>5.0</p>
                <div className="stars">
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                  The automation solutions exceeded our expectations! Every workflow was streamlined, saving us countless hours and boosting productivity.
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="dd2 secFour-div2">
            <div className="secFour-div2-inner">
              <Image src={PATHS.TEAM.MAN_2} alt="Daniel Brooks Apex Growth Labs Automation Testimonial for GIXI AI Solutions" className="man1" width={80} height={80} />
              <div className="secFour-div2-inner-text">
                <h3>Daniel Brooks</h3>
                <p>Apex Growth Labs</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="secFour-div2-inner-text2">
                <p>4.7</p>
                <div className="stars">
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.HALFSTAR} alt="Half star automation review for GIXI AI Solutions" width={16} height={16} />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                  Automating our processes was effortless. The team understood our needs and delivered solutions that truly optimized our operations.
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="dd3 secFour-div2">
            <div className="secFour-div2-inner">
              <Image src={PATHS.TEAM.MAN_3} alt="Jared Thompson PixelForge Media Automation Testimonial for GIXI AI Solutions" className="man1" width={80} height={80} />
              <div className="secFour-div2-inner-text">
                <h3>Jared Thompson</h3>
                <p>PixelForge Media</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="secFour-div2-inner-text2">
                <p>5.0</p>
                <div className="stars">
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                  Exceptional automation and attention to detail! Our team can now focus on creative work while repetitive tasks are handled automatically.
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div style={{}} className="secFour-div2">
            <div className="secFour-div2-inner">
              <Image src={PATHS.TEAM.GIRL_1} alt="Emily Carter NovaReach Solutions Automation Testimonial for GIXI AI Solutions" className="man1" width={80} height={80} />
              <div className="secFour-div2-inner-text">
                <h3>Emily Carter</h3>
                <p>NovaReach Solutions</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="secFour-div2-inner-text2">
                <p>5.0</p>
                <div className="stars">
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                  <Image src={PATHS.ICONS.STAR} alt="5-star automation review for GIXI AI Solutions" width={16} height={16} />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                  A game-changing automation experience! Our workflows are now seamless, and our team is more efficient than ever.
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
