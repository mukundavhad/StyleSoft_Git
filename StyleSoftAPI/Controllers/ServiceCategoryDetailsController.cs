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
    [Route("api/ServiceCategoryDetails/")]
    public class ServiceCategoryDetailsController : Controller
    {
        private IRepositoryWrapper _repoWrapper;

        public ServiceCategoryDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<ServiceCategory> GetAll()
        {
            var ServiceCategorydetails = this._repoWrapper.ServiceCategory.FindAll().ToList();
            return ServiceCategorydetails;
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
        public bool Add([FromBody] ServiceCategory servicecategory)
        {
            try
            {
                this._repoWrapper.ServiceCategory.Create(servicecategory);
                this._repoWrapper.ServiceCategory.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Update")]
        public bool Update([FromBody] ServiceCategory servicecategory)
        {
            try
            {
                this._repoWrapper.ServiceCategory.Update(servicecategory);
                this._repoWrapper.ServiceCategory.Save();
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
