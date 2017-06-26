import { EventEmitter, TemplateRef } from '@angular/core';
export declare class AutoCompleteComponent {
    dataProvider: any;
    options: any;
    keyword: string;
    showResultsFirst: boolean;
    alwaysShowList: boolean;
    hideListOnSelection: boolean;
    template: TemplateRef<any>;
    useIonInput: boolean;
    itemSelected: EventEmitter<any>;
    ionAutoInput: EventEmitter<string>;
    searchbarElem: any;
    inputElem: any;
    private suggestions;
    private showList;
    private defaultOpts;
    /**
     * create a new instace
     */
    constructor();
    /**
     * get items for auto-complete
     */
    getItems(): void;
    /**
     * show item list
     */
    private showItemList();
    /**
     * hide item list
     */
    private hideItemList();
    /**
     * select item from list
     * @param item
     */
    select(selection: any): void;
    /**
     * get current input value
     * @returns {string}
     */
    getValue(): string;
    /**
     * set current input value
     */
    setValue(value: string): void;
    /**
  
     /**
     * clear current input value
     */
    clearValue(hideItemList?: boolean): void;
    /**
     * handle document click
     * @param event
     */
    private documentClickHandler(event);
}
