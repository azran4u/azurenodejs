export interface Configuration {
  server: {
    port: number;
  };
}

export const config: Configuration = {
  server: {
    port: +process.env.PORT || 8090,
  },
};
