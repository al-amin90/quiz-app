import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAppSelector } from '@/redux/hook';

const QuizSummary = () => {
    const {question, userAnswers} = useAppSelector((state) => state.quiz)

    const currentAnswerCount = question.reduce((count, qun, index) => {
        return qun.correctAnswer === userAnswers[index] ? count + 1 : count;
    }, 0)
    const curectPercentage = parseFloat(((currentAnswerCount/question.length)*100).toFixed(2))

    return (
        <div className='flex justify-center mt-7'>
            <Card className='w-[450px]'>
                <CardHeader>Quiz Summary</CardHeader>
                <CardContent>
                    <h4>you got {currentAnswerCount} out of {question.length}</h4>
                    <Progress value={curectPercentage} />
                    <h4>Current Answer: {currentAnswerCount}</h4>
                </CardContent>
            </Card>
        </div>
    );
};

export default QuizSummary;