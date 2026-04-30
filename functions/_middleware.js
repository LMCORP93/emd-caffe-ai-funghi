export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.hostname === 'emd-caffe-ai-funghi.pages.dev' ||
    url.hostname === 'www.caffe-ai-funghi.com'
  ) {
    url.hostname = 'caffe-ai-funghi.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
