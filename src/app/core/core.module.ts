import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { PokemonService } from "./services";

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                PokemonService
            ]
        }
    }
}