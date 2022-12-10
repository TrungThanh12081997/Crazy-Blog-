/* eslint-disable no-unreachable-loop */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import RoutesLayout from "routes";
import { DEFAULT_QUERY_OPTION } from "utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TemplateBanicBear from "components/templates/TemplateBanicBear";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: DEFAULT_QUERY_OPTION,
    },
});

const AppWrapper: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
           <TemplateBanicBear/>
        </BrowserRouter>
    </QueryClientProvider>
);

export default AppWrapper;
