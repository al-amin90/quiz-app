import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:5000/api`}),
    tagTypes: ['quiz'],
    endpoints: (build) => ({
        getAllQuiz: build.query({
            query: () => `/quizzes`,
            providesTags: ['quiz']
        }),
        addQuizApi: build.mutation({
            query: (body) => ({
                url: '/quizzes',
                method: 'POST',
                body
            }),
            invalidatesTags: ['quiz']
        }),
        updateQuiz: build.mutation({
            query: ({id, data}) => ({
                url: `/quizzes/${id}`,
                method: 'PATH',
                data
            })
        }),
        deleteQuiz: build.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {useGetAllQuizQuery, useAddQuizApiMutation} = quizApi