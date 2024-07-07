/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
import {CoCItemSheet} from "/systems/coc/module/items/item-sheet.js";

export class CoCthItemSheet extends CoCItemSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["coc", "cocth", "sheet", "item", this.type],
            template: "/systems/coc/templates/items/item-sheet.hbs",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "description"}],
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }
}
