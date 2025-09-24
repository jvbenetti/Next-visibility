function MyApp({ Component, pageProps }) {
    return (
        <>
            Esse texto aparece em todas as páginas!
            <Component {...pageProps} />
        </>
    )
}

export default MyApp