import { useRouter } from "next/router";
import Head from "next/head";
import PrincipalNavBar from "../components/PrinpalNavBar";

// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home(props) {
  const { locale, defaultLocale } = useRouter();

  console.log(locale, defaultLocale);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen">
        <PrincipalNavBar />
      </main>
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//     },
//   };
// }
