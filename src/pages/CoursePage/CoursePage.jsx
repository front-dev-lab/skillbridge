import { useEffect, useRef } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { convertToUrlText } from '../../utils/convertToUrlText';
import data from '../../data/data.json';

// Styles
import './CoursePage.scss';

// Components
import { PageOverview } from '../../components/PageOverview';
import { Container } from '../../components/Container';
import { Video } from '../../components/Video';
import { CurriculumList } from '../../components/CurriculumList';

export const CoursePage = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const { name } = useParams();
  const { courses } = data;
  const selectedCourse = courses.find(course => convertToUrlText(course.name) === name) || courses[0];
  const selectedLessonName = searchParams.get('lesson');
  const selectedLesson = selectedCourse?.curriculum
    .flatMap(section => section.lessons)
    .find(lesson => convertToUrlText(lesson.name) === selectedLessonName);
  const videoUrl = selectedLesson?.video ?? selectedCourse?.curriculum[0].lessons[0].video;

  useEffect(() => {
    if(!courses.some(course => convertToUrlText(course.name) === name)) {
      navigate(
        `/courses/${convertToUrlText(courses[0].name)}`,
        { replace: true }
      );
    }

    if (!selectedLessonName || !selectedLesson) {
      setSearchParams({
        lesson: convertToUrlText(selectedCourse.curriculum[0].lessons[0].name)
      });
    }
  }, [
      courses,
      name,
      navigate,
      selectedCourse,
      selectedLesson,
      selectedLessonName,
      setSearchParams
    ]);

  return (
    <main className={className + " CoursePage"}>
      {!selectedCourse ?
        (
          <p>There is no such course</p>
        ) : (
          <>
            <PageOverview
              title={selectedCourse.name}
              text={selectedCourse.description}
            />

            <section 
              ref={videoRef}
              className="CoursePage__Video"
            >
              <Container>
                <Video
                  imgSrc={selectedCourse.images[0]}
                  src={videoUrl}
                />
              </Container>
            </section>

            <section>
              <Container>
                <CurriculumList
                  curriculum={selectedCourse.curriculum}
                  videoRef={videoRef}
                />
              </Container>
            </section>
          </>
        )}
    </main>
  )
};
