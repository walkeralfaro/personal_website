import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

export interface EmailTemplateProps {
  UserName?: string;
  UserEmail?: string;
  UserSubject?: string;
  UserMessage?: string;
}

export const EmailTemplate = ({ UserName, UserEmail, UserSubject, UserMessage } : EmailTemplateProps) => {
  return (
    <Html lang='es'>
      <Head />
      <Preview>{ UserSubject }</Preview>
      <Body>

        <Container>
          <Section className='user_info'>
            <Text className='user_info_name'>
              Nombre: <strong>{ UserName }</strong>
            </Text>
            <Text className='user_info_email'>
              Correo: <strong>{ UserEmail }</strong>
            </Text>
            <Text className='user_info_origin'>
              Origen: <strong>Página Web</strong>
            </Text>
          </Section>

          <Section className='user_message'>
            <Text>
              <strong>Mensaje:</strong><br/>
              { UserMessage }
            </Text>
          </Section>
        </Container>

      </Body>
    </Html>
  )
}
