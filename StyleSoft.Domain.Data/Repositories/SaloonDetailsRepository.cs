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
    public class SaloonDetailsRepository : RepositoryBase<SalonLocation>, ISaloonDetailsRepository
    {
        private StylesoftContext ktConContext;
        public SaloonDetailsRepository(StylesoftContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        public int GetSaloonNo()
        {
            int maxSaloonNo = this.ktConContext.SalonLocation.Select(p => p.ShopLocationId).DefaultIfEmpty(0).Max() + 1;
            return maxSaloonNo;
        }

        public IEnumerable<SalonLocation> SearchShopLocation(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<SalonLocation>(); }

            return this.ktConContext.Set<SalonLocation>().Where(shopname => shopname.ShopName.ToLower().Contains(searchString.ToLower()));
        }

        //public IEnumerable<TblCustomerMaster> GetAllCustomer()
        //{

        //    var TblCustomerMasters = this.ktConContext.TblCustomerMaster
        //               .Include(blog => blog.Location)
        //               .ToList();
        //    return TblCustomerMasters;
        //}

        bool ISaloonDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
