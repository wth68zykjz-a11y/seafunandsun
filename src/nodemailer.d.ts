declare module "nodemailer" {
  interface SendMailOptions {
    from?: string;
    to?: string;
    replyTo?: string;
    subject?: string;
    text?: string;
  }
  interface Transporter {
    sendMail(options: SendMailOptions): Promise<unknown>;
    close(): void;
  }
  interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    requireTLS?: boolean;
    auth?: { user?: string; pass?: string };
    connectionTimeout?: number;
    greetingTimeout?: number;
    socketTimeout?: number;
  }
  function createTransport(options: TransportOptions): Transporter;
  export default { createTransport };
}
