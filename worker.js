// Serves the static site, and sends the old domain (sweatbuilder.lonn.xyz) to the
// same path on sweatbuilder.losell.nu, since the app and App Store Connect link there.
const OLD_HOST = "sweatbuilder.lonn.xyz";
const NEW_HOST = "sweatbuilder.losell.nu";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === OLD_HOST) {
      url.protocol = "https:";
      url.hostname = NEW_HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
