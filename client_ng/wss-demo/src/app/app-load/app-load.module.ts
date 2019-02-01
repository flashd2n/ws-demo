import { NgModule, APP_INITIALIZER } from "@angular/core";
import { GlueService } from '../services/glue-service';

export function setupGlue(glueService: GlueService) {
    return () => glueService.initializeGlue();
}

@NgModule({
    providers: [
        { provide: APP_INITIALIZER, useFactory: setupGlue, deps: [GlueService], multi: true },
    ]
})
export class AppLoadModule {

}