import { FormControl } from "@angular/forms"

export type formMappingTypeHelper<Type> = [Properties in keyof Type]: FormControl<Type[Properties]>