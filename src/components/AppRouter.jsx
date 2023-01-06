import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, REGISTER_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const user = false
    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route id={path} path={path} element={Component} />
                )}

                {publicRoutes.map(({path}) =>
                    <Route id={path} path={path} element={<Navigate to={CHAT_ROUTE} />} />
                )}

                <Route path="/" element={<Navigate to={CHAT_ROUTE} />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route id={path} path={path} element={Component} />
                )}

                {privateRoutes.map(({path}) =>
                    <Route id={path} path={path} element={<Navigate to={REGISTER_ROUTE} />} />
                )}

                <Route path="/" element={<Navigate to={REGISTER_ROUTE} />} />
            </Routes>
        )
};

export default AppRouter;