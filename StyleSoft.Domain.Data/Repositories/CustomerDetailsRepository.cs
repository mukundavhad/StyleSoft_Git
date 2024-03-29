﻿using System;
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
    public class CustomerDetailsRepository : RepositoryBase<Customer>, ICustomerDetailsRepository
    {
        private StylesoftContext ktConContext;
        public CustomerDetailsRepository(StylesoftContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        public int GetCustomerNo()
        {
            int maxCustomerNo = this.ktConContext.Customer.Select(p => p.CustomerId).DefaultIfEmpty(0).Max() + 1;
            return maxCustomerNo;
        }

        //public IEnumerable<TblCustomerMaster> SearchCustomer(string searchString)
        //{
        //    if(string.IsNullOrEmpty(searchString))
        //    { return this.ktConContext.Set<TblCustomerMaster>(); }

        //   return this.ktConContext.Set<TblCustomerMaster>().Where(customer => customer.CustmerName.ToLower().Contains(searchString.ToLower()));
        //}

        //public IEnumerable<TblCustomerMaster> GetAllCustomer()
        //{

        //    var TblCustomerMasters = this.ktConContext.TblCustomerMaster
        //               .Include(blog => blog.Location)
        //               .ToList();
        //    return TblCustomerMasters;
        //}

        bool ICustomerDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
