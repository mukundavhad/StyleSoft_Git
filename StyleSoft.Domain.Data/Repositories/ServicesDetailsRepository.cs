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

        public IEnumerable<Services> GetAllServicesDetails()
        {
            var services = this.ktConContext.Services
                       .Include(blog => blog.EnrolledSalon)
                       .Include(blog=>blog.ShopLocation)
                       .Include(blog=>blog.Category)
                       .ToList();
            return services;
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
