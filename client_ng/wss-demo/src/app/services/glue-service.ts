import { Injectable } from "@angular/core";
import Glue, { Glue42 } from "tick42-glue";

@Injectable()
export class GlueService {

    private readonly STREAM_NAME = "WSSPrices";
    private glue: Glue42.Glue;

    public async initializeGlue() {

        this.glue = await Glue();
        (window as any).glue = this.glue;
    }

    public async getPrices() {

        const sub = await this.glue.agm.subscribe(this.STREAM_NAME);

        sub.onData((streamData) => {
            console.log(streamData.data);
        });
    }
}
