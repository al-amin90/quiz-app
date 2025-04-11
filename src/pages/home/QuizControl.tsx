import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { quizData } from "./quizData";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const isSelected = userAnswers[currentQuestionIndex] !== null;
  const isCompletedQuiz =
    isSelected || currentQuestionIndex !== quizData.length - 1;

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  return (
    <div className="flex justify-between mt-4">
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={handlePreviousQuestion}
      >
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isSelected} onClick={handleNextQuestion}>
          Next
        </Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button disabled={!isCompletedQuiz} onClick={() => dispatch(completeQuiz())}>Complete Quiz</Button>
      )}
    </div>
  );
};

export default QuizControl;
