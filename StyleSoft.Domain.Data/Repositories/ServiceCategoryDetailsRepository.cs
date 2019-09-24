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
    public class ServiceCategoryDetailsRepository : RepositoryBase<ServiceCategory>, IServiceCategoryDetailsRepository
    {
        private StylesoftContext ktConContext;
        public ServiceCategoryDetailsRepository(StylesoftContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
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

        bool IServiceCategoryDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
