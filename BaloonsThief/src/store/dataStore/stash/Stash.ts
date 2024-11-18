import { makeAutoObservable } from "mobx";
import { RootStore } from "../../rootStore.ts";

export class Stash {
    protected readonly rootStore: RootStore;
    baloons: {
        color: string,
        amount: number,
    }[];
    amount: number;
    isAdding: boolean;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.baloons = [];
        this.amount = 0;
        this.isAdding = false;
        makeAutoObservable(this, {}, { autoBind: true })
    }

    addBaloon(baloon: { color: string, amount: number }) {
        this.baloons.push(baloon);
        this.amount += baloon.amount
    }

    switchAdding() {
        this.isAdding = !this.isAdding;
    }
}