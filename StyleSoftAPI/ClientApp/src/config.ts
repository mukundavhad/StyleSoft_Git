
//export const API_URL = window.location.origin + "/StyleSoft/api/";
export const API_URL = window.location.origin + "/api/";
export const APP_CONSTANT={
  USER_APIS : {
    LOGIN: API_URL + "Product/login"
  },
    SALOONDETAILS: {
        ADD: API_URL + 'SaloonDetails/Add',
        GETALL: API_URL + 'SaloonDetails/GetAll',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'SaloonDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },
    ENROLLEDSALONDETAILS: {
        ADD: API_URL + 'EnrolledSalonDetails/Add',
        GETALL: API_URL + 'EnrolledSalonDetails/GetAll',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'EnrolledSalonDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },

    ADDRESSDETAILS: {
        ADD: API_URL + 'AddressDetails/Add',
        GETALL: API_URL + 'AddressDetails/GetAll',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'AddressDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },
    CUSTOMERDETAILS: {
        ADD: API_URL + 'CustomerDetails/Add',
        GETALL: API_URL + 'CustomerDetails/GetAll',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'CustomernDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },

    STAFFDETAILS: {
        ADD: API_URL + 'StaffDetails/Add',
        GETALL: API_URL + 'StaffDetails/GetAll',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'StaffDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },
}
