
import * as redis from 'redis';

export default redis.createClient({
  port: Number.parseInt(process.env.REDIS_PORT),
  host: process.env.REDIS_HOST
});
