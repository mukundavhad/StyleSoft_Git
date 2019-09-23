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
    [Route("api/AddressDetails/")]
    public class AddressDetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public AddressDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<Address> GetAll()
        {
            var Addressdetails = this._repoWrapper.Address.FindAll().ToList();
            return Addressdetails;
        }

        [HttpPost("SearchAddress")]
        public IEnumerable<Address> SearchAddress([FromBody]string searchString)
        {
            var Adddress = this._repoWrapper.Address.SearchAddress(searchString).ToList();
            return Adddress;
        }

        //[HttpPost("GetByID")] 
        //public TblCustomerMaster GetByID([FromBody] int customerId)
        //{
        //    var Cusotmer = this._repoWrapper.Customer.FindByCondition(x=> x.CustomerId == customerId).FirstOrDefault();
        //    return Cusotmer;
        //}
        [HttpPost("Add")]
        public bool Add([FromBody] Address address)
        {
            try
            {
                this._repoWrapper.Address.Create(address);
                this._repoWrapper.Address.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Update")]
        public bool Update([FromBody] Address address)
        {
            try
            {
                this._repoWrapper.Address.Update(address);
                this._repoWrapper.Address.Save();
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
