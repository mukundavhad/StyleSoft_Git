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
    [Route("api/StaffDetails/")]
    public class StaffDetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public StaffDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<StaffDetails> GetAll()
        {
            var Staffdetails = this._repoWrapper.Staff.FindAll().ToList();
            return Staffdetails;
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
