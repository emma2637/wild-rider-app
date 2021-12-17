import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Header from '../../sections/homePage/header/header.component'
import Footer from '../../sections/homePage/footer/footer.component'
// import SecondFooter from '../sections/homePage/footer/secondFooter.component'

import LayoutComponentService from '../../services/layout.service'
import { useRouter } from 'next/router';

const Layout = ({ children }) => {// locale, footer, header, buttons

    const router = useRouter();

    const [footer, setFooter] = useState([]);
    const [header, setHeader] = useState([]);
    const [buttons, setButtons] = useState([]);
    const [language, setLanguage] = useState(router.locale);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        LayoutComponentService(language).then(result => {
            let data = result.data.homepages[0];

            setFooter(data.footers);
            setHeader(data.headers);
            setButtons(data.buttons);
            setLoaded(true);
        }).catch(error => {
            console.log(error);
        });

    }, []);

    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@600;800&display=swap" rel="stylesheet"></link>
            </Head>
            {loaded ?
                <Header data={{ header, language }} />
                : null}
            {children}
            {loaded ?
                <Footer footer={footer} button={buttons} />
                /* <SecondFooter></SecondFooter> */

                : null}
        </div>
    );

}

export default Layout;
async function getLayouData(language) {
    const result = await LayoutComponentService(language);
    return result;

}

// export async function getStaticProps(locale) {

//     const result = await GetHeaderFooterData(locale.locale);
//     return {
//         props: {
//             locale,
//             footer: result.data.homepages[0].footer,
//             header: result.data.homepages[0].header,
//             buttons: result.data.homepages[0].buttons
//         },
//     };
// }