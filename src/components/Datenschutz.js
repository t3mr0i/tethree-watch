import React from 'react';
import styled from 'styled-components';

const DatenschutzContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const Datenschutz = () => {
  return (
    <DatenschutzContainer>
      <Heading>Datenschutzerklärung</Heading>
      {/* Add your Datenschutz content here */}
      <Paragraph>
        Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Eine
        Nutzung der Internetseiten ist grundsätzlich ohne jede Angabe
        personenbezogener Daten möglich. Sofern eine betroffene Person
        besondere Services unseres Unternehmens über unsere Internetseite in
        Anspruch nehmen möchte, könnte jedoch eine Verarbeitung
        personenbezogener Daten erforderlich werden.
      </Paragraph>
      {/* Add more paragraphs if needed */}
    </DatenschutzContainer>
  );
};

export default Datenschutz;