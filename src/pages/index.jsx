import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import MainBanner from "../components/MainBanner";
import ContactForm from "../components/ContactForm";
import TechnologiesSection from "../components/TechnologiesSection";
import ProjectsSection from "../components/ProjectsSection";
import WhoAmISection from "../components/WhoAmISection";
import Navbar from "../components/layouts/Navbar";
import MainContent from "../components/layouts/MainContent";
import ContentSection from "../components/layouts/ContentSection";
import TitleComponent from "../components/TitleComponent";


export default () => (
    <BaseLayout>
        <Navbar></Navbar>
        <MainContent>
            <ContentSection>
                <TitleComponent title="Proyectos"></TitleComponent>
                <ProjectsSection />
            </ContentSection>
            <ContentSection>
                <TitleComponent title="Acerca de mi"></TitleComponent>
                <WhoAmISection></WhoAmISection>
            </ContentSection>
            <ContentSection>
                <TitleComponent title="Tecnologias"></TitleComponent>
                <TechnologiesSection></TechnologiesSection>
            </ContentSection>
            <ContentSection>
                <TitleComponent title="Contacto"></TitleComponent>
                <ContactForm></ContactForm>
            </ContentSection>
        </MainContent>
    </BaseLayout>
)
