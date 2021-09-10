// Import Modules

import {CoCthActorSheet} from "./actor/actor-sheet.js";
import {CoCthNpcSheet} from "./actor/npc-sheet.js";
import {CoCthEncounterSheet} from "./actor/encounter-sheet.js";
import {CoCthItemSheet} from "./items/item-sheet.js";

Hooks.once("init", async () => {
    console.debug("COC Cthulhu Initialization...");

    // Register actor sheets
    Actors.registerSheet("coc-cthulhu", CoCthActorSheet, {
        makeDefault: true,
        label: "COCTH.sheet.actor"
    });

    Actors.registerSheet("coc-cthulhu", CoCthActorSheet, {types: ["character"], makeDefault: true, label: "COCTH.sheet.actor"});
    Actors.registerSheet("coc-cthulhu", CoCthNpcSheet, {types: ["npc"], makeDefault: true, label: "COCTH.sheet.npc"});
    Actors.registerSheet("coc-cthulhu", CoCthEncounterSheet, {types: ["encounter"], makeDefault: true, label: "COCTH.sheet.encounter"});
    // Register item sheets
    Items.registerSheet("coc-cthulhu", CoCthItemSheet, {types: ["item", "trait", "capacity", "profile", "path", "encounterWeapon"], makeDefault: true, label: "COCTH.sheet.item"});

});
