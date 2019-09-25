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
    public class EnrolledSalonDetailsRepository : RepositoryBase<EnrolledSalon>, IEnrolledSalonDetailsRepository
    {
        private StylesoftContext ktConContext;
        public EnrolledSalonDetailsRepository(StylesoftContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<EnrolledSalon> SearchOwnerName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<EnrolledSalon>(); }

            return this.ktConContext.Set<EnrolledSalon>().Where(ownername => ownername.SalonOwnerName.ToLower().Contains(searchString.ToLower()));
        }

        //public IEnumerable<TblCustomerMaster> GetAllCustomer()
        //{

        //    var TblCustomerMasters = this.ktConContext.TblCustomerMaster
        //               .Include(blog => blog.Location)
        //               .ToList();
        //    return TblCustomerMasters;
        //}

        bool IEnrolledSalonDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
