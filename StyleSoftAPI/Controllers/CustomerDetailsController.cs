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
    [Route("api/CustomerDetails/")]
    public class CustomerDetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public CustomerDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<Customer> GetAll()
        {
            var Customerdetails = this._repoWrapper.Customer.FindAll().ToList();
            return Customerdetails;
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
        public bool Add([FromBody] Customer customer)
        {
            try
            {
                this._repoWrapper.Customer.Create(customer);
                this._repoWrapper.Customer.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Update")]
        public bool Update([FromBody] Customer customer)
        {
            try
            {
                this._repoWrapper.Customer.Update(customer);
                this._repoWrapper.Customer.Save();
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
