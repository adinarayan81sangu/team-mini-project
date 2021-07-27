import { FormGroup } from '@angular/forms';
    
export function confirmpasswordvalidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmpasswordvalidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmpasswordvalidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}