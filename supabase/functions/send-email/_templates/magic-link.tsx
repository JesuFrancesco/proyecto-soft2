import {
  Body,
  Container,
  Img,
  Head,
  Heading,
  Html,
  Button,
  Link,
  Preview,
  Text,
} from "npm:@react-email/components@0.0.22";
import * as React from "npm:react@18.3.1";

interface MagicLinkEmailProps {
  supabase_url: string;
  email_action_type: string;
  redirect_to: string;
  token_hash: string;
  token: string;
}

export const MagicLinkEmail = ({
  token,
  supabase_url,
  email_action_type,
  redirect_to,
  token_hash,
}: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Estás a un paso de mejorar tu futuro académico.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Código de confirmación</Heading>

        <Container style={logoPlaceholder}>
          <Img
            src="https://eduyacha-jesufrancescos-projects.vercel.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.da5b4922.png&w=256&q=75"
            alt="Logo"
            style={logoStyle}
          />
        </Container>

        <Button
          href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          target="_blank"
          style={{
            ...buttonLink,
            display: "block",
            marginBottom: "16px",
          }}
        >
          Haz click aquí para terminar tu registro
        </Button>

        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          Si usted no autorizó esta acción, porfavor ignore este correo.
        </Text>
        <Text style={footer}>
          <Link
            href="https://eduyacha-jesufrancescos-projects.vercel.app/"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            Eduyacha
          </Link>
          , la educación a tus manos.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default MagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const buttonLink = {
  color: "white",
  padding: "1em 2.5em",
  backgroundColor: "#006d75;",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const logoPlaceholder = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px",
};

const logoStyle = {
  maxWidth: "100px",
  height: "auto",
};
