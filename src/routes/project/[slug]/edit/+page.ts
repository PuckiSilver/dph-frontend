import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { fetchAuthed } from "$lib/globals/functions";
import { browser } from "$app/environment";
import type { Project, User, Version } from "$lib/globals/schema";

export const load = (async ({ params }) => {
  if (browser) {
    const projectReq = await fetchAuthed("get", "/projects/get/" + params.slug);

    if (projectReq.status == 404) {
      throw error(404, {
        message: "Silly boy!",
        description: "Doesn't exist, nerd!"
      });
    }

    const projectJson = (await projectReq.json()) as Project;
    const meReq = await fetchAuthed("get", "/user/me");

    if (meReq.status == 401) {
      throw error(401, {
        message: "Please sign in.",
        description:
          "If you are signed in, then our server must be down. Sorry!"
      });
    }

    const meJson = (await meReq.json()) as User;
    if (
      meJson.id == projectJson.author ||
      ["admin", "moderator"].includes(meJson.role)
    ) {
      const versionsReq = (
        await (
          await fetchAuthed("get", "/versions/project/" + projectJson.ID)
        ).json()
      ).result as Version[];
      return {
        project: projectJson,
        versions: versionsReq
      };
    }

    throw error(403, {
      message: "Not your project.",
      description: "Only the owner can edit this."
    });
  }
}) satisfies PageLoad;
