// deno-lint-ignore no-explicit-any
export default ({ response }: { response: any }) => {
  response.status = 404;
  response.body = {
    message: '404 - Route not found.',
  };
}