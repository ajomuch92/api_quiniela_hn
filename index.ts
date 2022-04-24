import { Application } from './deps.ts';
import router from './routes.ts';

import './database/index.ts';


const env = Deno.env.toObject()
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

const app = new Application();

// app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(_404);

console.log(`Server running on port ${PORT}`);

await app.listen(`${HOST}:${PORT}`);