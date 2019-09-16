import { Observable, Subject } from 'rxjs';
import { FormGroup } from "@angular/forms";

export class DialogRef {
  constructor() {}

  close(result?: any) {
    this._afterClosed.next(result);
  }

  private readonly _afterClosed = new Subject<any>();
  afterClosed: Observable<any> = this._afterClosed.asObservable();

  public markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  public validateForm = (supplierForm: FormGroup): boolean => {
    if (supplierForm.status !="INVALID") {
      return true;
    }
    this.markFormGroupTouched(supplierForm);
    return false;
  }
  public validateForm1 = (customerForm: FormGroup): boolean => {
    if (customerForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(customerForm);
    return false;
  }

  public validateForm2 = (eggsrangemasterForm: FormGroup): boolean => {
    if (eggsrangemasterForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(eggsrangemasterForm);
    return false;
  }
  public validateForm3 = (employeeadvanceForm: FormGroup): boolean => {
    if (employeeadvanceForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(employeeadvanceForm);
    return false;
  }
  public validateForm4 = (employeeForm: FormGroup): boolean => {
    if (employeeForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(employeeForm);
    return false;
  }
  public validateForm5 = (enquiryForm: FormGroup): boolean => {
    if (enquiryForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(enquiryForm);
    return false;
  }
  public validateForm6 = (expencedetailsForm: FormGroup): boolean => {
    if (expencedetailsForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(expencedetailsForm);
    return false;
  }
  public validateForm7 = (expencetypeForm: FormGroup): boolean => {
    if (expencetypeForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(expencetypeForm);
    return false;
  }
  public validateForm8 = (locationForm: FormGroup): boolean => {
    if (locationForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(locationForm);
    return false;
  }
  public validateForm9 = (planmasterForm: FormGroup): boolean => {
    if (planmasterForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(planmasterForm);
    return false;
  }
  public validateForm10 = (productdescmasterForm: FormGroup): boolean => {
    if (productdescmasterForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(productdescmasterForm);
    return false;
  }
  public validateForm11 = (productForm: FormGroup): boolean => {
    if (productForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(productForm);
    return false;
  }
  public validateForm12 = (profilemasterForm: FormGroup): boolean => {
    if (profilemasterForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(profilemasterForm);
    return false;
  }
  public validateForm13 = (bookingdetailsForm: FormGroup): boolean => {
    if (bookingdetailsForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(bookingdetailsForm);
    return false;
  }
  public validateForm14 = (bookingcancelForm: FormGroup): boolean => {
    if (bookingcancelForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(bookingcancelForm);
    return false;
  }
  public validateForm15 = (salereceiptdetailsForm: FormGroup): boolean => {
    if (salereceiptdetailsForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(salereceiptdetailsForm);
    return false;
  }
  public validateForm16 = (purchasepaymentdetailsForm: FormGroup): boolean => {
    if (purchasepaymentdetailsForm.status != "INVALID") {
      return true;
    }
    this.markFormGroupTouched(purchasepaymentdetailsForm);
    return false;
  }

}
