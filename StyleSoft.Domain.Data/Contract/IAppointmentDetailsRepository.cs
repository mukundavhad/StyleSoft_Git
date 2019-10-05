using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface IAppointmentDetailsRepository : IRepositoryBase<Appointment>
    {
        bool Authenticate();

        IEnumerable<AppointmentView> GetAllAppointmentDetails();
       
    }
}
