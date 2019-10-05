using System;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;
using System.Linq;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;
using StyleSoft.Domain.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace StyleSoft.Domain.Data.Repositories
{
    public class AppointmentDetailsRepository : RepositoryBase<Appointment>, IAppointmentDetailsRepository
    {
        private StylesoftContext ktConContext;
        public AppointmentDetailsRepository(StylesoftContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<AppointmentView> GetAllAppointmentDetails()
        {
            var appointments= (from s in this.ktConContext.Appointment
                               join e in this.ktConContext.EnrolledSalon
                            on s.EnrolledSalonId equals e.EnrolledSalonId
                            join sl in this.ktConContext.SalonLocation
                            on s.ShopLocationId equals sl.ShopLocationId
                            join c in this.ktConContext.Services
                            on s.ServiceId equals c.ServicesId
                            select new AppointmentView
                            {
                                AppointmentId = s.AppointmentId,
                                EnrolledSalonId = s.EnrolledSalonId,
                                OwnerName = e.SalonOwnerName,
                                ShopLocationId = s.ShopLocationId,
                                Address1 = sl.ShopAddress1,
                                ServiceId = s.ServiceId,
                                ServiceName = c.ServiceName,
                                CustomerMobile = s.CustomerMobile,
                                RelationType = s.RelationType,
                                AppointmentDate =s.AppointmentDate,
                                AppointmentTime = s.AppointmentTime,
                                Status = s.Status

                            });
            return appointments.ToList();
        }

        bool IAppointmentDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
