// Este arquivo apresenta configurações globais para todas as páginas do Next.js

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style>{`
                * {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            `}
            </style>
            Esse texto aparece em todas as páginas!
            <Component {...pageProps} />
        </>
    )
}

export default MyApp