﻿using System;
using System.Collections.Generic;
using System.Text;

namespace StyleSoft.Domain.Data.Contract
{

    public interface IRepositoryWrapper
    {
        ISaloonDetailsRepository Saloon { get; }
        IEnrolledSalonDetailsRepository EnrolledSalon { get; }
        IAddressDetailsRepository Address { get; }
        ICustomerDetailsRepository Customer { get; }
        IStaffDetailsRepository Staff { get; }
        IServicesDetailsRepository Services { get; }
        IAppointmentDetailsRepository Appointment { get; }
    }
}
