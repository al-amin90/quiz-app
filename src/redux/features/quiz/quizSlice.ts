import { quizData } from "@/pages/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

export type TQuiz = {
  _id: string;
  createdAt: string;
  description: string;
  questions: TQuizData[];
  title: string;
  updatedAt: string;
};

interface TQuizData {
  question: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  quizCompleted: boolean;
}

const initialState: TQuizData = {
  question: [],
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questIndex, option } = action.payload;
      state.userAnswers[questIndex] = option;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1)
        state.currentQuestionIndex += 1;
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizCompleted = true;
    },
    setQuiz: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const {
  setAnswer,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  setQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
