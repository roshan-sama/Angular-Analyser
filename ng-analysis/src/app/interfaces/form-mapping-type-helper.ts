import { FormControl } from "@angular/forms"

export type IFormMappingTypeHelper<Type> = {[Properties in keyof Type]: FormControl<Type[Properties]>}