import React from "react";
import App from "./App";
import { ResetCSS } from "./Global/resetCss";
import StoreProvider from "./Providers/store-provider";

export const Provider = () =>{
    return(
        <>
        <StoreProvider>
            <App/>
            <ResetCSS/>
        </StoreProvider>
        </>
    )
}
