// Styles
import './Hero.scss';

// Components
import { Container } from '../Container';
import { ButtonLink } from '../ButtonLink';
import { Partners } from '../Partners';
import { Video } from '../Video';

export const Hero = ({ className }) => (
  <section className={className + ' Hero'}>
    <Container>
      <div className="Hero__Content">
        <article className="Hero__Article">
          <div className="Hero__Text">
            <div className="Hero__TitleWrapper">
              <div className="Hero__Icon"></div>

              <h1 className="Hero__Title">
                <span className="Hero__TitleOrange">
                  Unlock
                </span>
                {' '}
                Your Creative Potential
              </h1>
            </div>

            <p className="Hero__LargeText">
              with Online Design and Development Courses.
            </p>

            <p>
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>

          <div className="Hero__Buttons">
            <ButtonLink
              to="courses"
              text="Explore Courses"
            />

            <ButtonLink
              to="pricing"
              text="View Pricing"
              color="white"
            />
          </div>
        </article>

        <Partners />

        <Video imgSrc="/img/hero-video-bg.png" />
      </div>
    </Container>
  </section>
);
