import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '3cacb5552cmshc8804035bec63d5p120323jsne1659464c9e9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({

    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>  ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        })
    })
    
});


export const{ useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;