import { Flow } from "@vaadin/flow-frontend/Flow";
import { Router } from "@vaadin/router";
// @ts-ignore
import { applyTheme } from "@vaadin/flow-frontend/theme/applicationTheme.js";

export const addCssBlock = function (block: string, before = false) {
  const tpl = document.createElement("template");
  tpl.innerHTML = block;
  //@ts-ignore
  document.head[before ? "insertBefore" : "appendChild"](
    tpl.content,
    document.head.firstChild
  );
};

addCssBlock(
  '<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',
  true
);

applyTheme(document);

const { serverSideRoutes } = new Flow({
  imports: () => import("../target/frontend/generated-flow-imports"),
});

const routes = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v15/flow/typescript/creating-routes.html)
  {
    path: "",
    component: "main-view",
    action: async () => {
      await import("./views/main/main-view");
    },
    children: [
      {
        path: "ts",
        component: "ts-view",
        action: async () => {
          await import("./views/ts/ts-view");
        },
      },
      // for server-side, the next magic line sends all unmatched routes:
      ...serverSideRoutes, // IMPORTANT: this must be the last entry in the array
    ],
  },
];

export const router = new Router(document.querySelector("#outlet"));
router.setRoutes(routes);
