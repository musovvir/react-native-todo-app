import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { MainLayout } from "./src/MainLayout";
import { TodoState } from "./src/context/todo/TodoState";

async function loadApllication() {
    await Font.loadAsync({
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
    });
}

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApllication}
                onError={(err) => console.warn(err)}
                onFinish={() => setIsReady(true)}
            />
        );
    }

    return (
        <TodoState>
            <MainLayout />
        </TodoState>
    );
}
