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
    [Route("api/ServicesDetails/")]
    public class ServicesDetailsController : Controller
    {
        private IRepositoryWrapper _repoWrapper;

        public ServicesDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public int GetServiceNo()
        {
            try
            {
                int serviceno = this._repoWrapper.Services.GetServiceNo();
                return serviceno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<ServicesView> GetAll()
        {
            var servicesdetails = this._repoWrapper.Services.GetAllServicesDetails().ToList();
            return servicesdetails;
        }

        [HttpPost("SearchServiceName")]
        public IEnumerable<Services> SearchServiceName([FromBody]string searchString)
        {
            var Servicename = this._repoWrapper.Services.SearchServiceName(searchString).ToList();
            return Servicename;
        }

        [HttpPost("GetByID")]
        public Services GetByID([FromBody] int servicesId)
        {
            var services = this._repoWrapper.Services.FindByCondition(x => x.ServicesId == servicesId).FirstOrDefault();
            return services;
        }

        [HttpPost("Add")]
        public bool Add([FromBody] Services services)
        {
            try
            {
                this._repoWrapper.Services.Create(services);
                this._repoWrapper.Services.Save();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] Services services)
        {
            try
            {
                this._repoWrapper.Services.Update(services);
                this._repoWrapper.Services.Save();
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
