import * as React from "react";
import Layout from "@/src/layout/Layout";
import globalStyle from "@/styles/globalStyle";
import theme from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.css";
import ApolloSetting from "@/src/components/commons/apollo";
import Head from "next/head";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";

// 카카오 소셜 로그인
// 백엔드에서 api 만들어줘야하는 방식
// 다른 방식으로 할 시 코드 삭제 필요

declare const window: typeof globalThis & {
  Kakao: any;
};

const firebaseConfig = {
  apiKey: "AIzaSyD8O4nN-04jv2iulO2hSgkYR1sGJokxlmc",
  authDomain: "codecamp-dabae.firebaseapp.com",
  projectId: "codecamp-dabae",
  storageBucket: "codecamp-dabae.appspot.com",
  messagingSenderId: "572156246139",
  appId: "1:572156246139:web:01ca9488c25042a5054ade",
};
initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init("03f24393b1cedc95fd65fd0d50f4ab01");
      window.Kakao.isInitialized();
    };
  }, []);

  return (
    <>
      <Head>
        <title>다배</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;