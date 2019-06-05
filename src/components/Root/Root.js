import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import HeroView from 'views/HeroView/HeroView';
import { theme } from 'theme/mainTheme';
import OurHistoryView from 'views/OurHistoryView/OurHistoryView';
import HelpView from 'views/HelpView/HelpView';
import StatisticsFAQView from 'views/StatisticsFAQView/StatisticsFAQView';
import ContactAboutView from 'views/ContactAboutView/ContactAboutView';
import ExperienceView from 'views/ExperienceView/ExperienceView';
import FooterView from 'views/FooterView/FooterView';
import Navigation from 'components/Navigation/Navigation';

const Root = () => {
  return (
    <>
      <Helmet>
        <title>Com-Net Salon Komputerowy Dzierżoniów</title>
        <meta
          name="description"
          content="Salon komputerowy i serwis w Dzierżoniowie. Jesteśmy na rynku już od 1997 roku ,specjalizujemy się w montażu jak i konfiguracji Twojego komputera. Sprawdź Nas!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1488CC" />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="salon komputerowy dzierżoniów laptopy serwis komputerów i laptopów projekty stron internetowych"
        />
        <meta
          name="google-site-verification"
          content="2Ez6WpKzebJehFJrCdkMzHWlGNtHsow1gvEAdRHMeRs"
        />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Navigation />
          <HeroView />
          <OurHistoryView />
          <HelpView />
          <StatisticsFAQView />
          <ContactAboutView />
          <ExperienceView />
          <FooterView />
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;
