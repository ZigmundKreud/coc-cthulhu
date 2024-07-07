import {CoCNpcSheet} from "/systems/coc/module/actors/npc-sheet.js";

export class CoCthNpcSheet extends CoCNpcSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["coc", "cocth", "sheet", "actor", "npc"],
            template: "/systems/coc/templates/actors/actor-sheet.hbs",
            width: 970,
            height: 750,
            tabs: [{navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "stats"}],
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }
}
