import { makeAutoObservable } from "mobx";
import { RootStore } from "../rootStore.ts";
import { Stash } from "./stash/Stash.ts";

export class DataStore {
    protected readonly rootStore: RootStore
    stash: Stash;
    bag: number;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.stash = new Stash(rootStore);
        this.bag = 0;
        makeAutoObservable(this, {}, { autoBind: true })
    }

    changeBag(amount: number) {
        this.bag = amount;
    }
}