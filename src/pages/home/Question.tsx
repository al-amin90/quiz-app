import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControl from "./QuizControl";

const Question = () => {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex , userAnswers} = useAppSelector(
    (state) => state.quiz
  );

  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex]

  const handleAnswer = (option: string) => {
    dispatch(setAnswer({ questIndex: currentQuestionIndex, option }));
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question: {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              onClick={() => handleAnswer(option)}
              key={index}
              size={"lg"}
              className="w-full mt-3"
              variant={option === currentAnswer ? "default" : 'outline'}
            >
              {option}
            </Button>
          ))}
          <QuizControl></QuizControl>
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;
