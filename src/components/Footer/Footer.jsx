// Styles
import './Footer.scss';

// Components
import { Container } from '../Container';
import { Logo } from '../Logo';
import { ContactsList } from '../ContactsList';
import { LinksList } from '../LinksList';
import { Socials } from '../Socials';

export const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer__Content">
          <div className="Footer__Top">
            <div className="Footer__Left">
              <Logo />

              <ContactsList />
            </div>

            <div className="Footer__Right">
              <div className="Footer__Column">
                <h3 className="Footer__ColumnTitle">
                  Home
                </h3>

                <LinksList
                  hashTags={['benefits', 'our-courses', 'our-testimonials', 'our-FAQ']}
                  to="/"
                />
              </div>

              <div className="Footer__Column">
                <h3 className="Footer__ColumnTitle">
                  About Us
                </h3>

                <LinksList
                  hashTags={['company', 'achievements', 'our-goals']}
                  to="about-us"
                />
              </div>

              <div className="Footer__Column">
                <h3 className="Footer__ColumnTitle">
                  Social Profiles
                </h3>

                <Socials />
              </div>
            </div>
          </div>

          <p className="Footer__Copyright">
            © 2023 Skillbridge. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
