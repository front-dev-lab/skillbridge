// Styles
import './AuthPage.scss';

// Components
import { Container } from '../../components/Container';
import { TestimonialsSlider } from '../../components/TestimonialsSlider';
import { AuthSection } from '../../components/AuthSection';

export const AuthPage = ({ className }) => {

  return (
    <main className={className + " AuthPage"}>
      <Container>
        <div className="AuthPage__Content">
          <TestimonialsSlider className="AuthPage__Slider" />

          <AuthSection className="AuthPage__Form" />
        </div>
      </Container>
    </main>
  );
};
