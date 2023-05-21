import { IFormMappingTypeHelper } from "./form-mapping-type-helper";

export type IAnalysisFilter =
    { [key in string]: valuesBoolean }


type valuesBoolean = {
    [key in string]: boolean
}

type analysiFilterForm = IFormMappingTypeHelper<IAnalysisFilter>
export interface IAnalysisFilterForm extends analysiFilterForm {

}