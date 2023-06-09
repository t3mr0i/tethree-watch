import React from 'react';
import styled from 'styled-components';

const ImpressumContainer = styled.section`
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

const Impressum = () => {
  return (
    <ImpressumContainer>
      <Heading>Impressum</Heading>
      {/* Add your Impressum content here */}
      <Paragraph>
        Tethree by Kai Detmers<br />
        Kommodore-Ziegenbein-Allee 10<br />
        28217 Bremen<br />
        Telefon: 01734038349<br />
        E-Mail: t3mr0i@googlemail.com<br />
        Geschäftsführer: Kai Detmers<br />
      </Paragraph>
      {/* Add more paragraphs if needed */}
    </ImpressumContainer>
  );
};

export default Impressum;