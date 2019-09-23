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
    public class AddressDetailsRepository : RepositoryBase<Address>, IAddressDetailsRepository
    {
        private StylesoftContext ktConContext;
        public AddressDetailsRepository(StylesoftContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<Address> SearchAddress(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<Address>(); }

            return this.ktConContext.Set<Address>().Where(address => address.Address1.ToLower().Contains(searchString.ToLower()));
        }

        //public IEnumerable<TblCustomerMaster> GetAllCustomer()
        //{

        //    var TblCustomerMasters = this.ktConContext.TblCustomerMaster
        //               .Include(blog => blog.Location)
        //               .ToList();
        //    return TblCustomerMasters;
        //}

        bool IAddressDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
