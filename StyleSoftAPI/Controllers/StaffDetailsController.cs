using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;
using Microsoft.AspNetCore.Authorization;
namespace StyleSoftAPI.Controllers
{
    //[Authorize][Produces("application/json")]
    [Produces("application/json")]
    [Route("api/StaffDetails/")]
    public class StaffDetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public StaffDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public int GetStaffNo()
        {
            try
            {
                int staffno = this._repoWrapper.Staff.GetStaffNo();
                return staffno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<StaffDetailsView> GetAll()
        {
            var staffdetails = this._repoWrapper.Staff.GetAllStaffDetails().ToList();
            return staffdetails;
        }

        //[HttpPost("SearchCustomer")]
        //public IEnumerable<TblCustomerMaster> SearchCustomer([FromBody]string searchString)
        //{
        //    var Cusotmer = this._repoWrapper.Customer.SearchCustomer(searchString).ToList();
        //    return Cusotmer;
        //}
        //[HttpPost("GetByID")] 
        //public TblCustomerMaster GetByID([FromBody] int customerId)
        //{
        //    var Cusotmer = this._repoWrapper.Customer.FindByCondition(x=> x.CustomerId == customerId).FirstOrDefault();
        //    return Cusotmer;
        //}
        [HttpPost("Add")]
        public bool Add([FromBody] StaffDetails staff)
        {
            try
            {
                this._repoWrapper.Staff.Create(staff);
                this._repoWrapper.Staff.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Update")]
        public bool Update([FromBody] StaffDetails staff)
        {
            try
            {
                this._repoWrapper.Staff.Update(staff);
                this._repoWrapper.Staff.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        //[HttpPost("Delete")]
        //public bool Delete([FromBody] TblCustomerMaster customer)
        //{
        //    try
        //    {
        //        this._repoWrapper.Customer.Delete(customer);
        //        this._repoWrapper.Customer.Save();
        //        return true;
        //    }

        //    catch (Exception e)
        //    {
        //        return false;
        //    }


        //}



    }
}
