import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Desarrolladora backend en Python, Django y bases de datos postgres. Soluciones innovadoras de backend para proyectos web. Enfoque en seguridad, escalabilidad y rendimiento. Contáctame para llevar tu proyecto al siguiente nivel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
    </>
  );
}
