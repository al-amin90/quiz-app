import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz, type TQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hook";

const AllQuiz = () => {
    const dispatch = useAppDispatch()
  const { data, isLoading } = useGetAllQuizQuery(undefined);

  if (isLoading) {
    return <p>Loading/...</p>;
  }

  return (
    <div className="my-3">
      <div className="grid grid-cols-3 gap-4">
        {data.map((quiz: TQuiz, index: string) => (
          <Card onClick={() => dispatch(setQuiz(quiz.questions))} className="p-4 cursor-pointer hover:shadow-md" key={index}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
