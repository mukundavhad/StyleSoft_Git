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

        public IEnumerable<Appointment> GetAllAppointmentDetails()
        {
            var services = this.ktConContext.Appointment
                       .Include(blog => blog.EnrolledSalon)
                       .Include(blog=>blog.ShopLocation)
                       .Include(blog=>blog.Service)
                       .ToList();
            return services;
        }

        bool IAppointmentDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
