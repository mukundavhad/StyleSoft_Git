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
    public class StaffDetailsRepository : RepositoryBase<StaffDetails>, IStaffDetailsRepository
    {
        private StylesoftContext ktConContext;
        public StaffDetailsRepository(StylesoftContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        //public IEnumerable<TblCustomerMaster> SearchCustomer(string searchString)
        //{
        //    if(string.IsNullOrEmpty(searchString))
        //    { return this.ktConContext.Set<TblCustomerMaster>(); }

        //   return this.ktConContext.Set<TblCustomerMaster>().Where(customer => customer.CustmerName.ToLower().Contains(searchString.ToLower()));
        //}

        public IEnumerable<StaffDetailsView> GetAllStaffDetails()
        {
            var staff = (from s in this.ktConContext.StaffDetails
                            join e in this.ktConContext.Address
                            on s.AddressId equals e.AddressId
                            join sl in this.ktConContext.SalonLocation
                            on s.ShopLocationId equals sl.ShopLocationId
                            select new StaffDetailsView
                            {
                                StaffId = s.StaffId,
                                AddressId = s.AddressId,
                                Address1=e.Address1,
                                SalonOwnerMobile = s.SalonOwnerMobile,
                                StaffMobileNumber=s.StaffMobileNumber,
                                ShopLocationId = s.ShopLocationId,
                                ShopName = sl.ShopName,
                                StaffName = s.StaffName,
                                CurrentlyWorkingInd = s.CurrentlyWorkingInd,
                                CommissionPercentage = s.CommissionPercentage

                            });
            return staff.ToList();
        }

        bool IStaffDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
