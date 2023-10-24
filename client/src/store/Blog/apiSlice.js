import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = 'http://api.test';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders:(headers) => {

        }
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => `/posts`
        }),
        getPostById: builder.query({
            query: (postId) => `/posts/${postId}`
        }),
        addNewPost: builder.mutation({
            query: (newPost) => ({
                url: '/posts/new',
                method: 'POST',
                body: newPost,
            }),
        }),
        deletePost: builder.mutation({
            query: (postId) => ({
                url: `/posts/${postId}`,
                method: 'DELETE',
            })
        })
    }),
})

export const {
    useGetAllPostsQuery,
    useGetPostByIdQuery,
    useAddNewPostMutation,
    useDeletePostMutation
} = postsApi;
