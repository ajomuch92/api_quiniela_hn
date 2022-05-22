import { Application } from './deps.ts';
import router from './routes.ts';
import NotFound from './notFound.ts';

import './database/index.ts';


const env = Deno.env.toObject();
const PORT = env.PORT || 8080;
const HOST = env.HOST || 'localhost';

const app = new Application();

// app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(NotFound);

app.addEventListener('listen', () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});

await app.listen(`${HOST}:${PORT}`);