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
    public class ServicesDetailsRepository : RepositoryBase<Services>, IServicesDetailsRepository
    {
        private StylesoftContext ktConContext;
        public ServicesDetailsRepository(StylesoftContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<ServicesView> GetAllServicesDetails()
        {
            var services = (from s in this.ktConContext.Services
                            join e in this.ktConContext.EnrolledSalon
                            on s.EnrolledSalonId equals e.EnrolledSalonId
                            join sl in this.ktConContext.SalonLocation
                            on s.ShopLocationId equals sl.ShopLocationId
                            join c in this.ktConContext.ServiceCategory
                            on s.CategoryId equals c.CategoryId
                            select new ServicesView
                            {
                                ServicesId = s.ServicesId,
                                EnrolledSalonId = s.EnrolledSalonId,
                                OwnerName = e.SalonOwnerName,
                                ShopLocationId = s.ShopLocationId,
                                ShopName = sl.ShopName,
                                CategoryId = s.CategoryId,
                                CategoryName = c.CategoryName,
                                ServiceName = s.ServiceName,
                                ServiceDescription = s.ServiceDescription,
                                ServiceCost = s.ServiceCost,
                                ServiceDuration = s.ServiceDuration,
                                Gender = s.Gender,
                                CommissionPercentage = s.CommissionPercentage

                            });
            return services.ToList();

        }

        public IEnumerable<Services> SearchServiceName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<Services>(); }

            return this.ktConContext.Set<Services>().Where(servicename => servicename.ServiceName.ToLower().Contains(searchString.ToLower()));
        }

        bool IServicesDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
