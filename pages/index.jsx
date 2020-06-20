import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import FixedHorizontalNavbar from "../components/layouts/FixedHorizontalNavbar";
import ContentLayout from "../components/layouts/ContentLayout";
import MainBanner from "../components/MainBanner";
import MainFooter from "../components/MainFooter";
import OverviewSection from "../components/OverviewSection";


export default () => (
    <BaseLayout>
        <FixedHorizontalNavbar/>
        <ContentLayout class="main-content">
            <MainBanner></MainBanner>
            <OverviewSection title="Tutoriales"></OverviewSection>
            <OverviewSection title="Articulos"></OverviewSection>
            <OverviewSection title="Cursos"></OverviewSection>
            <OverviewSection title="Mas diversion"></OverviewSection>
        </ContentLayout>
        <MainFooter></MainFooter>
    </BaseLayout>
)
