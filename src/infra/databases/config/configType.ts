export type MssqlConfigType = {
  user: string;
  password: string;
  server: string;
  port: number;
  options?: {
    trustServerCertificate?: boolean;
  };
};
