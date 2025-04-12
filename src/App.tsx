import AddQuiz from "./pages/home/AddQuiz";
import AllQuiz from "./pages/home/AllQuiz";
import Question from "./pages/home/Question";
import QuizSummary from "./pages/home/QuizSummary";
import { useAppSelector } from "./redux/hook";

function App() {
  const {quizCompleted} = useAppSelector((state) => state.quiz)

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-5xl my-12">Jakanaka Quiz App</h3>
      <AddQuiz/>
      <AllQuiz/>
      {
        !quizCompleted ? <Question></Question> : <QuizSummary></QuizSummary>
      }
    </div>
  );
}

export default App;
