import React from "react";
import Head from "next/head";

export default function MainHead(props){
    return (
        <>
        <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{props.title}</title>
            <link rel="stylesheet" href="" type="text/css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        </>
    )
} 