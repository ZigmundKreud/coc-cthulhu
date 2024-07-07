import {CoCEncounterSheet} from "/systems/coc/module/actors/encounter-sheet.js";

export class CoCthEncounterSheet extends CoCEncounterSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["coc", "cocth", "sheet", "actor", "encounter"],
            template: "/systems/coc/templates/actors/actor-sheet.hbs",
            width: 970,
            height: 750,
            tabs: [{navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "stats"}],
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }
}
