export default {
  async fetch(request, env) {
    const fichier = await env.ASSETS.fetch(request);

    // Les pages/fichiers réels, comme /lbc/, restent accessibles.
    if (fichier.status !== 404) {
      return fichier;
    }

    // Les chemins inconnus, comme /instagram ou /lbc/all,
    // utilisent la page index.html et sa liste de redirections.
    return env.ASSETS.fetch(new URL("/", request.url));
  }
};