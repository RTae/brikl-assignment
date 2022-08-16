export const graphqlConfig = {
  installSubscriptionHandlers: true,
  autoSchemaFile: 'src/configs/graphql/schema.gql',
  formatError: (error) => {
    return {
      message: error.extensions?.exception?.response?.message || error.message,
      code: Number(error.extensions?.response?.statusCode)
        ? Number(error.extensions?.response?.statusCode)
        : 500,
      name: error.extensions?.response?.error || error.name,
    }
  },
  cors: {
    origin: '*',
    methods: 'GET, POST',
    /* It's a boolean that tells the server to send cookies to the client. */
    credentials: true,
  },
}
