import { IFormMappingTypeHelper } from "./form-mapping-type-helper";

export interface IAnalysisFilter {
    types: string[],
}

type analysiFilterForm = IFormMappingTypeHelper<IAnalysisFilter>
export interface IAnalysisFilterForm extends analysiFilterForm {

}