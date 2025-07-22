import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Message from Contact Form</Heading>
        <Text style={paragraph}>
          You have received a new message from your portfolio contact form.
        </Text>
        <Text style={paragraph}>
          <strong>From:</strong> {name}
        </Text>
        <Text style={paragraph}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={paragraph}>
          <strong>Message:</strong>
        </Text>
        <Text style={paragraph}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

// Some basic styling
const main = {
  backgroundColor: "#ffffff",
  fontFamily: "sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#484848",
};