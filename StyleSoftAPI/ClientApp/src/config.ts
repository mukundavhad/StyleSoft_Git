
//export const API_URL = window.location.origin + "/StyleSoft/api/";
export const API_URL = window.location.origin + "/api/";
export const APP_CONSTANT={
  USER_APIS : {
    LOGIN: API_URL + "Product/login"
  },
    SALOONDETAILS: {
        ADD: API_URL + 'SaloonDetails/Add',
        GETALL: API_URL + 'SaloonDetails/GetAll',
        GETSALOONNO: API_URL + 'SaloonDetails/GetSaloonNo',
        GETByID: API_URL + 'SaloonDetails/GetByID',
        EDIT: API_URL + 'SaloonDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        SEARCH_SHOPLOCATION: API_URL + 'SaloonDetails/SearchShopLocation',
    },

    SERVICESDETAILS: {
        ADD: API_URL + 'ServicesDetails/Add',
        GETALL: API_URL + 'ServicesDetails/GetAll',
        GETSERVICENO: API_URL + 'ServicesDetails/GetServiceNo',
        GETByID: API_URL + 'ServicesDetails/GetByID',
        EDIT: API_URL + 'ServicesDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        SEARCH_SERVICENAME: API_URL + 'ServicesDetails/SearchServiceName',
    },

    APPONTMENTDETAILS: {
        ADD: API_URL + 'AppointmentDetails/Add',
        GETALL: API_URL + 'AppointmentDetails/GetAll',
        GETAPPONTMENTNO: API_URL + 'AppointmentDetails/GetAppointmentNo',
        //GETByID: API_URL + 'Customer/GetByID',
        SAVEAPPOINTMENTMASTER: API_URL + 'AppointmentDetails/SaveAppointmentMaster',
        EDIT: API_URL + 'AppointmentDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
    },

    ENROLLEDSALONDETAILS: {
        ADD: API_URL + 'EnrolledSalonDetails/Add',
        GETALL: API_URL + 'EnrolledSalonDetails/GetAll',
        GETENROLLEDSALONNO: API_URL + 'EnrolledSalonDetails/GetEnrolledSalonNo',
        GETByID: API_URL + 'EnrolledSalonDetails/GetByID',
        EDIT: API_URL + 'EnrolledSalonDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        SEARCH_OWNERNAME: API_URL + 'EnrolledSalonDetails/SearchOwnerName',
    },

    ADDRESSDETAILS: {
        ADD: API_URL + 'AddressDetails/Add',
        GETALL: API_URL + 'AddressDetails/GetAll',
        GETADDRESSNO: API_URL + 'AddressDetails/GetAddressNo',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'AddressDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        SEARCH_ADDRESSDETAILS: API_URL + 'AddressDetails/SearchAddress',
    },
    CUSTOMERDETAILS: {
        ADD: API_URL + 'CustomerDetails/Add',
        GETALL: API_URL + 'CustomerDetails/GetAll',
        GETCUSTOMERNO: API_URL + 'CustomerDetails/GetCustomerNo',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'CustomernDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },

    STAFFDETAILS: {
        ADD: API_URL + 'StaffDetails/Add',
        GETALL: API_URL + 'StaffDetails/GetAll',
        GETSTAFFNO: API_URL + 'StaffDetails/GetStaffNo',
        //GETByID: API_URL + 'Customer/GetByID',
        EDIT: API_URL + 'StaffDetails/Update',
        //DELETE: API_URL + 'Customer/Delete',
        //SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },
}
