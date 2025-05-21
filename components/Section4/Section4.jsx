import "./Section4.css";
import Button from "../Other/button";
import Pbutton from "../Other/Pbutton";
import man1 from "../../assets/man1.webp";
import man2 from "../../assets/man2.webp";
import man3 from "../../assets/man3.webp";
import girl1 from "../../assets/girl1.webp";
import star from "../../assets/star.svg";
import halfstar from "../../assets/Halfstar.svg";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <section className="section-four">
      <div className="section-four-main">
        <div className="secFour-div1">
          <div className="secFourinner-div1">
            <Link to="/contact">
              <Pbutton>Happy Clients</Pbutton>
            </Link>
            <h1 className="secFour-hm">
              <span className="ClientsSpan">Clients </span>Love us
            </h1>
            <p className="secFour-p">
              Trusted by 100+ happy clients, adding 250M+ in revenue.
            </p>
          </div>
          <div className="secFourinner-div2">
            <div className="cc happyCard">
              <h2>100+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="cc revenueCard">
              <h2>$250M+</h2>
              <p>Revenue Generated</p>
            </div>
            <div className="cc ratingCard">
              <h2>4.8</h2>
              <p>Rating</p>
            </div>
          </div>
          <div className="secFourinner-div3">
            <Link to="/contact">
              <Button className="sec4-inner-b">Contact Now</Button>
            </Link>
          </div>
        </div>

        {/* ========================================================== */}
        <div className="cards-main">
          <div className="dd1 secFour-div2">
            <div className="secFour-div2-inner">
              <img src={man1} alt="Joe Parry Lead Nationwide Client Testimonial for GIXI AI Solutions" className="man1" loading="lazy" />
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
                  <img src={star} alt="5-star review for GIXI AI Solutions by Joe Parry Lead Nationwide" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Joe Parry Lead Nationwide" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Joe Parry Lead Nationwide" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Joe Parry Lead Nationwide" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Joe Parry Lead Nationwide" loading="lazy" />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                  The designs exceeded our expectations! Every element felt
                  purposeful, creating a seamless and visually stunning brand
                  identity
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="dd2 secFour-div2">
            <div className="secFour-div2-inner">
              <img src={man2} alt="Daniel Brooks Apex Growth Labs Client Testimonial for GIXI AI Solutions" className="man1" loading="lazy" />
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
                  <img src={star} alt="4.7-star review for GIXI AI Solutions by Daniel Brooks Apex Growth Labs" loading="lazy" />
                  <img src={star} alt="4.7-star review for GIXI AI Solutions by Daniel Brooks Apex Growth Labs" loading="lazy" />
                  <img src={star} alt="4.7-star review for GIXI AI Solutions by Daniel Brooks Apex Growth Labs" loading="lazy" />
                  <img src={star} alt="4.7-star review for GIXI AI Solutions by Daniel Brooks Apex Growth Labs" loading="lazy" />
                  <img src={halfstar} alt="Half star review for GIXI AI Solutions by Daniel Brooks Apex Growth Labs" loading="lazy" />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="dd3 secFour-div2">
            <div className="secFour-div2-inner">
              <img src={man3} alt="Jared Thompson PixelForge Media Client Testimonial for GIXI AI Solutions" className="man1" loading="lazy" />
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
                  <img src={star} alt="5-star review for GIXI AI Solutions by Jared Thompson PixelForge Media" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Jared Thompson PixelForge Media" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Jared Thompson PixelForge Media" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Jared Thompson PixelForge Media" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Jared Thompson PixelForge Media" loading="lazy" />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement
                </p>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div style={{}} className="secFour-div2">
            <div className="secFour-div2-inner">
              <img src={girl1} alt="Emily Carter NovaReach Solutions Client Testimonial for GIXI AI Solutions" className="man1" loading="lazy" />
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
                  <img src={star} alt="5-star review for GIXI AI Solutions by Emily Carter NovaReach Solutions" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Emily Carter NovaReach Solutions" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Emily Carter NovaReach Solutions" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Emily Carter NovaReach Solutions" loading="lazy" />
                  <img src={star} alt="5-star review for GIXI AI Solutions by Emily Carter NovaReach Solutions" loading="lazy" />
                </div>
              </div>
              <div className="secFour-div2-inner-text3">
                <p>
                A game-changing experience! The design process was smooth, collaborative, and resulted in a brand presence we’re proud of
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
