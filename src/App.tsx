import Question from "./pages/home/Question";
import QuizSummary from "./pages/home/QuizSummary";
import { useAppSelector } from "./redux/hook";

function App() {
  const {quizCompleted} = useAppSelector((state) => state.quiz)

  return (
    <>
      <h3 className="text-center text-5xl my-12">Jakanaka Quiz App</h3>
      {
        !quizCompleted ? <Question></Question> : <QuizSummary></QuizSummary>
      }
    </>
  );
}

export default App;
