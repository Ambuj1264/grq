// Src/config/database.config.ts
export default () => ({
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/nestgraphql',
});
