import React from "react";
import ReactDOM from "react-dom/client";
import "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routing/routes.js";
import { RouterProvider } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <SkeletonTheme
                    baseColor="rgba(191, 191, 191, 0.6)"
                    highlightColor="rgba(243, 242, 241, 0.8)"
                >
                    <RouterProvider router={router} />
                </SkeletonTheme>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
