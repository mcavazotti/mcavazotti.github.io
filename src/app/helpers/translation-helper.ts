import { TranslationService } from "../services/translation.service";

export class TranslationHelper {
    private activeLanguage: string;
    private translationData: any;

    constructor(component: string, private translationService: TranslationService, private translateFunction: (t: any) => void, private onError: ((e: any) => void) | undefined = undefined) {
        this.activeLanguage = translationService.getActiveLanguage();
        var subscription = translationService.loadTranslation(component).subscribe((data) => {
            this.translationData = data;
            this.translationService.activeLanguage.subscribe(lang => {
                this.activeLanguage = lang;
                this.applyTranslation();
            }, onError);
            subscription.unsubscribe();
        }, onError)
    }

    private applyTranslation() {
        var strippedTranslationData: any = {};
        for (const key in this.translationData) {
            if (Object.prototype.hasOwnProperty.call(this.translationData, key)) {
                strippedTranslationData[key] = this.translationData[key][this.activeLanguage];
            }
        }
        try {
            this.translateFunction(strippedTranslationData);
        } catch (error) {
            if(this.onError) this.onError(error);
            else throw error;
        }
    }
}